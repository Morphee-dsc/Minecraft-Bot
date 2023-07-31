const Discord = require('discord.js');
const emojis = require('../../../emojis.json');


module.exports = {
  name: 'ping',
  description: 'Affiche la latence du bot et de l\'API Discord',
  execute(message, args, client) {
    const pingEmbed = new Discord.MessageEmbed()
      .setColor('#e67e22')
      .setTitle('Choisissez ce que vous voulez afficher :')
      .addField(`${emojis.un} - Latence du bot`, ' ', true)
      .addField(`${emojis.deux} - Latence de l\'API`, ' ', true)
      .setFooter('© Irania - 2023', 'https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setTimestamp();

    const row = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
          .setCustomId('botPing')
          .setLabel('Latence du Bot')
          .setStyle('SUCCESS'),
        new Discord.MessageButton()
          .setCustomId('apiPing')
          .setLabel('Latence de l\'API')
          .setStyle('SUCCESS'),
      );

    message.reply({ embeds: [pingEmbed], components: [row] })
      .then((msg) => {
        const collector = msg.createMessageComponentCollector({ time: 10000 });

        collector.on('collect', (interaction) => {
          if (interaction.customId === 'botPing') {
            const botPingEmbed = new Discord.MessageEmbed()
              .setColor('#e67e22')
              .setTitle('Vous choisissez la latence du bot')
              .setDescription(`La latence du bot est de ${msg.createdTimestamp - message.createdTimestamp}ms ${emojis.check}`)
              .setFooter('© Irania - 2023', 'https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
              .setTimestamp();

            const backButton = new Discord.MessageButton()
              .setCustomId('backButton')
              .setLabel('Retour ↩️')
              .setStyle('DANGER');

            const botPingRow = new Discord.MessageActionRow()
              .addComponents(backButton);

            interaction.update({ embeds: [botPingEmbed], components: [botPingRow] });
          }

          if (interaction.customId === 'apiPing') {
            const apiPingEmbed = new Discord.MessageEmbed()
              .setColor('#e67e22')
              .setTitle('Vous choisissez la latence de l\'API')
              .setDescription(`La latence de l'API est de ${Math.round(client.ws.ping)}ms ${emojis.check}`)
              .setFooter('© Irania - 2023', 'https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
              .setTimestamp();

            const backButton = new Discord.MessageButton()
              .setCustomId('backButton')
              .setLabel('Retour ↩️')
              .setStyle('DANGER');

            const apiPingRow = new Discord.MessageActionRow()
              .addComponents(backButton);

            interaction.update({ embeds: [apiPingEmbed], components: [apiPingRow] });
          }

          if (interaction.customId === 'backButton') {
            interaction.update({ embeds: [pingEmbed], components: [row] });
          }
        });
      });
  }
};
