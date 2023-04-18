const { Telegraf } = require("telegraf");
const TOKEN = "6192289712:AAF8LravpHsVoSWXOdHWAfIOnY4ECABMuNs";
const bot = new Telegraf(TOKEN);

const web_link = "https://caresoul.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();