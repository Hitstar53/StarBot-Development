module.exports = ({
name: "oldpurge",
code: `
$sendMessage[**$splitText[1] Messages deleted successfully**{delete:2s};no]
$textSplit[$clear[$replaceText[$replaceText[$checkCondition[$message==];true;100];false;$message];everyone;$channelID;yes]]
$wait[2s]
$deletecommand
$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message==];true;100];false;$message]]==true;❌ Please provide a valid amount! {delete:5s}]
$onlyForRoles[$getServerVar[modrole];You need a **Mod role** to use this. To set it up do \`$getServerVar[prefix]modrole\` ]
$onlyPerms[managemessages;❌ You need manage messages permission {delete:2s}]
$onlyBotPerms[managemessages;❌ I don't have manage messages permission! {delete:2s}]
$onlyIf[$message!=;please provide a number!]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})
