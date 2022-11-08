import ToDoCard from "../Components/ToDoCard";

const HomePage = (props) => {
  const { toDoList } = props;
  return (
    <div>
      <h1>Fullstack ToDo Application</h1>
      {toDoList.map((todo, index) => {
        return <ToDoCard todo={todo} key={index} />;
      })}
    </div>
  );
};

export default HomePage;
