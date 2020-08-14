const Discord= require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;
    const embed = new Discord.MessageEmbed()
      .setColor('GOLD')
	    .setTitle('🛠 Commands!')
	    .setDescription("**Here a list of all my commands:**")
	    .addFields(
	      { name: `\`${prefix}help\``, value: 'Shows a list of all the commands', inline: true },
	      { name: `\`${prefix}ping\``, value: 'Shows the response time for the bot in thta instance', inline: true },
	      {name: `\`${prefix}reload\``, value: 'Reloads a command after it is updated', inline: true },
	      {name: `\`${prefix}purge\``, value: 'Deletes the amounts of message at a time the the user requests.', inline: true }
	      )
	    .setFooter('Embed created by Kry!');

        message.channel.send(embed);
   },
};
