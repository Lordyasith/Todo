import React from 'react'
import toast from 'react-hot-toast';

interface TaskItemProps{
  title:string;
  id:string;
  description:string;
  completed?:string;
  dueDate:string;
  priority:string;
  createdAt:string;
}



const  Task = ({title,id,description,completed,dueDate,priority,createdAt}:TaskItemProps) => {
  const updateTask=async()=>{
    try{
      const apiUrl=`api/tasks/${id}`;

      const requestData={
        method:"PATCH",
        headers:{
          "Content-Type":"application/json",
        }
      }
      const response=await fetch(apiUrl,requestData);

      if(!response.ok){
        throw new Error("failed to fetch")
      }
      toast.success("Todo updated")
      window.location.reload()

    }catch(error){
      toast.error("something went wrong")
      console.error(error)
    }
  }


  const deleteTask=async()=>{
    alert(`delete ${title}`);
    try{
      const apiUrl=`api/tasks/${id}`;

      const requestData={
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
        }

      }
      const response=await fetch(apiUrl,requestData);

      if(!response.ok){
        throw new Error("failed to fetch")
      }

      toast.success("Todo deleted")
      window.location.reload()
    }catch(error){
      toast.error("something went wrong")
      console.error(error)

    }
  }
  return (
    <div className='mb-10'>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{completed}</p>
      <p>{dueDate}</p>
      <p>{priority}</p>
      <button onClick={deleteTask} type='submit'>Delete</button>
      <button onClick={updateTask} type="submit">Completed</button>
    </div>
  )
}

export default Task