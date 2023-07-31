const { MessageEmbed, Permissions } = require('discord.js');
const emojis = require('../../../emojis.json');

module.exports = {
  name: 'rules',
  description: 'Affiche le règlement de Irania',
  execute(message, args) {
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        const erreurEmbed = new MessageEmbed()
          .setColor('#FF0000')
          .setDescription("Vous n'avez pas accès à cette commande.");
        return message.reply({ embeds: [erreurEmbed], ephemeral: true });
      }

    const serveur = 'https://discord.gg/zkt4yP457D'
    const embed = new MessageEmbed()
      .setColor('#e67e22')
      .setTitle('Règlement de Irania')
      .setURL(serveur)
      .setDescription(`${emojis.arrow} • Bienvenue sur le Discord, merci de respecter les règles suivantes :\n${emojis.parametre} • Retrouvez ici le règlement officiel de IRANIA !\n\n${emojis.note} **__Les différentes règles à respecter sur notre Discord :__**\n\n**• Les insultes, provocations, le racisme, l'homophobie, le harcèlement, les discours haineux, la divulgation** d'informations personnelles sont **interdites**, merci de respecter les autres joueurs.\n\n**• La publicité** est totalement **interdite**, les seules exceptions autorisées sont les Discord de factions jouant sur IRANIA et les vidéos tournées sur le serveur.\n\n**• Le spam, le flood et l'abus** de mentions staff/joueurs sont interdits, merci d'être patients en cas de problème et de faire un ticket.\n\n${emojis.note} **__Règlement du serveur en jeu :__**\n${emojis.alert} ➜ https://iraniamc.fr/reglement\n\nToute personne se connectant au moins une fois sur le serveur Minecraft PLAY.IRANIAMC.FR est considérée comme ayant lu et accepté le règlement.\n${emojis.arrow} Ce règlement peut être modifié au fur et à mesure du temps, nous vous demanderons alors de vous en tenir informé régulièrement.\nEn cas de question ou de problème merci de faire un ticket <#1094245966950977566>.`)
      .setThumbnail('https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setFooter('© Irania - 2023', 'https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setTimestamp();
    
    message.channel.send({ embeds: [embed] });
  },
};
