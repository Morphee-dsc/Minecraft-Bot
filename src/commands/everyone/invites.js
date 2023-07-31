const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invites",
  description: "Affiche le nombre d'invitations d'un utilisateur.",
  async execute(message, args) {
    let targetUser = message.author;
    if (message.mentions.users.first()) {
      targetUser = message.mentions.users.first();
    }

    const guildInvites = await message.guild.invites.fetch();
    const userInvites = guildInvites.filter((i) => i.inviter.id === targetUser.id);

    let regularCount = 0;
    let fakeCount = 0;
    let leftCount = 0;

    userInvites.forEach((invite) => {
      if (invite.uses === 0) leftCount += 1;
      else if (invite.fake) fakeCount += 1;
      else regularCount += 1;
    });

    const embed = new MessageEmbed()
      .setColor('#e67e22')
      .setDescription(`Vous avez actuellement **${regularCount + leftCount + fakeCount} invites.**`)
      .setFooter('© Irania - 2023', 'https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
