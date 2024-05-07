import { useState } from "react";

function Form({ addTask }) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addTask(name);
    setName("");
  }
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        placeholder="Add a task here"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
