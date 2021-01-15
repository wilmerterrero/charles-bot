import bot from "./server/index.js";
import helloWorld from "./commands/hello-world/index.js"

bot.on('polling_error', error => {
    console.error(error);
});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, helloWorld());
});