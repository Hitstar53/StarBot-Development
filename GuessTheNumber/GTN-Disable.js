module.exports = ({
name: "cancelgtn",
code: `
**Disabled** Gtn!
$setservervar[gtntries;0]
$setservervar[gtnchan;$channelID]
$setservervar[winnum;0]
$setservervar[gtnstatus;The Last game of GTN was cancelled in <#$channelID>]
$setservervar[gtn;false]
$onlyperms[manageserver;You don't have the \`MANAGE_SERVER\` permission]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})