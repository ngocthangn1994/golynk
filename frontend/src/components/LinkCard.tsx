"use client";

import { Copy, ExternalLink, Trash2 } from "lucide-react";
import { LinkItem } from "./../types/link";
import Button from "./Button";

type LinkCardProps = {
  link: LinkItem;
  onDelete: (id: string) => void;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function LinkCard({ link, onDelete }: LinkCardProps) {
  const shortLink = `${API_URL}/go/${link.shortUrl}`;

  async function copyShortLink() {
    await navigator.clipboard.writeText(shortLink);
    alert("Copied short link!");
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">Short link</p>
          <h3 className="mt-1 text-xl font-bold text-slate-900">
            /go/{link.shortUrl}
          </h3>
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {link.clicks ?? 0} clicks
        </span>
      </div>

      <p className="mt-4 break-all text-sm text-slate-600">{link.longUrl}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <Button variant="secondary" onClick={copyShortLink}>
          <Copy size={16} className="mr-1 inline" />
          Copy
        </Button>

        <a
          href={shortLink}
          target="_blank"
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          <ExternalLink size={16} className="mr-1 inline" />
          Open
        </a>

        <Button variant="danger" onClick={() => onDelete(link._id)}>
          <Trash2 size={16} className="mr-1 inline" />
          Delete
        </Button>
      </div>
    </div>
  );
}