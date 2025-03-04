import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#ddd" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
