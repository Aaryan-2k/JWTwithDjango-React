import React from 'react'
import './Account.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Account(){
    const [message, setMessage]=useState("");

    async function protectedView(){
        try{
            const response=await axios.get('https://bookish-parakeet-jj5g775prrp53pgg5-8000.app.github.dev/api/protected_view/',{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('access_token')}`
                }
            })
            setMessage(response.data.message)
        }
        catch(error){
            console.log(error)
            console.log(error.response.data)
        }
    }
    useEffect(()=>{
        protectedView();
    },[]);

    return (
        <div className='account-view'>
            <h1>THis the the data fron back end == {message}</h1>
        </div>
    )
}