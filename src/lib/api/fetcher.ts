export async function fetcher<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}
