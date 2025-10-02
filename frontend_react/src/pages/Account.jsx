import React from 'react'
import './Account.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import axiosInstance from '../axosInstance'

export default function Account(){
    const [message, setMessage]=useState("");

    async function protectedView(){
        try{
            const response=await axiosInstance.get('/api/protected_view/')
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