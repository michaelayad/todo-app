import { useCallback, useEffect, useState } from "react";
import TaskItem from "./taskItem/taskItem";

const TodoList = ({ getTask }) => {
  const [tasks, setTasks] = useState([]);
  const [restart, setRestart] = useState(false);
  useEffect(() => {
    setTasks([...tasks, { title: getTask().title, complete: false }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTask]);

  // useEffect(()=>{
  //   setTasks(tasks);
  // },[tasks])
  // const verifyComplete = useCallback(
  //   (index, val) => {
  //     tasks[index].complete = val;
  //     setTasks(
  //       // eslint-disable-next-line
  //       tasks
  //     );
  //     // eslint-disable-next-line
  //   },
  //   [tasks]
  // );
  const verifyComplete = (index, val) => {
    // console.log(tasks);
    tasks[index].complete = val;

    setTasks(
      // eslint-disable-next-line
      tasks
    );
    console.log(tasks);

    setRestart(!restart);
  };
  const deleteTask = (index, val) => {
    tasks.splice(index, 1);
    setTasks(tasks);
    setRestart(!restart);
  };

  return (
    <>
      {/* {console.log(tasks)} */}
      {/* eslint-disable-next-line */}
      {tasks.map((task, index) => {
        if (task.title)
          return (
            <TaskItem
              key={index}
              task={task}
              index={index}
              parentVerifyComplete={verifyComplete}
              parentDeleteTask={deleteTask}
            />
          );
      })}
    </>
  );
};

export default TodoList;
