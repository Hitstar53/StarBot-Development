module.exports = ({
 name: "gstart",
 aliases: ["gcreate"],
 usage: "giveaway <time> <prize>",
 description: "make some awesome giveaway to your members!",
 code: `
$setServerVar[timega;0]
$setServerVar[gaid;]
$wait[3m]
$setServerVar[pene;]
$editMessage[$getServerVar[pene];{title:Giveaway Finished 📃}{description:Prize: $messageSlice[1] 📃
Hosted By: **$userTag[$authorID]**
Winner: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==];true;Invalid participate. Must be at least 2 participate];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer:React Below to Enter!:$userAvatar[$clientID]}]
$channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==];true;Nothing participate, canceling giveaway 📃.];false;Winner from giveaway is <@$randomText[$joinSplitText[;]]>, Prize: ****$messageSlice[1]****!

Jump to message:
https://discord.com/channels/$guildID/$channelID/$getServerVar[pene]]]
$textSplit[$replaceText[$getReactions[$channelID;$getServerVar[pene];📃;id];$clientID,;];,]
$setServerVar[timega;1]

$wait[$message[1]] 
$setServerVar[gaid;$messageSlice[1]]
$setServerVar[pene;$splitText[1]]
$textSplit[$sendMessage[{title:React with 📃 to participate!.}{description:Prize: $messageSlice[1]
Hosted By: **$userTag[$authorID]**
Time: **$message[1]**}{timestamp}{color:RED}{reactions:📃}{footer:React Below to Enter!};yes]; ]
$onlyIf[$messageSlice[1]!=;{description:Invalid arguments, use this:
\`\`\`
- $getServerVar[prefix]giveaway <time> <prize>.\`\`\`
Symbol \`<>\` are required
}{color:RED}]
$onlyIf[$replaceText[$message[1];s;]>=30;{description:Invalid time limits! giveaway must be more long than 30}{color:RED}]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;];d;]]!=false;{description:Invalid time. Use this variables:
\`\`\`
1s Is 1 second 
1m Is 1 minute
1h Is 1 hour
1d Is 1 day
\`\`\`\nExample: \`$getServerVar[prefix] <time> <prize>\`\nSymbol \`<>\` are required}{color:RED}{thumbnail:$userAvatar[$clientID]}]
$onlyBotPerms[manageemojis;managemessages;mentioneveryone;{description:I dont have permission \`MANAGE_EMOJIS\`/\`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:RED}]
$onlyPerms[admin;{description:You need \`admin\` permission}{color:RED}]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
}) 