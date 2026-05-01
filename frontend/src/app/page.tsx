import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Internal shortcut tool
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-slate-950">
            Open your important links faster with GoLink.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Create short slugs like sam, github, resume, docs, or payroll.
            Then type go + Tab + slug in Chrome to open the saved destination.
          </p>

          <div className="mt-8 flex gap-3">
            <Link
              href="/dashboard"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Open Dashboard
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold">Chrome shortcut setup</h2>

          <div className="mt-5 space-y-4 text-sm text-slate-700">
            <p>
              <strong>Name:</strong> GoLink
            </p>
            <p>
              <strong>Shortcut:</strong> go
            </p>
            <p>
              <strong>URL:</strong>{" "}
              <code className="rounded-lg bg-slate-100 px-2 py-1">
                http://localhost:3500/go/%s
              </code>
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-950 p-4 font-mono text-sm text-white">
            go + Tab + sam + Enter
          </div>
        </div>
      </section>
    </main>
  );
}