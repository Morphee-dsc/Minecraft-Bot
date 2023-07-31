const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  name: 'boutique',
  description: 'Affiche les informations sur la boutique de Irania',
  execute(message, args) {
    const serveur = 'https://discord.gg/zkt4yP457D'
    const embed = new MessageEmbed()
      .setColor('#e67e22')
      .setTitle('Irania • Boutique')
      .setURL(serveur)
      .setDescription('La boutique de **Irania** est https://iraniamc.fr/shop\nAchètes sur la boutique afin de te procurer des **avantages** !')
      .setThumbnail('https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setFooter('© Irania - 2023', 'https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setTimestamp();

    const linkButton = new MessageButton()
      .setLabel('Visiter la boutique')
      .setStyle('LINK')
      .setURL('https://iraniamc.fr/shop')
      .setEmoji('💸');

    const actionRow = new MessageActionRow().addComponents(linkButton);
    
    message.reply({ embeds: [embed], components: [actionRow] });
  },
};
