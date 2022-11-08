import { useEffect, useState } from "react";

const ToDoCard = (props) => {
  const { todo, urlEndpoint, setShouldRefetch } = props;
  // const [isComplete, setIsComplete] = useState(false);
  const [id, setId] = useState(todo.id);
  const handleSetToDoComplete = async () => {
    setShouldRefetch(true);
    // if (todo.isComplete === false){
    //   setIsComplete(true);
    // } else {setIsComplete(false);}
    const result = await fetch(`${urlEndpoint}/todos/update-one/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isComplete: !todo.isComplete,
      }),
    });
    setShouldRefetch(false);
  };

  const handleDeleteToDo = async () => {
    setShouldRefetch(true);
    const result = await fetch(`${urlEndpoint}/todos/delete-one/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setShouldRefetch(false);
  };
  console.log(todo.completedDate);
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>ID: {todo.id}</p>
      <p>Description: {todo.description}</p>
      <p>Priority: {todo.priority}</p>
      {todo.isComplete !== false ? <p>Complete</p> : <p>Incomplete</p>}
      <p>Creation Date: {todo.creationDate.toString()}</p>
      <p>Last Modified: {todo.lastModified.toString()}</p>
      {todo.completedDate && (
        <p>Completed Date: {todo.completedDate.toString()}</p>
      )}
      <button
        onClick={() => {
          handleSetToDoComplete();
        }}
      >
        Toggle Complete
      </button>
      <button
        onClick={() => {
          handleDeleteToDo();
        }}
      >
        Delete ToDo
      </button>
      {/* <button onClick={()=>{}}>Edit ToDo</button> */}
      <hr />
    </div>
  );
};

export default ToDoCard;
