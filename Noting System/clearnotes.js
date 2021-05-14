module.exports = ({
name: "clearnotes",
aliases: "cn",
description: "Clears users notes",
usage: "(p)clearnotes <@mentioned>",
code:`
**✅ Cleared all notes for $username[$mentioned[1]]#$discriminator**
$setUserVar[note1;Not Set;$mentioned[1]]
$setUserVar[note2;Not Set;$mentioned[1]]
$setUserVar[note3;Not Set;$mentioned[1]]
$setUserVar[note4;Not Set;$mentioned[1]]
$setUserVar[note5;Not Set;$mentioned[1]]
$setUserVar[note6;Not Set;$mentioned[1]]
$setUserVar[note7;Not Set;$mentioned[1]]
$setUserVar[note8;Not Set;$mentioned[1]]
$setUserVar[note9;Not Set;$mentioned[1]]
$setUserVar[note10;Not Set;$mentioned[1]]
$setUserVar[note11;Not Set;$mentioned[1]]
$setUserVar[note12;Not Set;$mentioned[1]]

$setUserVar[note1;$replaceText[$message;$message[1];];$mentioned[1]]
$onlyForRoles[$getServerVar[gawmanager];You need a **Giveaway Manager role** to use this. To set it up do \`$getServerVar[prefix]grole\` ]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
$onlyif[$mentioned[1]!=;Mention someone!]
`
})