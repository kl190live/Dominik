import TodoItem from "./TodoItem";
import {Todo} from "./Interface";
import {useContext} from "react";
import DarkModeContext from "./DarkModeContext";

interface props
{
  todos:Todo[];
}


function TodoList({todos}:props){
    const {darkMode,setDarkMode} =useContext(DarkModeContext)
    return(
        <>
            <ul>
                <li>
                    {todos.map((e)=>(
                        <TodoItem key={e.id} todo={e} darkMode={darkMode}/>
                    ))}
                </li>
            </ul>
        </>
    )
}

export default TodoList;