const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  name: 'site',
  description: 'Affiche le site de Irania',
  execute(message, args) {
    const serveur = 'https://discord.gg/zkt4yP457D'
    const embed = new MessageEmbed()
      .setColor('#e67e22')
      .setTitle('Irania • Site')
      .setURL(serveur)
      .setDescription('Le site de **Irania** est https://iraniamc.fr/\nN\'hésites pas à aller y faire un tour !')
      .setThumbnail('https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setFooter('© Irania - 2023', 'https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setTimestamp();

    const linkButton = new MessageButton()
      .setLabel('Visiter le site')
      .setStyle('LINK')
      .setURL('https://iraniamc.fr')
      .setEmoji('🌐');

    const actionRow = new MessageActionRow().addComponents(linkButton);
    
    message.reply({ embeds: [embed], components: [actionRow] });
  },
};
