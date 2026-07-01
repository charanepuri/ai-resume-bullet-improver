import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export default async function handler(req, res) {

    // Allow only POST requests
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method Not Allowed"
        });
    }

    try {

        const {
            resumePoint,
            style,
            level,
            technology
        } = req.body;

        if (!resumePoint) {
            return res.status(400).json({
                error: "Resume point is required."
            });
        }

        const prompt = `
You are an expert ATS Resume Writer.

Rewrite the following resume point professionally.

Requirements:

- Writing Style: ${style}
- Experience Level: ${level}
- Technology: ${technology}
- Use strong action verbs.
- Improve grammar.
- Keep it ATS friendly.
- Keep between 20 and 35 words.
- Return ONLY the rewritten sentence.

Resume Point:
${resumePoint}
`;

        const completion =
            await groq.chat.completions.create({

                model: "llama-3.3-70b-versatile",

                temperature: 0.6,

                messages: [

                    {
                        role: "system",
                        content:
                            "You are a professional resume writer."
                    },

                    {
                        role: "user",
                        content: prompt
                    }

                ]

            });

        return res.status(200).json({

            success: true,

            result:
                completion.choices[0].message.content.trim()

        });

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            error: "Internal Server Error"

        });

    }

}