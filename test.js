const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
  console.log("Bot is ready!");

  client.on("message", (message) => {
    if (message.content === "!allban") {
      // client.guilds.first().ban(user);
      // !allbanというメッセージを削除する
      message.delete();
    }
  });
});

client.login("MTEzMjIxMDkxNDI5NzM4OTA1OA.GZ-0Aa.Za2ZUQ-Z48kMSsVHWN3ay-VgQARRFkqwGl8JgI");
