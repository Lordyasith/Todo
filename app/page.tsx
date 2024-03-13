import Image from "next/image";
import Input from "./components/Input";
import Tasks from "./components/TaskList";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <div>
      <Input/>
      <br/>
      <TaskList/>
    </div>
    
  );
}
