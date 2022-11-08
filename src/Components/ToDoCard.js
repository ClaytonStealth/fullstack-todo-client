const ToDoCard = (props) => {
  const { todo } = props;
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>ID: {todo.id}</p>
      <p>Description: {todo.description}</p>
      <p>Priority: {todo.priority}</p>
      {todo.isComplete !== false ? (
        <p>Complete: {todo.isComplete}</p>
      ) : (
        <p>Incomplete</p>
      )}
      <p>Creation Date: {todo.creationDate.toString()}</p>
      <p>Last Modified: {todo.lastModified.toString()}</p>
      {todo.completedDate && (
        <p>Completed Date: {todo.completedDate.toString()}</p>
      )}
      <hr />
    </div>
  );
};

export default ToDoCard;
