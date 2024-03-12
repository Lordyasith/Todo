const getTasks =async ()=>{
    const res=await fetch("http://localhost:3000/api/tasks", { cache: 'no-store' })
    if(!res.ok){
        throw new Error("Something went wrong")
    }
    return res.json()
}

    export default async function Tasks() {
        const tasks=await getTasks()
        return(
            <div>
                {tasks.map((task:any)=>(
                    <h1>{task.title}</h1>
                ))}
                
            </div>
        )
        
    }