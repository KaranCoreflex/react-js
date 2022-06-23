import React from 'react'
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './style.css'


interface props{
    todos:Todo[];
    todo:string;
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({todo, todos, setTodos}) => {

  return (
    <div className='todos'>
        {
            todos.map((ele)=>(
                <SingleTodo
                    todo={ele.todo}
                    key={ele.id}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))
        }
    </div>
  )
}

export default TodoList;