import React, {ChangeEvent, useContext, useState} from 'react';
import '../App.css';
import TodoList from "./TodoList";
import {Todo} from "./Interface";
import DarkModeContext from "./DarkModeContext";
import Toolbar from "./Toolbar";

function App() {

    const [darkMode,setDarkMode]=useState(false)
    const [todos,setTodos]=useState<Todo[]>([{
        id:'1',
        text:'test1'
    },{
        id:'2',
        text:'test2'
    }])

  return (
   <>
        <DarkModeContext.Provider value={{darkMode,setDarkMode}}>
            <Toolbar/>
            <TodoList todos={todos} />
        </DarkModeContext.Provider>
   </>
  );
}

export default App;
