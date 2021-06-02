module.exports = ({
 name: "$alwaysExecute",
 code: `$channelSendMessage[$channelID;{title:Bruh}{description:This command doesnt exist!}{thumbnail:https://cdn.discordapp.com/emojis/830968952975917125.png?v=1}{color:RED}{delete:10s}]
$onlyIf[$commandinfo[$replaceText[$message[1];$getServerVar[prefix];];name]==;]
$onlyIf[$stringStartsWith[$message;$getServerVar[prefix]]!=false;]`
})
