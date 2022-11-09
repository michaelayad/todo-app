import { useState } from "react";
import TodoList from "../todoList/todoList";

const Header = () => {
  const [task, setTask] = useState({});

  function addTask() {
    let taskValue = document.getElementById("text1").value;
    if (taskValue) {
      setTask({ title: taskValue });
      document.getElementById("text1").value = "";
    }
  }

  // not using  usecallback hooks
  const getTask = () => {
    return task;
  };
  return (
    <>
      <div className="container-fluid bg-primary text-light sticky-top">
        <div className="container mx-5 pb-3 ">
          <h1 className="fs-1 fw-bold pt-2">TO-DO APP!</h1>
          <p className="fs-5 fw-bold py-2">Add New ToDO</p>
          <input
            type="text"
            name=""
            id="text1"
            className="form-control"
            placeholder="Enter Your Task"
          />
          <div className="w-100 my-2 text-end">
            <button
              className="btn btn-outline-light fs-4 fw-bold"
              onClick={() => {
                addTask();
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container mx-5 pb-3 px-5">
          <TodoList getTask={getTask} />
        </div>
      </div>
    </>
  );
};
export default Header;
