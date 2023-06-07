const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`[**Kurucu = Neko_Senpai#0031**]`)
  .addField(`**Müzik Komutları**`,` \`-oynat\` = **Seçtiğiniz Müziği Oynatır.** \n \`-atla\` = **Sonraki Müziğe Geçer** \n \`-döngü\` = **Müzikleri Tekrarlar.** \n  \`-durdur\` = **Müziği Durdurur.** \n \`-devam\` = **Duran Müziği Devam Ettirir.** \n \`-sıra\` = **O Anki Sırayı Gösterir.** \n \`-np\` = **Oynatılan Şarkıyı Söyler.**
`)
  return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
}
//Lord Creative