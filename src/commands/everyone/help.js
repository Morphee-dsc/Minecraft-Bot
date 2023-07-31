const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../../config.json');
const emojis = require('../../../emojis.json');

module.exports = {
  name: 'help',
  description: 'Affiche la liste des commandes',
  execute(message, args) {
    const serveur = 'https://discord.gg/zkt4yP457D'
    const embed = new MessageEmbed()
      .setColor('#e67e22')
      .setTitle('Commandes disponibles:')
      .setURL(serveur)
      .setDescription(`Voici la liste des commandes disponibles. Le préfixe est \`${prefix}\`.`)
      .addFields(
        { name: `${emojis.clemolette} Administration - (3)`, value: '\`link\`, \`rules\`, \`verif\`' },
        { name: `${emojis.note} Everyone - (5)`, value: '\`boutique\`, \`help\`, \`invites-lb\`, \`invites\`, \`ip\`, \`ping\`, \`site\`' },
      )
      .setThumbnail('https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setFooter('© Irania - 2023', 'https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
