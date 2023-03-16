import { Link } from "@remix-run/react";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/posts">Posts</Link>{" "}
      <Link to="/contact">Contact</Link>{" "}
      <Link to="/sign-in">Sign In</Link>
    </nav>
  );
}

export default Nav;
