import ToDoCard from "../Components/ToDoCard";

const HomePage = (props) => {
  const { toDoList, urlEndpoint, setShouldRefetch } = props;
  return (
    <div>
      <h1>Fullstack ToDo Application</h1>
      {toDoList.map((todo, index) => {
        return (
          <ToDoCard
            todo={todo}
            key={index}
            urlEndpoint={urlEndpoint}
            setShouldRefetch={setShouldRefetch}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
