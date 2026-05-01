"use client";

import { useEffect, useMemo, useState } from "react";
import { getLinks, deleteLink } from "../../lib/api";
import { LinkItem } from "../../types/link";
import LinkForm from "../../components/LinkForm";
import LinkCard from "../../components/LinkCard";
import SearchBar from "../../components/SearchBar";
import EmptyState from "../../components/EmptyState";

export default function DashboardPage() {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadLinks() {
    try {
      setLoading(true);
      setError("");

      const data = await getLinks();
      setLinks(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load links");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    const confirmDelete = confirm("Are you sure you want to delete this link?");

    if (!confirmDelete) return;

    await deleteLink(id);
    await loadLinks();
  }

  useEffect(() => {
    loadLinks();
  }, []);

  const filteredLinks = useMemo(() => {
    const query = search.toLowerCase();

    return links.filter((link) => {
      return (
        link.shortUrl?.toLowerCase().includes(query) ||
        link.longUrl?.toLowerCase().includes(query) ||
        link.userName?.toLowerCase().includes(query)
      );
    });
  }, [links, search]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Dashboard
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Manage your GoLinks
        </h1>
        <p className="mt-2 text-slate-600">
          Create, search, copy, open, and delete your browser shortcuts.
        </p>
      </div>

      <LinkForm onCreated={loadLinks} />

      <div className="mt-8">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {loading && <p className="mt-8 text-slate-500">Loading links...</p>}

      {error && (
        <p className="mt-8 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      {!loading && !error && filteredLinks.length === 0 && (
        <div className="mt-8">
          <EmptyState />
        </div>
      )}

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {filteredLinks.map((link) => (
          <LinkCard key={link._id} link={link} onDelete={handleDelete} />
        ))}
      </div>
    </main>
  );
}