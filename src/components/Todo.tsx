import React, { useState } from "react";
import "../css/Todo.css";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
  const dispatch = useDispatch();
  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);
  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEditable(false);
  };
  return (
    <div className="todo">
      {editable ? (
        <input
          className="todo-update-input"
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{content}</div>
      )}
      <div>
        <IoMdRemoveCircleOutline
          onClick={handleRemoveTodo}
          className="remove-button"
        />
        {editable ? (
          <FaCheck className="edit-button" onClick={handleUpdateTodo} />
        ) : (
          <FaRegEdit
            onClick={() => setEditable(true)}
            className="edit-button"
          />
        )}
      </div>
    </div>
  );
}

export default Todo;
