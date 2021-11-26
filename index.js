const { Telegraf } = require("telegraf");
const data = require("./data");

const bot = new Telegraf(data.token);

bot.hears(/.+/, async (ctx) => {
    ctx.reply(ctx.match[0]);
});

bot.launch();