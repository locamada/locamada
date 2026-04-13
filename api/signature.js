export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyyiKMJNVkcujhk5HEjJnahkQl9TWUdJQNeLf1653M2Hh6A-alX17qlIpKOHmZS9BDV/exec",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      }
    );
    const data = await response.json();
    return res.status(200).json(data);
  } catch(err) {
    return res.status(500).json({ erreur: err.toString() });
  }
}
