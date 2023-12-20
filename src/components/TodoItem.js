import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (updatedTitle.trim() !== "") {
      updateTodo({
        ...todo,
        title: updatedTitle,
      });
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-item">
      <div className="item-row">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div className="list-item">{todo.title}</div>
        )}
        <div className="buttons">
          <button className="editButton" onClick={handleEdit}>
            Edit
          </button>
          <button className="deleteButton" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
