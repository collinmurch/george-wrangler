module.exports.run = async (bot, message, args) => {
    //Find specified user and current voice channel
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args);
    if (!user) return message.channel.send('You did not specify a user, yuh dig?');
    let vc = user.voiceChannel;
    
    if (vc) {
        let prison = await message.guild.createChannel('Shadow Realm', 'voice')
            .catch(console.error);
        
        if (prison) {
            message.channel.send(`I'm removing ${user}, yuh dig?`);

            for (let i = 0; i < 5; i++) {
                await user.setVoiceChannel(vc.id);
                await user.setVoiceChannel(prison.id);
            }
        } else {
            message.channel.send("I couldn't create the voice channel, ya dig?")
        }

        //Delete voice channel at the end
        return prison.delete();
    } else {
        return message.channel.send("They've got to be in a channel, yuh dig?")
    }
}

module.exports.help = {
    name: "remove"
}