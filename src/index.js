const { GoogleGenAI } = require("@google/genai");
const sr = require("./prompts/sr.json");

class HateSpeechAI {
    constructor(apiKey, model = "gemini-2.0-flash") {
        this.apiKey = apiKey;
        this.model = model;
        this.gemini = new GoogleGenAI({ apiKey })
    }
    async checkHateSpeech(text) {
        const response = await this.gemini.models.generateContent({
            model: this.model,
            contents: sr.prompt + text,
        });
        const result = response.text.trim()
        if (result === "null" || result === "\"null\"") {
            return null;
        } else {
            return result;
        }
    }
}

module.exports = HateSpeechAI;