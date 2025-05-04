# Google Build With AI Hate Detection and Response Generation

This project is our solution to Google's AI Hackathon. It provides an interface to detect hate speech in text and generate positive and educational responses.

## Usage

Import the ```HateSpeechAI``` class. Create an instance and pass it an ```API_KEY``` and optionally a model to use.

```
ai = new HateSpeechAI("YOUR_API_KEY")
```

Then call the ```checkHateSpeech``` method on the instance.

```
ai.checkHateSpeech(inputText).then((response) => {
    if (!response) {
        console.log("No hate speech detected.");
    } else {
        console.log("Hate speech detected: " + response);
    }
}).catch((error) => {
    console.error(error);
});
```

The method returns ```null``` if no hate speech is detected or a string that represents a response to the hate speech.

## Licence

This package is under MIT licence.