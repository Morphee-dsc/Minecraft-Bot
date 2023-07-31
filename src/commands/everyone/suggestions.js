const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'suggestions',
  description: 'Permet aux utilisateurs de faire des suggestions',
  async execute(message, args) {
    const suggestion = args.join(' ');
    if (!suggestion) {
      return message.reply('Vous devez fournir une suggestion!');
    }

    const suggestionsChannel = message.guild.channels.cache.get('1134189509047758989'); // Mettre l'ID du salon suggestion, la commande sera faisable uniquement dans le salon de suggestions
    if (!suggestionsChannel) {
      return message.reply('Le salon de suggestion est introuvable!');
    }

    const serveur = 'https://discord.gg/zkt4yP457D'

    const embed = new MessageEmbed()
      .setColor('#e67e22')
      .setTitle('Vous pouvez juger cette suggestion !')
      .setURL(serveur)
      .addField('Suggestion de :', '\`' + message.author.tag + '\`')
      .addField('Suggestion :', '\`' + suggestion + '\`')
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setFooter('© Irania - 2023', 'https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setTimestamp();

    const suggestionMessage = await suggestionsChannel.send({ embeds: [embed] });

    await suggestionMessage.react('✅');
    await suggestionMessage.react('❌');

    message.delete();
  },
};
