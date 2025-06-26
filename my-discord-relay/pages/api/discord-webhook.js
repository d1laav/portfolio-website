export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message } = req.body;

  const discordPayload = {
    content: `**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
  };

  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!discordWebhookUrl) {
    return res.status(500).json({ error: "Webhook URL not set" });
  }

  const discordRes = await fetch(discordWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(discordPayload),
  });

  const discordText = await discordRes.text();
  console.log("Discord response:", discordRes.status, discordText); // Tambahkan ini untuk debug

  if (!discordRes.ok) {
    return res.status(500).json({ error: "Failed to send to Discord", detail: discordText });
  }

  res.status(200).json({ ok: true });
}