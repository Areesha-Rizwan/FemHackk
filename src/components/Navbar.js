import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#0077cc", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/create-task" style={{ margin: "10px", color: "white" }}>Create Task</Link>
    </nav>
  );
}

export default Navbar;
