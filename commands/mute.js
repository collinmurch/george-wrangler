module.exports.run = async (bot, message, args) => {
    //Find specified user and current voice channel
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args);
    if (!user) return message.channel.send('You did not specify a user, yuh dig?');

    message.channel.send(`I'm muting ${user} for one minute, yuh dig?`);

    for (let i = 0; i < 6; i++) {
        await user.setMute(true).catch(console.error);     
        await user.setDeaf(true).catch(console.error);
        await sleep(5);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports.help = {
    name: "mute"
}