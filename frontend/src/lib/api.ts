import { CreateLinkInput, LinkItem } from "./../types/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is missing");
}

export async function getLinks(): Promise<LinkItem[]> {
  const res = await fetch(`${API_URL}/api/links`, {
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch links");
  }

  return data.data;
}

export async function createLink(input: CreateLinkInput): Promise<LinkItem> {
  const res = await fetch(`${API_URL}/api/links`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to create link");
  }

  return data.data;
}

export async function deleteLink(id: string): Promise<void> {
  const res = await fetch(`${API_URL}/api/links/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to delete link");
  }
}