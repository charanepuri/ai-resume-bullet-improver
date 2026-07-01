// ========================================
// API.JS
// Handles communication with the
// Vercel Serverless Function
// ========================================

/**
 * Improve Resume Bullet
 */

async function improveResume(data) {

    try {

        const response = await fetch(

            "/api/improve",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    resumePoint: data.resumePoint,

                    style: data.style,

                    level: data.level,

                    technology: data.technology

                })

            }

        );

        const result = await response.json();

        if (!response.ok) {

            throw new Error(

                result.error ||

                "Something went wrong."

            );

        }

        return result.result;

    }

    catch (error) {

        console.error(

            "API Error:",

            error

        );

        throw error;

    }

}