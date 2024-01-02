import React, { Fragment, useState } from "react";
import "./index.scss";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Wake up and observe Solat" },
  ]);

    const [newTodo, setNewTodo] = useState("");

    const handleNewTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const handleAddNewTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, { id: todos.length+1, todo: newTodo }])
        // console.log(todos)
    }
    
    const handleDeleteTodo = (id) => {
        const result = todos.filter((todo) => todo.id !== id)
        setTodos(result)
    }
  return (
    <section>
      <form>
        <h2>Todo List</h2>
        <input
          type="text"
          placeholder="Enter your to-do"
          onChange={handleNewTodo}
        />

        <input type="submit" value="Add" onClick={handleAddNewTodo} />
      </form>

      <ul>
              {todos?.map(({ id, todo }) => (
            <Fragment key={id}>
                      <li key={id}> {todo}
                      <span onClick={()=> handleDeleteTodo (id)}>&nbsp; &nbsp; x </span></li> 
                      
            </Fragment>
        ))}
      </ul>
    </section>
  );
};

export default Todo;
