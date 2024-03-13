import React from 'react'
import toast from 'react-hot-toast';

interface TaskItemProps{
  title:string;
  taskId:string;
  description:string;
  completed?:boolean;
  dueDate:string;
  priority:string;
  createdAt:string;
}

const  Task = ({title,taskId,description,completed,dueDate,priority,createdAt}:TaskItemProps) => {
  const deleteTask=async()=>{
    alert(`delete ${title}`);
    try{
      const apiUrl=`api/tasks/${taskId}/delete`;

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
    <div>
      <h1>{title}</h1>
      <button onClick={deleteTask} type='submit'>Delete</button>
    </div>
  )
}

export default Task