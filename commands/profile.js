const Discord = require('discord.js');

module.exports = {
	name: 'profile',
	description: 'User Info!',
	execute(message, args) {
	  
	 const exampleEmbed = new Discord.MessageEmbed()
	 .setColor('AQUA')
	 .setAuthor('User Profile')
	 .setThumbnail(`${message.author.displayAvatarURL()}`)
	 .setDescription(`${"<@" + message.member.user.id + ">"}'s User Profile!`)
	 .addFields (
	   { name: '**Username.**', value: `${message.member.displayName}`},
	   { name: '**User ID.**', value: `${message.member.id}`},
     {name: '**Current Status.**', value: `${message.author.presence.status}`},
   )
	 .setFooter('Embed created by EOM BOT!')

	  
	//message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`)
	message.channel.send(exampleEmbed);
	},
};
