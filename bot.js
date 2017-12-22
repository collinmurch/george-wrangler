const botSettings = require('./botsettings.json');
const Discord = require('discord.js');
const fs = require('fs');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir('./commands', (err, files) => {
    if(err) console.error(err);

    //If last element is js, then add to jsfiles
    let jsfiles = files.filter(f => f.split('.').pop() === 'js');

    if(jsfiles.length <= 0) {
        console.log('No commands to load!');
        return;
    }
    console.log(`Loading ${jsfiles.length} commands.`);

    //Test each command if loadable, then add to commands
    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i + 1}: ${f} loaded!`)
        bot.commands.set(props.help.name, props)
    });
});
 
bot.on('ready', async () => {
    console.log('Connected as: ' + bot.user.username);

    try {
        let link = await bot.generateInvite(['ADMINISTRATOR']);
        console.log(link);
    } catch (e) {
        console.log(e.stack);
    }
});
 
bot.on('message', async message => {
    //Limit bot activations
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let messageArray = message.content.split(' ');
    let prefix = messageArray[0];
    
    //Grab the specified command and arguments afterwards
    let command = messageArray[1];
    let args = messageArray[2];

    //Exit if prefix isn't called first
    if(prefix !== botSettings.prefix) return;

    //Find and run command file
    let cmd = bot.commands.get(command);
    if(cmd) cmd.run(bot, message, args);
});
 
bot.login(botSettings.token);
