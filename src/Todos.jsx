import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeToDo , moveToFirst } from './todoSlice';

function Todos({ alltaskvisible }) {

   const todos =  useSelector(state => state.todo.todos);
   const dispatch = useDispatch();

   const [ todo , setTodo ] = useState([])

  return (
    <>
    <div className={`h-[85vh] w-[94vw] lg:w-[50vw] lg:p-[2vw] lg:h-[70vh] bg-black absolute p-[5vw] transition-all delay-100 ease-in ${alltaskvisible ? "opacity-100 scale-100 z-40" : "opacity-0 scale-90"}`}>
       {
        todos.map((todo)=>(
            <li key={todo.id} className='flex items-center justify-between w-full border-4 bg-zinc-900 mt-[4vw] p-[4vw] lg:p-[1vw] lg:mt-[1vw]'>
                <div className="w-[85vw] flex items-center gap-4">
                  <input type="checkbox" className="h-[5vw] w-[5vw]" onChange={() => dispatch(moveToFirst(todo.id))}/>
                  <p className='overflow-hidden text-white text-start text-2xl w-[90%] h-[7vh] lg:text-[1.5vw]'>{todo.text}</p>
                </div>
                <div className="h-[5vh] w-[10vw] bg-red-600 rounded-xl lg:h-[4vh] lg:w-[5vw]">
                    <button onClick={() => dispatch(removeToDo(todo.id))} className='w-full h-full font-bold text-[3vw] lg:text-[1vw]'>X</button>
                </div>
            </li>
        ))
       }
    </div>
    </>
  )
}

export default Todos
