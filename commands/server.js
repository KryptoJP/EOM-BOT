const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});


module.exports = {
	name: 'server',
  descripion: 'Server Info',
	execute(message, args) {
	  
	 const exampleEmbed = new Discord.MessageEmbed()
   .setColor('GOLD')
   .setAuthor(`Server INfo`)
   .setDescription(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nServer Created: ${message.guild.createdAt} `)
   .setFooter('Embed created by Krychu!')

   message.channel.send(exampleEmbed);


		//message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};
