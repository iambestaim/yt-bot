const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "?";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Imi Bot Online");
  client.user.setActivity("!play / AnimeVilág - MUSIC");
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "clear") {
    client.commands.get("clear").execute(message, args);
  } else if (command === "play") {
    client.commands.get("play").execute(message, args);
  } else if (command === "leave") {
    client.commands.get("leave").execute(message, args);
  }

});

client.login('NzkxMzE1NjQxODQzMDU2NzIx.X-NYHg.nld899iq2Xm4mENUX2JZgjXTeq0')