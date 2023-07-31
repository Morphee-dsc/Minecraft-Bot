const { MessageEmbed, Permissions } = require('discord.js');
const emojis = require('../../../emojis.json');

module.exports = {
    name: 'link',
    description: 'Affiche les informations de Irania',
    execute(message, args) {
      if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        const erreurEmbed = new MessageEmbed()
          .setColor('#FF0000')
          .setDescription("Vous n'avez pas accès à cette commande.");
        return message.reply({ embeds: [erreurEmbed], ephemeral: true });
      }

      message.channel.send(`${emojis.irania} **IRANIA - PVP FACTIONS 1.8 - 1.15**\n\n${emojis.adresse} Adresse : \`PLAY.IRANIAMC.FR\`\n\n${emojis.site} Site : https://iraniamc.fr/\n${emojis.twitter} Twitter : https://twitter.com/iranianetwork\n${emojis.discord} Discord : https://discord.com/invite/iranianetwork`);
    },
  };
  