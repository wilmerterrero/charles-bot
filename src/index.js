import bot from "./server/index.js";
import helloUser from "./commands/hello-world/hello.js";

bot.on('polling_error', error => {
    console.error(error);
});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, helloUser(msg.chat.first_name));
});