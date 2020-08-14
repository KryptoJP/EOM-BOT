const Discord = require('discord.js');

module.exports = {
	name: 'say',
	description: 'Parrot',
	execute(message, args) {
    message.delete();
    if (!args.length) return message.channel.send(`It seems you haven't given me anyting to say ${message.author}! Try typing something after the say command.`);
    const response = args.join(' ');
		message.channel.send(response);
    
	},
};
