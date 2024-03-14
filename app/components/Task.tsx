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
    <div className='mb-10 p-4 border rounded-md shadow-sm'>
      <h1 className='text-xl font-bold mb-2'>{title}</h1>
      <p className='text-gray-700 mb-2'>{description}</p>
      <p className={`text-sm ${completed ? 'text-green-600' : 'text-red-600'} font-semibold mb-2`}>
        {completed ? 'Completed' : 'Pending'}
      </p>
      <p className='text-gray-600 mb-2'>Due Date: {dueDate}</p>
      <p className='text-gray-600 mb-2'>Priority: {priority}</p>
      <button onClick={deleteTask} className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2'>
        Delete
      </button>
      {!completed && (
        <button onClick={updateTask} className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>
          Complete
        </button>
      )}
    </div>
  );
}

export default Task