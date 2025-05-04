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
        if (!response) {
            console.log("No hate speech detected.");
        } else {
            console.log("Hate speech detected: " + response);
        }
        rl.close();
    }).catch((error) => {
        console.error(error);
        rl.close();
    });
});
