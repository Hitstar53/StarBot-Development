module.exports = ({
name: "setnote10",
aliases: "sn10",
description: "St user's note number: 10",
usage: "(p)setnote10 <@mentioned> <message>",
code: `
✅ **Note taken!**
**Note:** $messageSlice[1]
$setUserVar[note10;$replaceText[$message;$message[1];];$mentioned[1]]
$onlyForRoles[$getServerVar[gawmanager];You need a **Giveaway Manager role** to use this. To set it up do \`$getServerVar[prefix]grole\` ]
$onlyif[$message[1]!=;Wrong usage: $getServerVar[prefix]sn(no.) <@user> <note>]
`
})