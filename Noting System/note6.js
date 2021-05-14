module.exports = ({
name: "setnote6",
aliases: "sn6",
description: "St user's note number: 1",
usage: "(p)setnote1 <@mentioned> <message>",
code: `
✅ **Note taken!**
**Note:** $messageSlice[1]
$setUserVar[note6;$replaceText[$message;$message[1];];$mentioned[1]]
$onlyForRoles[$getServerVar[gawmanager];You need a **Giveaway Manager role** to use this. To set it up do \`$getServerVar[prefix]grole\` ]
$onlyif[$message[1]!=;Wrong usage: $getServerVar[prefix]sn(no.) <@user> <note>]
`
})