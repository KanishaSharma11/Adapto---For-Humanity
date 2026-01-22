export default async function handler(req, res) {
  try {
    const { documentText } = req.body;

    const prompt = `You are a helpful assistant that explains complex documents in simple, easy-to-understand language. 

Please read the following document and provide a clear, simplified explanation that anyone can understand, regardless of their education level or language proficiency.

Key guidelines:
- Use simple, everyday words
- Break down complex terms and jargon
- Organize information in short paragraphs
- Use bullet points for lists when helpful
- Explain any technical or legal terms
- Make it conversational and friendly

Document to simplify:

${documentText}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      }
    );

    const data = await response.json();

    const simplified =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

    res.status(200).json({ result: simplified });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
