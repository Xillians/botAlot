var Discord = require('discord.js');
var dotenv = require('dotenv');
var client = new Discord.Client();
var http = require("http");

http.createServer().listen(process.env.PORT || 5000);
dotenv.config();

client.on('ready', () => {
    console.log("Connected!");    
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
    if (message.content.toUpperCase().includes('ALOT')) {
        message.channel.send({files: ["https://i.imgur.com/45L4Ira.png"]});    
    }
})

client.login(process.env.BOT_TOKEN);