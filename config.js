module.exports = ({
name: "serverconfig",
aliases: "config",
code: `
$title[$serverName Server Config]
$color[BLACK]
$description[**Server Prefix:** \`$getServerVar[prefix]\`]

$addField[Mod Role;$replaceText[$replaceText[$checkCondition[$getServerVar[modrole]!=];true;<@&$getServerVar[modrole]>];false;Not Set];yes]
$addField[Muted Role;$replaceText[$replaceText[$checkCondition[$getServerVar[muted]!=];true;<@&$getServerVar[muted]>];false;Not Set];yes]
$addField[Giveaway Manager Role;$replaceText[$replaceText[$checkCondition[$getServerVar[gawmanager]!=];true;<@&$getServerVar[gawmanager]>];false;Not Set];yes]
$addField[Heist Manager Role;$replaceText[$replaceText[$checkCondition[$getServerVar[heistmanager]!=];true;<@&$getServerVar[heistmanager]>];false;Not Set];yes]

$addField[Mod-Log Channel;$replaceText[$replaceText[$checkCondition[$getServerVar[modlog]!=];true;<#$getServerVar[modlog]>];false;Not Set];yes]
$addField[Server-Log Channel;$replaceText[$replaceText[$checkCondition[$getServerVar[serverlog]!=];true;<#$getServerVar[serverlog]>];false;Not Set];yes]
$addField[Member-Log Channel;$replaceText[$replaceText[$checkCondition[$getServerVar[memberlog]!=];true;<#$getServerVar[memberlog]>];false;Not Set];yes]
$addField[Message-Log Channel;$replaceText[$replaceText[$checkCondition[$getServerVar[messagelog]!=];true;<#$getServerVar[messagelog]>];false;Not Set];yes]
$addField[DeCancer-Log Channel;$replaceText[$replaceText[$checkCondition[$getServerVar[dclog]!=];true;<#$getServerVar[dclog]>];false;Not Set];yes]
$addField[Suggest-log Channel;$replaceText[$replaceText[$checkCondition[$getServerVar[suggestchannel]!=];true;<#$getServerVar[suggestchannel]>];false;Not Set];yes]
$addField[Level-Up-Log Channel;$replaceText[$replaceText[$checkCondition[$getServerVar[rch]!=];true;<#$getServerVar[rch]>];false;Not Set];yes]
$addField[Welcome Channel;$replaceText[$replaceText[$checkCondition[$getServerVar[wlcchn]!=];true;<#$getServerVar[wlcchn]>];false;Not Set];yes]

$footer[Requested by $userTag;$userAvatar]
$addTimestamp
`
})
