const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

/*------------------------------------------*/

module.exports = client => {    
  
  client.user.setStatus("online"); // Args: idle , dnd , online
  client.user.setActivity('Thunz Graphics <3');
  
  /*------------------------------------------*/

  console.log(`[${moment().format('ss:mm:HH DD-MM-YYYY')}] ${client.user.username} : Server is Active!`);
  console.log(`[${moment().format('ss:mm:HH DD-MM-YYYY')}] ${client.user.username} : Bot is Joined With ${client.user.username} Name!`);
  console.log(`[${moment().format('ss:mm:HH DD-MM-YYYY')}] ${client.user.username} : ` + client.channels.size + ` Channel, ` + client.guilds.size + ` Server ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Member!`);
};

// Lore Software Systems.
