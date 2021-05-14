module.exports = ({
name: "removenote",
aliases: "rn",
code: `
$if[$message[1]==1]
$setUserVar[note1;Not Set;$mentioned[1]]
$channelSendMessage[$channelID;Removed **Note#$message[1]** from **$userTag[$finduser[$message[2];yes]]**]

$elseIf[$message[1]==2]
$setUserVar[note2;Not Set;$mentioned[1]]
$channelSendMessage[$channelID;Removed **Note#$message[1]** from **$userTag[$finduser[$message[2];yes]]**]
$endelseIf

$elseIf[$message[1]==3]
$setUserVar[note3;Not Set;$mentioned[1]]
$channelSendMessage[$channelID;Removed **Note#$message[1]** from **$userTag[$finduser[$message[2];yes]]**]
$endelseIf

$elseIf[$message[1]==4]
$setUserVar[note4;Not Set;$mentioned[1]]
$channelSendMessage[$channelID;Removed **Note#$message[1]** from **$userTag[$finduser[$message[2];yes]]**]
$endelseIf

$elseIf[$message[1]==5]
$setUserVar[note5;Not Set;$mentioned[1]]
$channelSendMessage[$channelID;Removed **Note#$message[1]** from **$userTag[$finduser[$message[2];yes]]**]
$endelseIf

$elseIf[$message[1]==6]
$setUserVar[note6;Not Set;$mentioned[1]]
$channelSendMessage[$channelID;Removed **Note#$message[1]** from **$userTag[$finduser[$message[2];yes]]**]
$endelseIf

$elseIf[$message[1]==7]
$setUserVar[note7;Not Set;$mentioned[1]]
$channelSendMessage[$channelID;Removed **Note#$message[1]** from **$userTag[$finduser[$message[2];yes]]**]
$endelseIf

$elseIf[$message[1]==8]
$setUserVar[note8;Not Set;$mentioned[1]]
$channelSendMessage[$channelID;Removed **Note#$message[1]** from **$userTag[$finduser[$message[2];yes]]**]
$endelseIf

$elseIf[$message[1]==9]
$setUserVar[note9;Not Set;$mentioned[1]]
$channelSendMessage[$channelID;Removed **Note#$message[1]** from **$userTag[$finduser[$message[2];yes]]**]
$endelseIf

$elseIf[$message[1]==10]
$setUserVar[note10;Not Set;$mentioned[1]]
$channelSendMessage[$channelID;Removed **Note#$message[1]** from **$userTag[$finduser[$message[2];yes]]**]
$endelseIf

$elseIf[$message[1]==11]
$setUserVar[note11;Not Set;$mentioned[1]]
$channelSendMessage[$channelID;Removed **Note#$message[1]** from **$userTag[$finduser[$message[2];yes]]**]
$endelseIf

$elseIf[$message[1]==12]
$setUserVar[note12;Not Set;$mentioned[1]]
$channelSendMessage[$channelID;Removed **Note#$message[1]** from **$userTag[$finduser[$message[2];yes]]**]
$endelseIf
$endif
$onlyif[$message[1]!=;**Syntax:** $getServerVar[prefix]removenote <no.> <@user>]
$onlyForRoles[$getServerVar[gawmanager];You need a **Giveaway Manager role** to use this. To set it up do \`$getServerVar[prefix]grole\` ]
`
})