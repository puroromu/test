const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
  console.log("Bot is ready!");

  client.on("message", (message) => {
    if (message.content === "!allban") {

      // !allbanというメッセージを削除する
      message.delete();
    }
  });
});

client.login("YOUR_DISCORD_BOT_TOKEN");
