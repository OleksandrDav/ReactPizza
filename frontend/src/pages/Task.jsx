import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { createTask, deleteTask } from "../redux/slices/taskSlice";

const Task = () => {
  const [taskInput, setTaskInput] = useState("");

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);

  function addTask() {
    const post = {
      id: Date.now(),
      name: taskInput,
    };
    dispatch(createTask(post));
    setTaskInput("");
  }
  return (
    <div className="task-container">
      <input
        type="text"
        value={taskInput}
        placeholder="Some task"
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask} disabled={taskInput.length === 0}>
        Add
      </button>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <p>{task.name}</p>
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
