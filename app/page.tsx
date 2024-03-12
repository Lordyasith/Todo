import Image from "next/image";
import Input from "./components/Input";
import Tasks from "./components/TaskList";

export default function Home() {
  return (
    <div>
      <Input/>
      <br/>
      <Tasks/>
    </div>
    
  );
}
