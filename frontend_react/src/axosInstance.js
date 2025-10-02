import axios from 'axios';

const axiosInstance=axios.create({
    baseURL:'https://bookish-parakeet-jj5g775prrp53pgg5-8000.app.github.dev/'
})

// request interceptor
axiosInstance.interceptors.request.use(
    (config)=>{
        const access_token=localStorage.getItem('access_token');
        if(access_token){
            config.headers['Authorization']=`Bearer ${access_token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

// response interceptor
axiosInstance.interceptors.response.use((request)=>request, async (error)=>{
    const originalRequest=error.config;
    if(error.response.status===401 && !originalRequest.retry){
        originalRequest.retry=true;
        const refrest_token=localStorage.getItem('refresh_token');
        try{
            const response= await axiosInstance.post('/api/token/refresh/',{
                refresh:refrest_token
            });
            localStorage.setItem('access_token',response.data.access);
            originalRequest.headers['Authorization']=`Bearer ${response.data.access}`;
            return axiosInstance(originalRequest);
        }
        catch(err){
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');

            window.location.href='/login';
        }
    }
    return Promise.reject(error);
})
export default axiosInstance;