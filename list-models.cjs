const { GoogleGenAI } = require('@google/genai');
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function main() {
    // try to fetch models using some REST call or SDK method?
    // wait, @google/genai has ai.models ? No, it doesn't have a list method exposed easily maybe?
    // let's try to just hit the REST API to list models
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
    const data = await res.json();
    console.log(data.models.map(m => m.name).join('\n'));
}
main().catch(console.log);
