import React, { useId, useState } from "react";

const Todo = () => {
  const todoId = useId();
  const [todos, setTodos] = useState([
    { id: todoId, todo: "Wake up and observe Solat" },
  ]);

    const [newTodo, setNewTodo] = useState("");

    const handleNewTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const handleAddNewTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, {id:todoId, todo: newTodo} ])
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
          <li key={id}> {todo} </li>
        ))}
      </ul>
    </section>
  );
};

export default Todo;
