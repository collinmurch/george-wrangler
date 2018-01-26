module.exports.run = async (bot, message, args) => {
    //Repeat args times, if not a number, then once
    let repeat = isNaN(args) ? 1 : Number(args);
    if (repeat > 4) {
        repeat = 4;
        message.channel.send("Limiting to 4 messages, yuh dig?")
    }
    else if (repeat < 1) message.channel.send("I can't send a negative amount of messages, ya dig?")

    //Send the message
    for (var i = 0; i < repeat; i++){
        message.channel.send("yuh dig?", {tts: true});
    }
}

module.exports.help = {
    name: "dig"
}