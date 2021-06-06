module.exports = ({
 name: "greroll",
 aliases: ["gnewwinner"],
 description: "reroll the new winner from giveaway",
 code: `
$addCmdReactions[$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;❌];false;✅]]
$channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;There's no player join the giveaway];false;New Winner: <@$randomText[$joinSplitText[;]]>, Prize: ****$getServerVar[gaid]****!
Jump to message:
https://discord.com/$guildID/$channelID/$message[1]]]
$textSplit[$replaceText[$getReactions[$channelID;$message[1];📃;id];$clientID,;];,]
$onlyIf[$checkContains[$getReactions[$channelID;$message[1];📃;id];$clientID]==true;{description:No giveaway there}{color:RED}{footer:© discord.io/snowshark}]
$onlyIf[$getServerVar[pene]==;{description:Giveaway still running}{color:RED}{footer:© discord.io/snowshark}]
$onlyIf[$message[1]!=;{description:Invalid message ID}{color:RED}{reactions:❌}{footer:© discord.io/snowshark}]
$onlyIf[$getServerVar[timega]>=1;{description:Nothing giveaway ended.}{color:RED}{footer:© discord.io/snowshark}]
$onlyIf[$getServerVar[gaid]!=;{description:No giveaway in this server}{color:RED}{footer:© discord.io/snowshark}]
$onlyBotPerms[manageemojis;managemessages;mentioneveryone;{description:I dont have permission \`MANAGE_EMOJIS\`/\`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:RED}]
$onlyPerms[admin;{description:You need \`admin\` permission}{footer:© discord.io/snowshark}{color:RED}]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
}) 