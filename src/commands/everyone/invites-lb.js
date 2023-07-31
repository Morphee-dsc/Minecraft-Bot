const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invites-lb",
  description: "Affiche le classement des utilisateurs ayant le plus d'invitations.",
  async execute(message) {
    const guildInvites = await message.guild.invites.fetch();
    const invites = guildInvites.sort((a, b) => b.uses - a.uses).first(10);

    const emojis = ["<a:t_1:1099819271984529448>", "<a:t_2:1099819269820264458>", "<a:t_3:1099819266775199824>"];
    const serveur = 'https://discord.gg/zkt4yP457D';
    
    const embed = new MessageEmbed()
      .setColor('#e67e22')
      .setTitle("Classement des invitations")
      .setURL(serveur)
      .setDescription(
        invites
          .map((invite, index) => `${emojis[index]} - **${invite.inviter.tag.replace(/:/g, ": ")}** : ${invite.uses} invitations !`)
          .join("\n")
      )
      .setThumbnail('https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setFooter('© Irania - 2023', 'https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
