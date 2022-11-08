import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <div>
      <Link to='/'> Home Page</Link>
      <Link to='/todo-form'>ToDo Form</Link>
    </div>
  );
};

export default NavBar;
