import prompt from "prompt";
import mainPrompt from "./prompts/promp-main.js";
import chalk from "chalk";

async function main() {
    prompt.get(mainPrompt, async (err, choice) => {
        if (choice.select == 1) console.log(chalk.green("Escolheu o QR Code"));
        if (choice.select == 2) console.log(chalk.green("Escolheu o PASSWORD"));
    });

    prompt.start();
}

await main();