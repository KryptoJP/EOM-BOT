const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	execute(message) {

  const exampleEmbed = new Discord.MessageEmbed()
	.setColor('GOLD')
	.setTitle('🏓 Pong!')
	.setDescription("Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`")
	.setFooter('Embed created by Kry!')

message.channel.send(exampleEmbed);
	},
};
