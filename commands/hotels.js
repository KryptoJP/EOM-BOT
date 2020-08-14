const Discord = require('discord.js');
var hotels = ["Lucky", "Cloud", "Cosmo", "Blossom", "", "Ice Silver"];

module.exports = {
	name: 'hotels',
	description: 'hotels!',
	execute(message, args) {
	  var hotel = Math.floor(Math.random() * hotels.length);
	  message.channel.send(hotels[hotel]);
		
	},
};
