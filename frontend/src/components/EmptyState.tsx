import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
      <h3 className="text-lg font-bold text-slate-900">No GoLinks yet</h3>
      <p className="mt-2 text-sm text-slate-500">
        Create your first short link like sam, github, resume, or docs.
      </p>
      <Link
        href="/dashboard"
        className="mt-5 inline-block rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
      >
        Create GoLink
      </Link>
    </div>
  );
}