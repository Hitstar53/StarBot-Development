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
 {footer:Type $getServerVar[prefix]help <command> for more info on a command. You can also type $getServerVar[prefix]help <category> for more info on a category.};no]

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
 {footer:Type $getServerVar[prefix]help <command> for more info on a command. You can also type $getServerVar[prefix]help <category> for more info on a category.};no]
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
 {footer:Type $getServerVar[prefix]help <command> for more info on a command. You can also type $getServerVar[prefix]help <category> for more info on a category.};no]
 $endelseIf

 $elseIf[$message[1]==config]
 $sendMessage[{color:BLACK}{author:Help Manual}{title:Server Configuration}{description:Config Commands}
 {field:**setprefix**:Set the guild prefix for Star Bot.:yes}
 {field:**modlog**:Set the logging channel for mod-Actions.:yes}
 {field:**setsuggest**:Set the channel to log suggestions.:yes}
 {field:**setrank**:Set the channel to log level-ups by members.:yes}
 {field:**modrole**:Set the server's Moderation role to access commands like purge / unlock / lock / slowmode etc:yes}
 {field:**muterole**:Sets the server's muted role.:yes}
 {field:**grole**:Set the server's Giveaway Manager Role.:yes}
 {field:**hrole**:Set the server's Heist Manager Role.:yes}
 {field:**command**:Command info:yes}
 {footer:Type $getServerVar[prefix]help <command> for more info on a command. You can also type $getServerVar[prefix]help <category> for more info on a category.};no]
 $endelseIf
 $endif

 $if[$message[1]==]
 $reactionCollector[$splitText[1];$authorID;2m;🔄,1️⃣,2️⃣,3️⃣,4️⃣,❎;helpHome,helpMod,helpUtil,helpFun,helpconfig,helpquit;yes]
 $setUserVar[helpembed;$splitText[1]]
 $textSplit[$sendMessage[{color:RANDOM}{thumbnail:https://cdn.discordapp.com/attachments/801680682421452840/840284984141021184/starbot3.jpg}{author:$client[name] Help Manual}{title:Help Command Pages}{description:\n🔄 - Return to **Home Page** (You're here!)\n\n1️⃣ - **Moderation Commands**\n\n2️⃣ - **Utility Commands**\n\n3️⃣ - **Fun Commands**\n\n4️⃣ - **Configuration Commands**\n\nLinks\n[Invite Star Bot](https://discord.com/api/oauth2/authorize?client_id=813313332249100329&permissions=2080763127&scope=bot) • [Vote Star Bot](https://discordbotlist.com/bots/star-bot-7914/upvote) • [Support Server](https://discord.gg/sU9DwJTuPV) • [Website](https://StarBot.hitstar53.repl.co)}{footer:Type $getServerVar[prefix]help <command> for more info on a command. You can also type $getServerVar[prefix]help <category> for more info on a category.};yes]; ]
 $endif
 $cooldown[5s;You're on cooldown! Please wait %time%.]
 $suppressErrors[{color:FF0000}{title:Something went wrong...}{description:If you see this, something probably went wrong. Please immediately report this to the developer!}]
 `
})

bot.awaitedCommand({
 name: "helpHome",
 code: `$editMessage[$message[1];{color:BLACK}{thumbnail:https://cdn.discordapp.com/attachments/801680682421452840/840284984141021184/starbot3.jpg}{author:$client[name] Help Manual}{title:Help Command Pages}{description:\n🔄 - Return to **Home Page** (You're here!)\n\n1️⃣ - **Moderation Commands**\n\n2️⃣ - **Utility Commands**\n\n3️⃣ - **Fun Commands**\n\n4️⃣ - **Configuration Commands**}{footer:Please wait for all reactions to show up before reacting!}{timestamp:ms}]`
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
 name: "helpconfig",
 code: `
 $editMessage[$message[1];{color:BLACK}{author:Help Manual}{title:Server Configuration}{description:Config Commands}
 {field:**setprefix**:Set the guild prefix for Star Bot.:yes}
 {field:**modlog**:Set the logging channel for mod-Actions.:yes}
 {field:**setsuggest**:Set the channel to log suggestions.:yes}
 {field:**setrank**:Set the channel to log level-ups by members.:yes}
 {field:**modrole**:Set the server's Moderation role to access commands like purge / unlock / lock / slowmode etc:yes}
 {field:**muterole**:Sets the server's muted role.:yes}
 {field:**grole**:Set the server's Giveaway Manager Role.:yes}
 {field:**hrole**:Set the server's Heist Manager Role.:yes}
 {field:**command**:Command info:yes}
 {footer:🔄 - Return to Home Page}{timestamp:ms}]
 `
})

bot.awaitedCommand({
 name: "helpquit",
 code: `
 $deletemessage[$getuservar[helpembed]]
 `
})
