import React, { useRef } from 'react'
import "./InputField.css";
interface props{
todo:string;
setTodo:React.Dispatch<React.SetStateAction<string>>,
handleAdd:(e:React.FormEvent)=>void,
}


const InputField:React.FC<props>= ({todo,setTodo,handleAdd}) => {
 const inputRef=useRef<HTMLInputElement>(null);
 
  return (
    <div>
        <form onSubmit={(e)=>{handleAdd(e)
         inputRef.current?.blur();
        }} className='input'>
         <input
         ref={inputRef}
         onChange={(e)=>{setTodo(e.target.value)}}
         value={todo}
         className='input-box' type="text" placeholder='Enter your task'/> 
         <button type="submit" className='input-submit'>Go</button>      
         </form>
    </div>
  )
}

export default InputField;