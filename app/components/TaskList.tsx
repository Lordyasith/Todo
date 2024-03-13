"use client"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Task from "./Task";






    export default  function Tasks(id:string) {
      const [tasks,setTasks]=useState([])

    //   useEffect(()=>{
    //     const fetchTasks=async()=>{
    //       try{
    //         const response=await fetch(`api/tasks`,{
    //           next: { revalidate: 1 },
    //         })
    //         if(!response.ok){
    //           throw new Error('failed to fetch items')
    //         }
    //         const data=await response.json();
    //         setTasks(data)
    //       }catch(error:any){
    //         console.error(`Error fetching data`)
    //         toast.error("error fetching data this time")
    //       }
    //     }
    //     fetchTasks()

    //   },[])

    useEffect(() => {
      const fetchTasks = () => {
        fetch(`api/tasks`, {
          // Add your fetch options here
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch items');
            }
            return response.json();
          })
          .then((data) => {
            setTasks(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            toast.error('Error fetching data this time');
          });
      };
  
      fetchTasks();
    }, [id]);
        
        

        return(
            <div>
                {/* {tasks.map((task:any)=>(
                    <div className="mb-6">
                        <h1 key={task.id}>{task.title}<span><p>{task.description}</p></span></h1><p>{task.priority}</p>
                        <p>{task.dueDate}</p>
                    </div>
                    
                ))} */}
                {tasks.map((task:any)=>(
                  <Task title={task.title} taskId={task.id} description={""} dueDate={""} priority={""} createdAt={""}/>
                ))

                }
                
                            
            </div>
        )
        
    }

    