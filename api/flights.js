export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { from, to, date, passengers } = req.body;
        
        const prompt = `You are a flight search API. The user wants flights from ${from} to ${to} on ${date} for ${passengers} passengers. 
Generate a realistic JSON array of 3 flights.
Required properties for each flight object:
- "id": a unique integer (1, 2, 3)
- "airline": realistic airline name (e.g., Air India, Indigo)
- "from": departure time (e.g., "08:00 AM")
- "to": arrival time (e.g., "10:30 AM")
- "duration": flight duration (e.g., "2h 30m")
- "price": price starting with $ (e.g., "$120")
Return ONLY the JSON array, no markdown formatting.`;

        const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "AIzaSyDnos-Ij-ndWg1LO5X8id7ql4Uh1BAaPlI";
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        let aiText = data.candidates[0].content.parts[0].text;
        
        // Clean up markdown block if present
        aiText = aiText.replace(/```json/g, '').replace(/```/g, '').trim();
        
        const flights = JSON.parse(aiText);
        res.status(200).json({ success: true, data: flights });
    } catch (error) {
        console.error("Gemini Error:", error);
        res.status(500).json({ error: "Failed to fetch flights" });
    }
}
