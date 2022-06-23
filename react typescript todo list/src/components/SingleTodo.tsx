import React, { RefObject, useRef, useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { getValue } from '@testing-library/user-event/dist/utils';

interface props {
    todo: string;
    todos: Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    
}

const SingleTodo:React.FC<props> = ({todo, todos, setTodos}) => {
    
  const inputRef:React.LegacyRef<HTMLInputElement> | undefined= useRef(null);
  const spanRef:React.LegacyRef<HTMLInputElement> | undefined= useRef(null);
  const deleteRef:React.LegacyRef<HTMLInputElement> | undefined= useRef(null);
  const [updateTodo, setUpdatetodo] = useState(todo)

  const handelEdit = () => {
    //@ts-ignore
    inputRef.current.style.display = "block"
    //@ts-ignore
    spanRef.current.style.display = "none"
  
  }

  const handelDone = () =>{
      //@ts-ignore
      inputRef.current.style.display = "none"
      //@ts-ignore
      spanRef.current.style.display = "block"
      //@ts-ignore
      spanRef.current.style.textDecoration = "none"
  }

  const handelDelete = () => {
    //@ts-ignore
    spanRef.current.style.textDecoration = "line-through"
  }

  
  return (
    <div>
        <form >
          <span ref={spanRef}> {updateTodo} </span>  
           
          {<input type="text" className="todos__single--text" value={updateTodo} ref={inputRef} onChange={(e)=>setUpdatetodo(e.target.value)} />}
          <div>
            <span
              className="icon"
              onClick={handelEdit}
              >
              <AiFillEdit />
            </span>
            <span className="icon" onClick={handelDelete}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={handelDone}>
              <MdDone />
            </span>
          </div>
        </form>
    </div>
  )
}

export default SingleTodo