const { GoogleGenAI } = require("@google/genai");
const sr = require("./prompts/sr.json");

class HateSpeechAI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.gemini = new GoogleGenAI({ apiKey })
    }
    async checkHateSpeech(text) {
        const response = await this.gemini.models.generateContent({
            model: "gemini-2.0-flash",
            contents: sr.prompt + text,
        });
        return response.text;
    }
}

module.exports = HateSpeechAI;