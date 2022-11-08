import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./ErrorPage";
import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";
import { useState, useEffect } from "react";
import ToDoForm from "./Pages/ToDoFormPage";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: (
            <HomePage
              setShouldRefetch={setShouldRefetch}
              toDoList={toDoList}
              urlEndpoint={urlEndpoint}
            />
          ),
          index: true,
        },
        {
          path: "/todo-form",
          element: (
            <ToDoForm
              urlEndpoint={urlEndpoint}
              setShouldRefetch={setShouldRefetch}
            />
          ),
        },
      ],
    },
  ]);
  useEffect(() => {
    const fetchToDos = async () => {
      const res = await fetch(`${urlEndpoint}/todos/all`);
      const fetchedToDosPayload = await res.json();
      setToDoList(fetchedToDosPayload.todos);
    };
    fetchToDos();
  }, [shouldRefetch]);
  return (
    <div className='App'>
      <header className='App-header'>
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
