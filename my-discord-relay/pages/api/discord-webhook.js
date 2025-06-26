export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Ambil URL webhook dari environment variable
  const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

  if (!DISCORD_WEBHOOK_URL) {
    return res.status(500).json({ error: "Webhook URL not set" });
  }

  const discordPayload = {
    content: `**New Contact Message**\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
  };

  try {
    const discordRes = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });

    if (!discordRes.ok) {
      return res.status(500).json({ error: "Failed to send to Discord" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}