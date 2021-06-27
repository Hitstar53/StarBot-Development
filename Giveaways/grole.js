module.exports = ({
name: "grole",
code: `
$channelSendMessage[$channelID;Set **grole** successfully]
$setServerVar[gawmanager;$findRole[$message[1]]]
$onlyIf[$roleExists[$findRole[$message[1]]]==true;{description:This role doesn't exist}{color:RED}]
$onlyIf[$message[1]!=;No role given]
$onlyPerms[admin;Missing permission:\`admin\`]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})