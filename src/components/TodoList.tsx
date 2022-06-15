import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './style.css'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {
  return (
    // <div className='todos'>
    //    {todos.map( (todo) =>(
    //      <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}  />
    //    ))}  
    // </div>
    <div className='container'>

      <Droppable droppableId='TodosList'>
        { (provided, snapshot) => (
          <div className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ""}`} ref={provided.innerRef} {...provided.droppableProps}>

            <span className="todos__heading">
              Active Tasks
            </span>

            {  todos?.map( (todo,index) =>(
            <SingleTodo index={index} key={todo.id} todo={todo} todos={todos} setTodos={setTodos}  />
            )) }

            {/* This is for space under item when you drag item and before you drop it */}
            { provided.placeholder}

          </div>
        )}
      </Droppable>

      <Droppable droppableId='TodosRemove'>
        { (provided, snapshot) => (
          <div className={`todos  ${snapshot.isDraggingOver ? 'dragcomplete' : "remove"}`} ref={provided.innerRef} {...provided.droppableProps}>

            <span className="todos__heading">
                Completed Tasks
            </span> 

            {  completedTodos.map( (todo,index) =>(
            <SingleTodo index={index} key={todo.id} todo={todo} todos={completedTodos} setTodos={setCompletedTodos}  />
            )) }

            {/* This is for space under item when you drag item and before you drop it */}
            { provided.placeholder}

          </div>
        )}        
      </Droppable>

    </div>
  )
}

export default TodoList