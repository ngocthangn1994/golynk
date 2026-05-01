import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-slate-900">
          GoLink
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="/" className="text-slate-600 hover:text-slate-900">
            Home
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}