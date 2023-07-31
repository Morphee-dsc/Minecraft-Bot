const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ip',
  description: 'Affiche l\'ip du serveur',
  execute(message, args) {
    const serveur = 'https://discord.gg/zkt4yP457D'
    const embed = new MessageEmbed()
      .setColor('#e67e22')
      .setTitle('Irania • Adresse IP')
      .setURL(serveur)
      .setDescription('L\'ip du serveur est **play.iraniamc.fr**\nEn espèrant te voir bientôt en jeu !')
      .setThumbnail('https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setFooter('© Irania - 2023', 'https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setTimestamp();
    
    message.reply({ embeds: [embed] });
  },
};
