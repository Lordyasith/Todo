// "use client"
// import React, { useState } from 'react'
// import toast from 'react-hot-toast';
// import { Calendar } from "@/components/ui/calendar"
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { Dayjs } from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

// const Input = () => {
//     const [todoTitle,setTodoTitle]=useState("")
//     const [todoDesc,setTodoDesc]=useState("")
//     const [dueDate,setDueDate]=React.useState<Dayjs | null>(null);

//     const [priority,setPriority]=useState("")
//     const [completed,setCompleted]=useState("")
//     const [createdAt,setCreatedAt]=useState("")

//     const createTodo = async(e:React.FormEvent)=>{
//         e.preventDefault();

//         if(!todoTitle){
//             alert("Title required")
//             return;
//         }
//         try{
//         const apiUrl="api/tasks/create"
//         const reqMethod="POST";
//         const requestData={
//             method:reqMethod,
//             headers:{
//                 "Content-Type": "application/json",
//             },
//             body:JSON.stringify({todoTitle,todoDesc,dueDate,priority})
//         }
//         const response=await fetch(apiUrl,requestData)

//         if(!response.ok){
//             throw new Error(
//                 response.statusText
//             )
//         }

//         setTodoTitle("")
//         toast.success("Todo created")
//         window.location.reload()

//         }catch(error){
//             console.log(error)
//             toast.error("something went wrong")    
//         }
        
        
//     }
//     const handleChange = (event: SelectChangeEvent) => {
//         setPriority(event.target.value as string);
//       };

//   return (
//     <div>
//         <form onSubmit={createTodo}>
//             <input type='text' placeholder='create todo' value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)}/>
//             <input type='text' placeholder='Enter description' value={todoDesc} onChange={(e)=>setTodoDesc(e.target.value)}/>
//             <LocalizationProvider  dateAdapter={AdapterDayjs}>
//             <DemoContainer components={['DatePicker']}>
//                 <DatePicker value={dueDate} onChange={(newValue)=>setDueDate(newValue)}/>
//             </DemoContainer>
//             </LocalizationProvider>
            

//             <Box sx={{ minWidth: 120 }}>
//                 <FormControl fullWidth>
//                     <InputLabel id="demo-simple-select-label">Priority</InputLabel>
//                     <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={priority}
//                     label="Priority"
//                     onChange={handleChange}
//                     >
//                         <MenuItem value={"Low"}>Low</MenuItem>
//                         <MenuItem value={"Medium"}>Medium</MenuItem>
//                         <MenuItem value={"High"}>High</MenuItem>
//                     </Select>
//                 </FormControl>
//             </Box>
            
//         <button type='submit'>Add</button>

//         </form>
        
//     </div>
//   )
// }

// export default Input

"use client"

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Calendar } from "@/components/ui/calendar";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const Input = () => {
    const [todoTitle, setTodoTitle] = useState("");
    const [todoDesc, setTodoDesc] = useState("");
    const [dueDate, setDueDate] = useState<Dayjs | null>(null);
    const [priority, setPriority] = useState("");

    const createTodo = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!todoTitle) {
            alert("Title required");
            return;
        }
        try {
            const apiUrl = "api/tasks/create";
            const reqMethod = "POST";
            const requestData = {
                method: reqMethod,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ todoTitle, todoDesc, dueDate, priority })
            }
            const response = await fetch(apiUrl, requestData);

            if (!response.ok) {
                throw new Error(
                    response.statusText
                );
            }

            setTodoTitle("");
            toast.success("Todo created");
            window.location.reload();

        } catch (error) {
            console.log(error);
            toast.error("something went wrong");
        }
    }

    const handleChange = (event: SelectChangeEvent) => {
        setPriority(event.target.value as string);
    };

    return (
        <div className="p-4">
            <form onSubmit={createTodo} className="space-y-4">
                <input type='text' placeholder='Create todo' value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500" />
                <input type='text' placeholder='Enter description' value={todoDesc} onChange={(e) => setTodoDesc(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500" />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker value={dueDate} onChange={(newValue) => setDueDate(newValue)} />
                    </DemoContainer>
                </LocalizationProvider>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={priority}
                            label="Priority"
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                        >
                            <MenuItem value={"Low"}>Low</MenuItem>
                            <MenuItem value={"Medium"}>Medium</MenuItem>
                            <MenuItem value={"High"}>High</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <button type='submit' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Add
                </button>
            </form>
        </div>
    )
}

export default Input;
