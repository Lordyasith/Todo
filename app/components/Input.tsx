"use client"
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Calendar } from "@/components/ui/calendar"
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const Input = () => {
    const [todoTitle,setTodoTitle]=useState("")
    const [todoDesc,setTodoDesc]=useState("")
    const [dueDate,setDueDate]=React.useState<Dayjs | null>(null);

    const [priority,setPriority]=useState("")
    const [completed,setCompleted]=useState("")
    const [createdAt,setCreatedAt]=useState("")

    const createTodo = async(e:React.FormEvent)=>{
        e.preventDefault();

        if(!todoTitle){
            alert("Title required")
            return;
        }
        try{
            const apiUrl="api/tasks/create"
        const reqMethod="POST";
        const requestData={
            method:reqMethod,
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({todoTitle,todoDesc,dueDate})
        }
        const response=await fetch(apiUrl,requestData)

        if(!response.ok){
            throw new Error(
                response.statusText
            )
        }

        setTodoTitle("")
        toast.success("Todo created")
        window.location.reload()

        }catch(error){
            console.log(error)
            toast.error("something went wrong")    
        }
        
        
    }

  return (
    <div>
        <form onSubmit={createTodo}>
            <input type='text' placeholder='create todo' value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)}/>
            <input type='text' placeholder='Enter description' value={todoDesc} onChange={(e)=>setTodoDesc(e.target.value)}/>
            <LocalizationProvider  dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker value={dueDate} onChange={(newValue)=>setDueDate(newValue)}/>
            </DemoContainer>
            </LocalizationProvider>
            
        <button type='submit'>Add</button>

        </form>
        
    </div>
  )
}

export default Input