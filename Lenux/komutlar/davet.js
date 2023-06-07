const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} Davet Menüsü `)
        .setDescription(`**Botun Davet Linki İçin** [TIKLA](https://discord.com/api/oauth2/authorize?client_id=761227841936293908&permissions=8&scope=bot) \n:white_small_square:**Destek Sunucusu İçin** [TIKLA](https://discord.gg/WfcpzMaPP7)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};
//Lord Creative