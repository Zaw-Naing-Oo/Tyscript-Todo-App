import React, { useRef } from 'react'
import './style.css'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
// console.log(todo);
const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' 
      onSubmit={ (e) => {
          handleAdd(e);
          // blur when focus on input
          inputRef.current?.blur();
      }}
    >
       <input 
         ref={inputRef}
         type="input" 
         placeholder='Enter a Task' 
         className='input__box' 
         value={todo}
         onChange={(e) => setTodo(e.target.value)}
         />
       <button className='input_submit' type='submit'>GO</button>
    </form>
  )
}

export default InputField