import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <Link href="/">Home</Link>{" "}
      <Link href="/posts">Posts</Link>{" "}
      <Link href="/contact">Contact</Link>{" "}
      <Link href="/sign-in">Sign In</Link>
    </nav>
  );
}

export default Nav;