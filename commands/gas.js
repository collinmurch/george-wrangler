const path = require('path');
const botSettings = require(path.join(__dirname, '../botsettings.json'));

module.exports.run = async (bot, message, args) => {
    //Pick random picture and display it
    let num = Math.floor(Math.random() * 6);

    switch (num) {
        case 0:
            message.channel.send("Yuh dig?", {
                file: botSettings.pic1 
            });
            return;
        case 1:
            message.channel.send("Yuh dig?", {
                file: botSettings.pic2
            });
            return;
        case 2:
            message.channel.send("Yuh dig?", {
                file: botSettings.pic3
            });
            return;
        case 3:
            message.channel.send("Yuh dig?", {
                file: botSettings.pic4
            });
            return;
        case 4:
            message.channel.send("Yuh dig?", {
                file: botSettings.pic5
            });
            return;
        case 5:
            message.channel.send("Yuh dig?", {
                file: botSettings.pic6
            });
            return;
    }
}

module.exports.help = {
    name: "gas"
}