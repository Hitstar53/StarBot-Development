module.exports = ({
name: "gtnstats",
aliases: ['gtnstatistics'],
code: `
$title[Guess The Number Stats]
$color[BLACK]
$description[GTN commands: cancelgtn, gtnstats, gtn]
$addField[GTN Status;$getservervar[gtnstatus];yes]
$addField[GTN Channel;<#$getservervar[gtnchan]>;yes]
$addField[Wins;$getglobaluservar[gtnwins;$findmember[$message]];yes]
$addField[Total Attempts/Wins;$getglobaluservar[gtnattempts;$findmember[$message]];yes]
$thumbnail[$useravatar[$findmember[$message]]]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})