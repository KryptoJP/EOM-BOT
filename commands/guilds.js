const Discord = require('discord.js');
var guilds = ["Fairy Tail", "Sabertooth", "Blue Pegasus", "Lamia Scale", "Mermaid Heel", "Phantom Lords", "Raven Tail"];

module.exports = {
	name: 'guilds',
	description: 'Beep!',
	execute(message, args) {
	  var guild = Math.floor(Math.random() * guilds.length);
	  message.channel.send(guilds[guild]);
		
	},
};
