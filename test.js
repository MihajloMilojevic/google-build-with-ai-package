const HateSpeechAI = require("./src/index.js");
const readline = require("readline");

ai = new HateSpeechAI("AIzaSyBo7DtIXPxsop0JeGwn6Fu_X760-ZodO6M");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter text to check for hate speech: ", (inputText) => {
    if (!inputText || inputText.trim() === "" || inputText === "q") {
        console.log("No input provided. Exiting.");
        rl.close();
        return;
    }
    ai.checkHateSpeech(inputText).then((response) => {
        console.log(response);
        try {
            const jsonResponse = JSON.parse(response);
            console.log("Parsed JSON response:", jsonResponse);
        } catch (error) {
            console.error("Error parsing JSON response:", error.message);
        }
        rl.close();
    }).catch((error) => {
        console.error(error);
        rl.close();
    });
});
