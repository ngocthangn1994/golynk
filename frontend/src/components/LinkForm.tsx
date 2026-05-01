"use client";

import { useState } from "react";
import Button from "./Button";
import { createLink } from "./../lib/api";

type LinkFormProps = {
  onCreated: () => void;
};

export default function LinkForm({ onCreated }: LinkFormProps) {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await createLink({
        userName,
        passWord,
        shortUrl,
        longUrl,
      });

      setUserName("");
      setPassWord("");
      setShortUrl("");
      setLongUrl("");

      onCreated();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-lg font-bold text-slate-900">Create new GoLink</h2>

      {error && (
        <p className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          className="rounded-xl border px-4 py-3 text-sm outline-none focus:border-blue-500"
        />

        <input
          value={passWord}
          onChange={(e) => setPassWord(e.target.value)}
          placeholder="Password"
          className="rounded-xl border px-4 py-3 text-sm outline-none focus:border-blue-500"
        />

        <input
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value.toLowerCase())}
          placeholder="Short URL, example: sam"
          className="rounded-xl border px-4 py-3 text-sm outline-none focus:border-blue-500"
        />

        <input
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Long URL, example: https://chatgpt.com"
          className="rounded-xl border px-4 py-3 text-sm outline-none focus:border-blue-500"
        />
      </div>

      <Button disabled={loading} className="mt-5">
        {loading ? "Creating..." : "Create GoLink"}
      </Button>
    </form>
  );
}