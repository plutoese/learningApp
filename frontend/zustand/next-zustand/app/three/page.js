"use client";

import { create } from "zustand";
import { useState } from "react";

const useStore = create((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

const DisplayTodos = () => {
  const { todos, deleteTodo } = useStore((state) => {
    return { todos: state.todos, deleteTodo: state.deleteTodo };
  });

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const TodosControl = () => {
  const addTodo = useStore((state) => state.addTodo);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

const App = () => {
  return (
    <>
      <DisplayTodos />
      <TodosControl />
    </>
  );
};

export default App;
