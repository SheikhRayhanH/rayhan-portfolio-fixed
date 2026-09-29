// Contact form transport, powered by Web3Forms (free, no backend needed).
const ACCESS_KEY = 'bc4457e5-d7b8-46c5-88f1-33d6a4b6d14b'; // paste your Web3Forms access key here

export async function sendMessage(data) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    }),
  });
  const result = await res.json();
  if (!result.success) throw new Error(result.message || 'Request failed');
  return result;
}