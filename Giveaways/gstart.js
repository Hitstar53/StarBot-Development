module.exports = ({
name: "gstart",
code: `

$setUserVar[gawwinners;]
$setUserVar[gawid;]
$setUserVar[gawprize;]

$editMessage[$getUserVar[gawid];🎉**GIVEAWAY ENDED** 🎉{title:$getUserVar[gawprize]}{description:
Winner: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;Could not determine a winner];false;<@$randomText[$joinSplitText[;]]>]
Required Role: <@&$getUserVar[gawreq]>
Hosted by: <@$authorID>}{color:BLACK}{footer: Winners $getUserVar[gawwinners] | Ended at}{timestamp}]

$channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;There were no valid entries for the **$getUserVar[gawprize]** giveaway.];false;Congratulations <@$randomText[$joinSplitText[;]]> ! You have won the **$getUserVar[gawprize]** giveaway.]
https://discord.com/channels/$guildID/$channelID/$getUserVar[gawid]]
$textSplit[$replaceText[$getReactions[$channelID;$getUserVar[gawid];🎉;id];$clientID,;];,]
$onlyIf[$getUserVar[gawid]!=;]

$wait[$message[1]]

$setUserVar[gawwinners;$message[2]]
$setUserVar[gawid;$splitText[1]]
$setUserVar[gawprize;$messageSlice[2]]

$textSplit[$sendMessage[🎉**GIVEAWAY** 🎉{title:$messageSlice[3]}{description: React with 🎉 to enter!
Time remaining: **$message[1]**
Hosted by: <@$authorID>}{color:BLACK}{footer: Winners $message[2] | Started at}{timestamp}{reactions:🎉};yes]; ]

$onlyIf[$message[1]!=;**Syntax:** $getServerVar[prefix]gstart <time> <winners> <prize>]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
}) 