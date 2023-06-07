const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`[**Kurucu = Neko_Senpai#0031**]`)
  .addField(`**Yeni-Komutlar**`,` \`-banner\` = Yazdığınızı Bannere Çevirir. \n \`-banner\` = Yazdığınızı Bannere Çevirir. \n \`-duello\` = Etiketlediğiniz Kişiyle Duello Yaparsınız. \n \`-gerigelsin\` = Yanlız Olanlar Kullansın ;). \n \`-mcbody\` = Yazdığınız Adın Mc Karakterini Gösterir. \n  \`-zar-at\` = Zar Atar. \n \`-güzelsözler\` = Güzel Bir Söz Atar. \n \`-yaz-kazan\` = Yazıp Kazanma Yarışı Yaparsınız.\n  \`-resimliyazı\` = Resimli Yazı Atar.
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
  name: 'eğlence',
  description: 'Gelişmiş Eğlence Menüsü',
  usage: 'yardım'
}
//Lord Creative