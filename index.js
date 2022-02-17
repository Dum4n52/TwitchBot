const tmi = require("tmi.js");
const { join } = require("tmi.js/lib/commands");

const options = {
    options: {
        debug: true
    },
    connection:{
        cluster: "aws",
        reconnect: true,
    },
    identity:{
        username: "Dum4n80T",
        password: "oauth:8y5z2kwlott0q2whnk37ca0d147g53"
    },
    channels: ["duman52y"]
}

const client = new tmi.client(options);

client.connect();

client.on("connected", (adress, port) => {
    console.log("Verbindungsaufbau Succesfull!")

    client.action("duman52y","Im Online!")
})


  // message event!
client.on('chat', (channel, user, message, self) => {
    if(message === 'help' || message === "!Help" || message === "!help" || message === "!Hilfe"){
        client.action("duman52y", "Hi")}

        if(message === 'Hi' || message === "merhaba" || message === "Merhaba" || message === "slm"){
            client.action("duman52y", `Hi @${user.username}`)}
})

client.on("subscription", (channel, username, method, message, userstate) => {
    console.log("subscription", {channel, username, method, message, userstate})
    client.say("duman52y", `Thx for subscribing @${user.username}`)
})

client.on("resub", (channel, username, _months, message, userstate, methods) => {
    console.log("resub", {channel, username, _months, message, userstate, methods})
    let streakMonths = userstate["msg-param-streak-months"];
    let cumulativeMonths = userstate["msg-param-cumulative-months"]
    let sharedStreak = userstate["msg-should-share-streak"]
    if(sharedStreak){
        client.say("duman52y", `Thx for ${streakMonths} Months @${user.username}! :D`)
    }else{
        client.say("Duman52y", `Thx for ${cumulativeMonths} Months @${user.username}! :D`)
    }
})