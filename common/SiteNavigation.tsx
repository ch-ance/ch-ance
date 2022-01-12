import Link from "next/link";

export default function () {
  return (
    <nav>
      <ul className="w-full flex border-b justify-evenly py-4">
        <li key="home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li key="blog">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
