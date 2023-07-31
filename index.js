const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const { prefix, token } = require('./config.json');

const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  ]
});

// Message de join
client.on('guildMemberAdd', async member => {
  const channel = member.guild.channels.cache.get('1112068013420724247'); // Mettre l'ID ou le message sera envoyer
  const invites = await member.guild.invites.fetch();
  const invite = invites.find(i => i.inviter && i.uses > (i.inviter.uses || 0));
  const serveur = 'https://discord.gg/zkt4yP457D'

  const join = new MessageEmbed()
    .setColor('#e67e22')
    .setTitle(`Bienvenue sur Irania 🎉`)
    .setURL(serveur)
    .setDescription(`**${member.user.tag}** vient de rejoindre l'aventure !\n${invite ? `Il a été invité par **${invite.inviter.tag}**` : 'Nous ne savons pas qui l\'a invité.'} \n\nLe discord compte désormais **${member.guild.memberCount}** aventuriers !`)
    .setThumbnail('https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
    .setFooter('© Irania - 2023', 'https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
    .setTimestamp();

  channel.send({ embeds: [join] });
});

//Message de leave
client.on('guildMemberRemove', async member => {
  const channel = member.guild.channels.cache.get('1112074858617122917'); // Mettre l'ID ou le message sera envoyer
  const serveur = 'https://discord.gg/zkt4yP457D'

  const leave = new MessageEmbed()
  .setColor('#e67e22')
    .setTitle(`À quitter Irania ☹️`)
    .setURL(serveur)
    .setDescription(`**${member.user.username}** vient de quitter le serveur.\n\nLe discord compte désormais **${member.guild.memberCount}** aventuriers !`)
    .setThumbnail('https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
    .setFooter('© Irania - 2023', 'https://cdn.discordapp.com/attachments/1094041372262138027/1094224117567332402/server-icon.png')
    .setTimestamp();

  channel.send({ embeds: [leave] });
});

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./src/commands');

for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./src/commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./src/events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  try {
    command.execute(message, args, client);
  } catch (error) {
    console.error(error);
    message.reply('Une erreur est survenue lors de l\'exécution de la commande.');
  }
});

client.login(token);
