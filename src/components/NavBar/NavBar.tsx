import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-center items-center gap-6 min-h-12 sticky top-0">
      <Link href={"/"} className="hover:text-amber-300">
        Home
      </Link>
      <Link href={"/about"} className="hover:text-amber-300">
        About
      </Link>
      <Link href={"/sports"} className="hover:text-amber-300">
        Sports
      </Link>
      <Link href={"/products/client-version"} className="hover:text-amber-300">
        Products
      </Link>
    </nav>
  );
}
