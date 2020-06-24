const Discord = require('discord.js');

exports.run = function(client, message) {

const embed = new Discord.RichEmbed() // Embed Tag
.setColor('RANDOM') // Embed Color With Hex (#fff) or Name (RANDOM, BLUE, BLACK)
.setTitle(`${client.user.username} Bot Help Menu`) // Set Title on top
.addField(`Commmand Name:`, `Command Usage`) // Add Field
.addBlankField() // Add Blank
.setTimestamp() // Show Time in Footer
.setFooter(`© 2020-2021 ${client.user.username}`, client.user.avatarURL) // Show Bots Avatar & Copyright 
.setThumbnail(client.user.avatarURL) // Add Tumbnail on top
message.channel.send(embed) // Message
};


exports.conf = {
  enabled: true, // if false command are not usable, if true command are usable
  guildOnly: false, // if false usable everywhere, if true only usable servers (not usable on dm)
  aliases: ['h'], 
  permLevel: 0 // Main Folder (github.js) 100-108 Line
};

exports.help = {
  name: 'help', // Command 
  description: 'Shows All Commands', // Command Description
  usage: 'help' // Commands Usage
};