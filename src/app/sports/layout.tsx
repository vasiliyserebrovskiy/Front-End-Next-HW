import Link from "next/link";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex justify-center items-center gap-8 font-bold text-yellow-500 bg-red-900 min-h-10 ">
        <Link href={"/sports/football"} className="hover:text-amber-100">
          Football
        </Link>
        <Link href={"/sports/swimming"} className="hover:text-amber-100">
          Swimming
        </Link>
        <Link href={"/sports/tennis"} className="hover:text-amber-100">
          Tennis
        </Link>
      </nav>
      {children}
    </>
  );
}
