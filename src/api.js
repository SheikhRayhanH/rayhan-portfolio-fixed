// Contact form transport. Set VITE_API_URL to your Node.js backend to send real requests.
// Expected endpoint: POST {VITE_API_URL}/api/contact  with JSON { name, email, subject, message }
const API_URL = import.meta.env.VITE_API_URL;

export async function sendMessage(data) {
  if (!API_URL) {
    await new Promise((r) => setTimeout(r, 600)); // demo mode: nothing is delivered
    return { ok: true, demo: true };
  }
  const res = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Request failed');
  return res.json();
}
