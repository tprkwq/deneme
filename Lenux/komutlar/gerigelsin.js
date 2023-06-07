const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
    let sonuç = ["``%10``\nZor ama, imkansız değil. 😓","``%20``\nGelmez be kardeşim uğraşma.. 😓","``%40``\nGeledebilir, gelmeyedebilir. 😓","``%60``\nGelicek sanırım ya. 😓","``%80``\nGelmesi lazım artık. ","``%100``\nGelmiş bile, bir dm kutusuna bak derim. 😓"];
    let result = Math.floor((Math.random() * sonuç.length));
    let gerigelsin = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField("Gelir mi acaba?", sonuç[result]);
  
    message.channel.send(gerigelsin);
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'gerigelsin',
    description: 'gerigelsin',
    usage: 'gerigelsin'
  };