import {Todo} from "./Interface";

interface Props{
    todo:Todo;
    darkMode:boolean;
}

const TodoItem =({todo, darkMode}:Props)=>(
    <li
        style={{
            background: darkMode? 'black':'white',
            color: darkMode? 'white':'black'
    }}
    >
        {todo.text}
    </li>
)

export default TodoItem;