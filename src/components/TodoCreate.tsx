import React, { useState } from "react";
import "../css/TodoCreate.css";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import { TodoType } from "../types/Types";

function TodoCreate() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");
  const handleCreateTodo = () => {
    //Eger todo ici bossa uyar
    if (newTodo.trim().length == 0) {
      alert("Todo Giriniz!");
      return;
    }

    //Eger bir sikinti yoksa payload olustur. tipini belirt ve dispatch ile gonder
    const payload: TodoType = {
      id: Math.floor(Math.random() * 999999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        placeholder="Todo Giriniz..."
        className="todo-input"
        type="text"
      />
      <button className="todo-create-button" onClick={handleCreateTodo}>
        Oluştur
      </button>
    </div>
  );
}

export default TodoCreate;
