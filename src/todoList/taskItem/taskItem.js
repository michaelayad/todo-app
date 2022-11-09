const TaskItem = (params) => {
  const completeTask = () => {
    params.parentVerifyComplete(params.index, !params.task.complete);
  };
  return (
    <>
      <div
        className={`container d-flex flex-row align-items-start alert ${
          params.task.complete ? "alert-secondary" : "alert-primary"
        } my-2`}
      >
        <div className="text-end fs-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="defaultCheck1"
            checked={params.task.complete}
            onChange={() => {
              params.parentVerifyComplete(params.index, !params.task.complete);
            }}
          />
        </div>
        <p
          className={`mx-3 flex-grow-1 fs-5 ${
            params.task.complete && "text-decoration-line-through"
          } `}
        >
          {params.task.title}
        </p>
        <button
          className=" btn btn-danger"
          onClick={() => {
            params.parentDeleteTask(params.index);
          }}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default TaskItem;
