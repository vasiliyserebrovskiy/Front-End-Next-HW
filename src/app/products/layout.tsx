import Link from "next/link";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex justify-center gap-8 text-yellow-500">
        <Link
          href={"/products/client-version"}
          className="hover:text-amber-300"
        >
          Products client
        </Link>
        <Link
          href={"/products/server-version"}
          className="hover:text-amber-300"
        >
          Products server
        </Link>
      </nav>
      {children}
    </>
  );
}
