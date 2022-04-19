const express = require("express")
const app = express()
const Discord = require("discord.js")
const client = new Discord.Client();
const config = {
    "footIcon": "https://iili.io/M31cR2.png",
    "creator": "ZeltuxDev"
}

client.login(process.env.TOKEN)

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome")
    if (!channel) return;

    const joinembed = new Discord.MessageEmbed()
    .setColor("#808080")
    .setThumbnail(member.user.displayAvatarURL())
    .setTitle(`Welcome to Stingray Proxy!`)
    .setDescription(`Welcome ${member} to  the **Stingray Support** discord server! \n https://officialstingray.gq \n https://flpxy.com`)
    .addField(`Total Members: `, `${member.guild.memberCount}`)
    .setFooter('Made by ' + config.creator, config.footIcon)
    .setTimestamp()
    channel.send(joinembed)
});

client.on('ready', () => {
	console.log("Running, logged in as " + client.user.tag);
  	client.user.setActivity('Stingray Support Server', {
		type: 'WATCHING'
	})
});

