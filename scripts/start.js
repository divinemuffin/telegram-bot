const { bot, db } = require('../bot');

function setCommand(name, callback, isArgument = false) {
    /*
    * name - how command can be called
    * callback - function of command
    * isArgument - if true command can be followed by argument
    */
    const regExp = (!isArgument) ? new RegExp(`\/${name}`) : new RegExp(`\/${name} (.+)`);
    bot.onText(regExp, callback);
}

setCommand('start', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Thank you for visiting our hub!', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Hop in!",
                    }
                ]
            ]
        }
    })
})