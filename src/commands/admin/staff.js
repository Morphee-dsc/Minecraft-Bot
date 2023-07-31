const { MessageEmbed, Permissions } = require('discord.js');
const { prefix } = require('../../../config.json');
const emojis = require('../../../emojis.json');

module.exports = {
  name: 'staff',
  description: 'Affiche la liste des staffs',
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
      .setTitle('Liste des staffs')
      .setURL(serveur)
      .setDescription('Voici la liste de tous les membres de notre équipe :')
      .addFields(
        { name: `Fondateur`, value: '・ <@117381264826302464>\n・ <@117381264826302464>' },
        { name: `Administrateur`, value: '・ <@117381264826302464>\n・ <@117381264826302464>' },
        { name: `Responsable`, value: '・ <@117381264826302464>\n・ <@117381264826302464>' },
        { name: `Modérateur+`, value: '・ <@117381264826302464>\n・ <@117381264826302464>' },
        { name: `Modérateur`, value: '・ <@117381264826302464>\n・ <@117381264826302464>' },
        { name: `Modo-Joueur`, value: '・ <@117381264826302464>\n・ <@117381264826302464>' },
        { name: `Guide`, value: '・ <@117381264826302464>\n・ <@117381264826302464>' },
        { name: `Informations :`, value: 'Envie de **nous rejoindre ?** Suivez les démarches du <#117381264826302464>' }, // <#117381264826302464>, vous devez mettre l'id du channel
      )
      .setThumbnail('https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setFooter('© Irania - 2023', 'https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  },
};

// À vous de modifier à votre guise