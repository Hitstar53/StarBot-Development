module.exports = ({
name: "setnote2",
aliases: "sn2",
description: "St user's note number: 2",
usage: "(p)setnote2 <@mentioned> <message>",
code: `
✅ **Note taken!**
**Note:** $messageSlice[1]
$setUserVar[note2;$replaceText[$message;$message[1];];$mentioned[1]]
$onlyForRoles[$getServerVar[gawmanager];You need a **Giveaway Manager role** to use this. To set it up do \`$getServerVar[prefix]grole\` ]
$onlyif[$message[1]!=;Wrong usage: $getServerVar[prefix]sn(no.) <@user> <note>]
`
})