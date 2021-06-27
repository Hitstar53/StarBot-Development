module.exports = ({
name: "gdonate",
code: `
$if[$message[1]==]
$title[Command to donate to $serverName Giveaways]
$color[BLACK]
$author[$serverName;$serverIcon]
$description[
Command: **$getServerVar[prefix]gdonate time | winners | Requirements | prize | message**

(time) = Amount of Time Until the Giveaway Ends
(winners) = Amount Of Winners
(Requirements) = Giveaway Requirements
(Prize) = Prize of The Giveaway
(message) = Optional Message to go with the Giveaway
]
$footer[Note: Use | to seperate the arguments!]
$addTimestamp

$elseIf[$message[1]!=]
<@&$getServerVar[gawmanager]>
$title[Giveaway Donation Request]
$description[
<@$authorID> **Wants To Make A Donation!**

**Time:** $splitText[1]
**Winners:** $splitText[2]
**Requirements:** $splitText[3]
**Prize:** $splitText[4]
**Message:** $splitText[5]

**Syntax:** 
n!g start $splitText[1] $splitText[2] role:$role[$findRole[$splitText[3]];id] $splitText[4] --donor <@$authorID> --msg $splitText[5] --ping

$textSplit[$message; | ]
]
$color[BLACK]
$footer[Thanks for donating at $serverName]
$addTimestamp
$endelseIf
$endif
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})