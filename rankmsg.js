module.exports = ({
 name: "setrankmsg",
 usage: "setrankmsg <message>",
 code: `$description[You have been setted the message to:
\`$message\`]
$color[01ff00]
$setServerVar[rmsg;$message]
$onlyIf[$message!=;You can also use this variables:
\`\`\`
{user.tag} = $userTag
{user.mention} = <@$authorID>
{level} = 1
{exp} = 25
\`\`\`
Current msg is:
\`$getServerVar[rmsg]\`]
$onlyBotPerms[mentioneveryone;managemessages;{description:I need permission \`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
})

//New version
module.exports = ({
name: "setrankmsg",
aliases: "rankmsg",
usage: "setrankmsg <message>",
code: `
$if[$message==]
$title[**You can use these variables to customise your message:**]
$description[

**{user.tag\\}** = $userTag
**{user.mention\\}** = <@$authorID>
**{level\\}** = 1
**{exp\\}** = 25
]
$addField[**Current message is**;\`$getServerVar[rmsg]\`;no]
$color[BLACK]

$else
$description[Level-Up message has been set to:
\`$message\`]
$color[BLACK]
$setServerVar[rmsg;$message]
$endif
$onlyBotPerms[managemessages;{description:I need permission \`MANAGE_MESSAGES\`}{color:BLACK}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:BLACK}]
$cooldown[10s;Please wait **%time%** before using this command again!]`
})
