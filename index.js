const Aoijs = require("aoi.js")
const keepAlive = require("./server")
const { MessageEmbed } = require('discord.js')
const translate = require('@iamtraction/google-translate');
const mySecret = process.env['TOKEN']

const bot = new Aoijs.Bot({
  sharding: false,
  shardAmount: 2, 
  mobile: false,
  //dbhToken: "API KEY", Remove // if using, get an API Key from their Server
  token: mySecret,
  prefix: "$getServerVar[prefix]",
  autoUpdate: false,
  fetchInvites: true
})

// bot status
bot.status({
 text: "s!help",
 type: "LISTENING",
 time: 12
})

bot.status({
 text: "$serverCount Servers | s!help",
 type: "WATCHING",
 status: "online",
 time: 12
})

bot.onMessage()

bot.loadCommands(`./commands/`)

//NQN WEBHOOK
bot.client.on("message", async (message) => {
  if (message.author.bot) return;
  let msg = message.content;

  let emojis = msg.match(/(?<=:)([^:\s]+)(?=:)/g)
  if (!emojis) return;
  emojis.forEach(m => {
    let emoji = bot.client.emojis.cache.find(x => x.name === m)
    if (!emoji) return;
    let temp = emoji.toString()
    if (new RegExp(temp, "g").test(msg)) msg = msg.replace(new RegExp(temp, "g"), emoji.toString())
    else msg = msg.replace(new RegExp(":" + m + ":", "g"), emoji.toString());
  })

  if (msg === message.content) return;

  let webhook = await message.channel.fetchWebhooks();
  let number = randomNumber(1, 2);
  webhook = webhook.find(x => x.name === "BIGSMOKE" + number);

  if (!webhook) {
    webhook = await message.channel.createWebhook(`STAR` + number, {
      avatar: bot.client.user.displayAvatarURL({ dynamic: true })
    });
  }

  await webhook.edit({
    name: message.member.nickname ? message.member.nickname : message.author.username,
    avatar: message.author.displayAvatarURL({ dynamic: true })
  })

  message.delete().catch(err => { })
  webhook.send(msg).catch(err => { })

  await webhook.edit({
    name: `BIGSMOKE` + number,
    avatar: bot.client.user.displayAvatarURL({ dynamic: true })
  })


})

//functions
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//join and leave logs

bot.botJoinCommand({
 channel: "835393779154288680", //channel where logs are sent
 code: `$title[New server!]
 $description[
 $addfield[Guild Name:;$serverName]
 $addfield[Member Count:;$memberscount]
 $addfield[Guild ID:;$guildID]
 $addfield[Guild Owner:;$userTag[$ownerID]]
 ]
 $color[GREEN]
 $footer[ENTER CREATIVE FOOTER]`
})
bot.onGuildJoin()  

bot.botLeaveCommand({
 channel: "835393779154288680",
 code: `$title[Removed from guild]
 $description[
 $addfield[Guild Name:;$serverName]
 
 $addfield[Member Count:;$memberscount]

 $addfield[Guild ID:;\$guildID\] 

 $addfield[Guild Owner:;$userTag[$ownerID]]
 ]
 $color[RED]
 $footer[ENTER CREATIVE FOOTER]`
})
bot.onGuildLeave()  

//Translate cog

bot.command({
  name: "translate",
  code: `
$djsEval[const {MessageEmbed} = require ('discord.js');

const translate = require('@iamtraction/google-translate');

const idioma =  d.args[0\];

const texto = d.args.slice(1).join(' ');

 if(!idioma){ 

 message.channel.send('Add a valid language');

 }

 if(!texto) {

 message.channel.send('Please enter a text to translate. **Syntax:** -translate <language> <text-to-translate>');

 }

 translate(texto , { to: idioma }).then(res => {

 let embed = new MessageEmbed()

 .setTitle('Translator')

 .addField('Initial text:', texto)

 .addField('New text:', res.text)

 .setColor('BB8FCE')

 message.channel.send(embed)

 }).catch(err => {

 console.error(err);

 });
]
`
})

//Auto Update cog

bot.readyCommand({ 
 channel: "837194466225946647", 
 code: `$reboot[index.js]
$log[The auto-update has completed, your server will now restart!]
$wait[2m]
$djsEval[require('child_process').execSync('npm i -u dbd.js');yes]
$log[The auto-update has started, please do not stop your server. The server will restart when the update is complete.]
$wait[15s]
$log[You are currently running DBD.js version $packageVersion and the latest version of DBD.js is $jsonRequest[https://jastinch-api.ml/npm?search=dbd.js;lastVersion]! To cancel the auto-update, please stop your server now and remove the auto-update script. The auto-update will begin in 15 seconds.]
$log[$jsonRequest[https://artii.herokuapp.com/make?text=DBD.js Automatic Update]]
Bot is online running an outdated version of DBD.js (running **$packageVersion**, latest **$jsonRequest[https://jastinch-api.ml/npm?search=dbd.js;lastVersion]**)! Auto-update has started, check the bot's console.
$onlyIf[$jsonRequest[https://jastinch-api.ml/npm?search=dbd.js;lastVersion]!=;Bot is online running version **$packageVersion**! Auto-update is currently unreachable at the moment, bot will run as normal but make sure you have the latest version!]
$onlyIf[$packageVersion!=$jsonRequest[https://jastinch-api.ml/npm?search=dbd.js;lastVersion];Bot is online running the latest version of DBD.js (**$packageVersion**)!]`
})

// level system 

bot.variables({
 rch: "",
 rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}",
 lvl: "0",
 exp: "0",
 rexp: "40",
 rsystem: "0"
})

bot.command({
 name: "$alwaysExecute",
 code: `$useChannel[$getServerVar[rch]]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyForServers[$guildID;]` 
})
 
bot.command({
 name: "$alwaysExecute",
 code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]`
})
 
bot.awaitedCommand({
 name: "errorrank",
 code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
})

//ChatBot system

bot.command({
 name: "$alwaysExecute", 
 code: `
$onlyIf[$channelID==$getServerVar[chatbotchannel];]
$description[$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$message&botname=Ori&ownername=Boost-Studios;message]]`
})

bot.variables({
 chatbotchannel: "Not Set",
})

//NOTE System

bot.variables({
 note1: "Not Set",
 note2: "Not Set",
 note3: "Not Set",
 note4: "Not Set",
 note5: "Not Set",
 note6: "Not Set",
 note7: "Not Set",
 note8: "Not Set",
 note9: "Not Set",
 note10: "Not Set",
 note11: "Not Set",
 note12: "Not Set"
})

//GUESS THE number

bot.variables({
 gtnchan: "",
 winnum: "",
 gtntries: "0",
 gtn: "false",
 gtnwins: "0",
 gtnattempts: "0",
 gtnstatus: "No ongoing game.",
 n1: "",
 n2: ""
})

//moderation commands

//Warning System
bot.command({
  name: "warn",
  code: `
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];{title:Mod Logs}{field:Action:Warn Case}{field:Responsible Moderator:$username}{field:Offender:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]}{footer:$findUser[$message[1]]}{timestamp:ms}{color:RED}]
$endif
$title[You Have been warned!]
$description[You warned <@$mentioned[1]> for **reason:**$replaceText[$message;$message[1];] **id:** #$getServerVar[warn]]
$color[RED]
$djsEval[const nodejsondb = require("node-json-db").JsonDB;
var db = new nodejsondb("warns", true, true, '/');
db.push("/$findUser[$message[1];no]/$getServerVar[warn]", {"reason":"$replaceText[$message;$message[1];]","mod":"$username", "id":"$getServerVar[warn]"});]
$setServerVar[warn;$sum[$getServerVar[warn];1]]
$onlyIf[$findUser[$message[1];no]!=undefined;User not found]
$argsCheck[>2;Args missing! **syntax:** -warn <@user> <reason>]`
})

bot.command({
  name: "warns",
  code: `
$author[Warns from $userTag[$findUser[$message[1];no]];$userAvatar[$findUser[$message[1];no]]]
$footer[$getObjectProperty[total] in total]
$color[YELLOW]
$description[$getObjectProperty[text]]
$onlyIf[$getObjectProperty[text]!=;]
$djsEval[const { promisify } = require("util") 
let user = '$findUser[$message[1];no]';
var read = promisify(require('read-file')) 
read('warns.json', 'utf8').then(buffer => {
try{
const warns = JSON.parse(buffer)
const obj = Object.values(warns[user\\]).filter(a => a.reason && a.mod && a.id) 
if (!obj.length) throw new Error("ignore") 
d.object.total = obj.length
d.object.text = obj.map((data, number) => 'Warn #' + number + ':\\n└ **ID:** ' + data.id + '\\n└ **Reason:** ' + data.reason + '\\n└ **Responsible Moderator:** ' + data.mod).join("\\n\\n")
} catch(e) {
message.channel.send('This person has no warns')
} 
})
$createObject[{}]
$onlyIf[$findUser[$message[1];no]!=undefined;User not found]
$argsCheck[>1;Args are missing! **syntax:** -warns <@user>]`
})

bot.command({
  name: "clearwarn",
  code: `
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];{title:Mod Logs}{field:Action:Unwarn Case}{field:Responsible Moderator:$username}{field:Offender:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]}{footer:$findUser[$message[1]]}{timestamp:ms}{color:GREEN}]
$endif
$sendMessage[{title: Cleared Successfully!}{description:You just removed the warns from <@$mentioned[1]>}{color:GREEN};no]
$djsEval[const nodejsondb = require("node-json-db").JsonDB;
var db = new nodejsondb("warns", true, true, '/');
db.delete("/$mentioned[1]");]
$onlyIf[$noMentionMessage==all;]
$if[$noMentionMessage!=all]
$sendMessage[{title:Cleared Successfully!}{description:you removed the warn #$noMentionMessage to <@​$mentioned[1]>}{color:GREEN};no]
$djsEval[const nodejsondb = require("node-json-db").JsonDB; 
var db = new nodejsondb("warns", true, true, '/');
db.delete("/$mentioned[1]/$noMentionMessage");]
$endif
$onlyIf[$noMentionMessage!=;Type one warn id or all to remove warns]
$onlyIf[$mentioned[1]!=;Mention someone]`
})


//Snipe and Editsnipe cog
bot.deletedCommand({
 channel: "$channelID",
 code: `$setChannelVar[snipe_msg;$message]
 $setChannelVar[snipe_author;$authorID]
 $setChannelVar[snipe_channel;$channelID]
 $setChannelVar[snipe_date;$day $month $year - $hour:$minute]`
});

bot.onMessageDelete();
 
bot.command({
name: "snipe",
code: `$color[RANDOM]
$author[$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]
$description[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]]
$footer[#$channelName[$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]] | $getChannelVar[snipe_date;$mentionedChannels[1;yes]]]
$onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=;Theres nothing to snipe in <#$mentionedChannels[1;yes]>]`
})
 

bot.updateCommand({
 channel: "$channelID",
 code: `$setChannelVar[msgEditorID;$authorID]
 $setChannelVar[esnipeOldMsg;$oldMessage]`
})

bot.onMessageUpdate();
 
bot.command({
 name: "editsnipe",
 aliases: ["esnipe"],
 code: `$author[$username[$getChannelVar[msgEditorID]]#$discriminator[$getChannelVar[msgEditorID]];$userAvatar[$getChannelVar[msgEditorID]]]
$description[$getChannelVar[esnipeOldMsg]]
$addTimestamp
$color[RANDOM]
$onlyIf[$getChannelVar[esnipeOldMsg]!=undefinied;{description: there is nothing to snipe}{color: RED}]
$onlyIf[$getChannelVar[msgEditorID]!=undefinied;{description: there is nothing to snipe}{color: RED}]
$suppressErrors[There is nothing to snipe]`
})

//Variabled needed
bot.variables({
 snipe_msg: "",
 snipe_author: "",
 snipe_channel: "",
 snipe_date: "",
 msgEditorID: "undefined",
 esnipeOldMsg: "undefined"
})

bot.variables({
 prefix: "s!",
 warn: "1",
 muted: "",
 modlogs: "0",
 userused: "0",
 commanduserused: "0",
 command: "enabled",
 suggestchannel: "",
 suggest_system: "no",
 AFK: "off",
 time: "",
 helpembed: "",
 trollchannel: "",
 gawmanager: "",
 modrole: "",
 heistmanager: "",
 timezone: "Not Set",
 reason: "0"
})

bot.variables({
 pene: "",
 timega: "",
 gaid: ""
})

//RPS system
bot.awaitedCommand({
name: "rock",
code: `
$title[🧠 RPS GAME]
$thumbnail[$userAvatar[$clientID]]
$description[
 $randomText[
**$username[$clientID] ✊ Vs ✊ You**

🟡 │ It's a **TIE**.;
**$username[$clientID] 📄 Vs ✊ You**

🔴 │ You **LOST**.;
**$username[$clientID] ✂ Vs ✊ You**

🟢 │You **WON**]

$randomText[🎉 Well Played !;🎉 Good Game !]
]
$color[YELLOW]
$footer[Requested By $username[$authorID];$authorAvatar]
$addTimestamp
`})

bot.awaitedCommand({
name: "paper",
code: `
$title[🧠 RPS GAME]
$thumbnail[$userAvatar[$clientID]]
$description[
 $randomText[
**$username[$clientID] 📄 Vs 📄 You**

🟡 │ It's a **TIE**.;
**$username[$clientID] ✂ Vs 📄 You**

🔴 │ You **LOST**.;
**$username[$clientID] ✊ Vs 📄 You**

🟢 │You **WON**.]

$randomText[🎉 Well Played !;🎉 Good Game !]
]
$color[WHITE]
$footer[Requested By $username[$authorID];$authorAvatar]
$addTimestamp
`})

bot.awaitedCommand({
name: "scissor",
code: `
$title[🧠 RPS GAME]
$thumbnail[$userAvatar[$clientID]]
$description[
$randomText[
**$username[$clientID] ✂ Vs ✂ You**

🟡 │ It's a **TIE**.;
**$username[$clientID] ✊ Vs ✂ You**

🔴 │ You **LOST**.;
**$username[$clientID] 📄 Vs ✂ You**

🟢 │You **WON**.]

$randomText[🎉 Well Played !;🎉 Good Game !]
]
$color[GREEN]
$footer[Requested By $username[$authorID];$authorAvatar]
$addTimestamp
`})

//WELCOME COG

bot.variables({
 wchannel: "",
 wmessage: ""
})

bot.command({
 name: "setjoin",
 code: `$setServerVar[wchannel;$mentionedChannels[1]]
Successfully set the <#$mentionedChannels[1]> as the welcome channel.`
})

bot.command({
 name: "setmessage",
 code: `$setServerVar[wmessage;$message] 
 successfully changed welcome message.
 new message: $message `
})

bot.joinCommand({
 channel: "$getServerVar[wchannel]",
 code: `<@$authorID>
 $title[__**DS BOT SUPPORT**__]
 $description [$getServerVar[wmessage]]
 $thumbnail[$authorAvatar]
 $addTimestamp 
 $footer[enjoy your stay!]
 $color[$random[000000;999999]]` 
})
bot.onJoined()


//REACTION ROLE System

bot.command({
name: "rradd",
code: `
$description[Added <@&$findRole[$message[3]]> as reaction role **Successfully**]
$color[BLACK]
$reactionCollector[$message[1];everyone;24d;$message[2];RR1;no]
$setServerVar[rr1;$findRole[$message[3]]]
$argsCheck[3; **Wrong Usage** | please use: \`$getServerVar[prefix]rr-add <messageID> <emoji> <@role/roleID>\`]

$suppressErrors[ **There is a problem** | make sure you wrote correctly: \`$getServerVar[prefix]rr-add <messageID> <emoji> <@role>\`\n or check If I have enough Permissions to give this role or add reactions]

$onlyPerms[manageserver;**you do not have permissions**]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})

bot.awaitedCommand({
 name: "RR1",
 code: `
 $giveRoles[$authorID;$getServerVar[rr1]]
`
})

//vars
bot.variables({
 rr1:""
})

//help system🔄,1️⃣,2️⃣

bot.command({
 name: "help",
 code: `
 $if[$message[1]==moderation]
 $sendMessage[{color:RED}{author:Help Manual}{title:Moderation}{description:Moderation Commands}
 {field:**ban**:Bans a member whether or not the member is in the server. Graph's favourite command!:yes}
 {field:**tempban**:Bans someone for the specified duration. The member does not have to be in the server for this to work.:yes}
 {field:**unban**:Unbans a member.:yes}
 {field:**kick**:Kicks a member from the server:yes}
 {field:**temprole**:Adds a role to a member and removes it after the specified duration:yes}    
 {field:**lock**:Locks down a channel by changing permissions for the default role. This will not work if your server is set up improperly:yes}
 {field:**unlock**:Unlocks a channel (sets send_messages to neutral):yes}
 {field:**warn**:Warns a member with an optional reason argument.:yes}
 {field:**warns**:Lists all current warnings in the server. Specify a member to see all of their warns.:yes}
 {field:**clearwarn**:Remove warns from a member.:yes}
 {field:**slowmode**:Sets the slowmode for the specified channel:yes}
 {field:**purge**:Deletes messages. Ignores pinned messages.:yes}
 {field:**mute**:Mutes a member indefinitely/until unmuted.:yes}
 {field:**tempmute**:Mutes a member for the specified duration.:yes}
 {field:**unmute**:Unmutes a member (i.e. removes the muted role):yes}
 {field:**s-modlog**:Sets the Mod Log channel of the server:yes}
 {field:**modrole**:Sets the mod role in the guild:yes}
 {footer:Type -help <command> for more info on a command. You can also type -help <category> for more info on a category.};no]

 $elseIf[$message[1]==utility]
 $sendMessage[{color:BLUE}{author:Help Manual}{title:Utility}{description:Utility Commands}
 {field:**avatar**:Gives you a member's avatar in different formats:yes}
 {field:**afk**:AFK command:yes}
 {field:**botinfo**:Shows info on the bot:yes}
 {field:**calculate**:calculation command:yes}
 {field:**device**:Shows what device the member is on.:yes}
 {field:**embed**:Creates an embed with the specified color in the specified channel.:yes}
 {field:**gdonate**:template for doing donation reqs for more info type: \`$getServerVar[prefix]help giveaway\`:yes}
 {field:**hdonate**:template for doing heist donos in Dank memer:yes}
 {field:**invites**:Shows invites of a user:yes}
 {field:**membercount**:shows member-count of the guild.:yes}
 {field:**ping**:used to check if the bot is alive:yes}
 {field:**poll**:Quick and easy yes/no poll:yes}
 {field:**rank**:Shows user's level in the server:yes}
 {field:**reminder**:Sets a reminder:yes}
 {field:**role info**:Shows info on a role:yes}
 {field:**search**:Search the web!:yes}
 {field:**serverinfo**:Shows info on the server:yes}
 {field:**setmute**:Sets the server mute-role.:yes}
 {field:**setnick**:Sets or resets a user's nickname:yes}
 {field:**setprefix**:Change Prefix of the guild:yes}
 {field:**setrank**:Sets the level-up log channel:yes}
 {field:**setsuggest**:Sets the suggestions channel:yes}
 {field:**shortlink**:Used to shorten a URL:yes}
 {field:**status**:Shows status of the member:yes}
 {field:**translate**:Translation command:yes}
 {field:**uptime**:Tells you how long the bot has been up for.:yes}
 {field:**userinfo**:Shows info on a user:yes}
 {field:**weather**:Shows weather info on a location:yes}
 {footer:Type -help <command> for more info on a command. You can also type -help <category> for more info on a category.};no]
 $endelseIf
 
 $elseIf[$message[1]==fun]
 $sendMessage[{color:RANDOM}{author:Help Manual}{title:Fun}{description:Fun Commands}
 {field:**lovecalc**:love calculator!:yes}
 {field:**countdown**:A 60 sec countdown timer:yes}
 {field:**hack**:Hacks a member.Use this at your own risk!:yes}
 {field:**rolldice**:Rolls a dice:yes}
 {field:**Howgay**:Simple gayrate command:yes}
 {field:**kill**:Kills a user!:yes}
 {field:**8ball**:Ask a question to the bot:yes}
 {field:**enlarge**:Enlarges an emoji:yes}
 {field:**joke**:Random joke generator:yes}
 {field:**roast**:Roasts a member:yes}
 {field:**Covid**:Shows covid stats of the specified country:yes}
 {field:**rps**:Play a game of rock paper scissors:yes}
 {field:**suggest**:Make a suggestion!:yes}
 {field:**ascii**:Converts text into ascii Art:yes}
 {field:**Chatbot**:disable or Set the chatbot channel in the server:yes}
 {field:**emojify**:Converts text into emojis:yes}
 {footer:Type -help <command> for more info on a command. You can also type -help <category> for more info on a category.};no]
 $endelseIf
 $endif

 $if[$message[1]==]
 $reactionCollector[$splitText[1];$authorID;2m;🔄,1️⃣,2️⃣,3️⃣,❎;helpHome,helpMod,helpUtil,helpFun,helpquit;yes]
 $setUserVar[helpembed;$splitText[1]]
 $textSplit[$sendMessage[{color:RANDOM}{thumbnail:https://cdn.discordapp.com/attachments/801680682421452840/840284984141021184/starbot3.jpg}{author:$client[name] Help Manual}{title:Help Command Pages}{description:\n🔄 - Return to **Home Page** (You're here!)\n\n1️⃣ - **Moderation Commands**\n\n2️⃣ - **Utility Commands**\n\n3️⃣ - **Fun Commands**\n\n Type -help <command> for more info on a command. You can also type -help <category> for more info on a category.}{footer:Requested by $userTag[$authorID]:$authorAvatar}{timestamp:ms};yes]; ]
 $endif
 $cooldown[5s;You're on cooldown! Please wait %time%.]
 $suppressErrors[{color:FF0000}{title:Something went wrong...}{description:If you see this, something probably went wrong. Please immediately report this to the developer!}]
 `
})

bot.awaitedCommand({
 name: "helpHome",
 code: `$editMessage[$message[1];{color:BLACK}{thumbnail:https://cdn.discordapp.com/attachments/801680682421452840/840284984141021184/starbot3.jpg}{author:$client[name] Help Manual}{title:Help Command Pages}{description:\n🔄 - Return to **Home Page** (You're here!)\n\n1️⃣ - **Moderation Commands**\n\n2️⃣ - **Utility Commands**\n\n3️⃣ - **Fun Commands**\n\n Type -help <command> for more info on a command. You can also type -help <category> for more info on a category.}{footer:Please wait for all reactions to show up before reacting!}{timestamp:ms}]`
})

bot.awaitedCommand({
 name: "helpMod",
 code: `$editMessage[$message[1];{color:RED}{author:Help Manual}{title:Moderation}{description:Moderation Commands}
 {field:**ban**:Bans a member whether or not the member is in the server. Graph's favourite command!:yes}
 {field:**tempban**:Bans someone for the specified duration. The member does not have to be in the server for this to work.:yes}
 {field:**unban**:Unbans a member.:yes}
 {field:**kick**:Kicks a member from the server:yes}
 {field:**temprole**:Adds a role to a member and removes it after the specified duration:yes}   
 {field:**lock**:Locks down a channel by changing permissions for the default role. This will not work if your server is set up improperly:yes}
 {field:**unlock**:Unlocks a channel (sets send_messages to neutral):yes}
 {field:**warn**:Warns a member with an optional reason argument.:yes}
 {field:**warns**:Lists all current warnings in the server. Specify a member to see all of their warns.:yes}
 {field:**clearwarn**:Remove warns from a member.:yes}
 {field:**slowmode**:Sets the slowmode for the specified channel:yes}
 {field:**purge**:Deletes messages. Ignores pinned messages.:yes}
 {field:**mute**:Mutes a member indefinitely/until unmuted.:yes}
 {field:**tempmute**:Mutes a member for the specified duration.:yes}
 {field:**unmute**:Unmutes a member (i.e. removes the muted role):yes}
 {field:**s-modlog**:Sets the Mod Log channel of the server:yes}
 {field:**modrole**:Sets the mod role in the guild:yes}
 {footer:🔄 - Return to Home Page}{timestamp:ms}]`
})

bot.awaitedCommand({
 name: "helpUtil",
 code: `$editMessage[$message[1];{color:BLUE}{author:Help Manual}{title:Utility}{description:Utility Commands}
 {field:**avatar**:Gives you a member's avatar in different formats:yes}
 {field:**afk**:AFK command:yes}
 {field:**botinfo**:Shows info on the bot:yes}
 {field:**calculate**:calculation command:yes}
 {field:**device**:Shows what device the member is on.:yes}
 {field:**embed**:Creates an embed with the specified color in the specified channel.:yes}
 {field:**gdonate**:template for doing donation reqs for more info type: \`$getServerVar[prefix]help giveaway\`:yes}
 {field:**hdonate**:template for doing heist donos in Dank memer:yes}
 {field:**invites**:Shows invites of a user:yes}
 {field:**membercount**:shows member-count of the guild.:yes}
 {field:**ping**:used to check if the bot is alive:yes}
 {field:**poll**:Quick and easy yes/no poll:yes}
 {field:**rank**:Shows user's level in the server:yes}
 {field:**reminder**:Sets a reminder:yes}
 {field:**role info**:Shows info on a role:yes}
 {field:**search**:Search the web!:yes}
 {field:**serverinfo**:Shows info on the server:yes}
 {field:**setmute**:Sets the server mute-role.:yes}
 {field:**setnick**:Sets or resets a user's nickname:yes}
 {field:**setprefix**:Change Prefix of the guild:yes}
 {field:**setrank**:Sets the level-up log channel:yes}
 {field:**setsuggest**:Sets the suggestions channel:yes}
 {field:**shortlink**:Used to shorten a URL:yes}
 {field:**status**:Shows status of the member:yes}
 {field:**translate**:Translation command:yes}
 {field:**uptime**:Tells you how long the bot has been up for.:yes}
 {field:**userinfo**:Shows info on a user:yes}
 {field:**weather**:Shows weather info on a location:yes}
 {footer:🔄 - Return to Home Page}{timestamp:ms}]`
})

bot.awaitedCommand({
 name: "helpFun",
 code: `$editMessage[$message[1];{color:RANDOM}{author:Help Manual}{title:Fun}{description:Fun Commands}
 {field:**lovecalc**:love calculator!:yes}
 {field:**countdown**:A 60 sec countdown timer:yes}
 {field:**hack**:Hacks a member.Use this at your own risk!:yes}
 {field:**rolldice**:Rolls a dice:yes}
 {field:**Howgay**:Simple gayrate command:yes}
 {field:**kill**:Kills a user!:yes}
 {field:**8ball**:Ask a question to the bot:yes}
 {field:**enlarge**:Enlarges an emoji:yes}
 {field:**joke**:Random joke generator:yes}
 {field:**roast**:Roasts a member:yes}
 {field:**Covid**:Shows covid stats of the specified country:yes}
 {field:**rps**:Play a game of rock paper scissors:yes}
 {field:**suggest**:Make a suggestion!:yes}
 {field:**ascii**:Converts text into ascii Art:yes}
 {field:**Chatbot**:disable or Set the chatbot channel in the server:yes}
 {field:**emojify**:Converts text into emojis:yes}
 {field:**command**:Command info:yes}
 {footer:🔄 - Return to Home Page}{timestamp:ms}]`
})

bot.awaitedCommand({
 name: "helpquit",
 code: `
 $deletemessage[$getuservar[helpembed]]
 `
})

bot.command({
name: "hello",
code: `Hello <@$authorID>`
})

keepAlive()