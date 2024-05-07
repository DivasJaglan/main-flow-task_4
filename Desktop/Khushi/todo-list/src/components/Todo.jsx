import { useState } from "react";

function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          placeholder={`New name for ${props.name}`}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn__primary"
          onClick={() => setEditing(false)}
        >
          ❌
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          🗃️
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn__primary"
          onClick={() => {
            setEditing(true);
          }}
        >
          ✏️
        </button>
        <button
          type="button"
          className="btn btn__primary"
          onClick={() => props.deleteTask(props.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
