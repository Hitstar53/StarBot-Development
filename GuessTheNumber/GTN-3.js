module.exports = ({
name: "$alwaysExecute",
code: `
$setservervar[winnum;Ended. start again with the gtn command.]
$setglobaluserVar[gtnwins;$sum[$getglobaluserVar[gtnwins];1]]
$setservervar[gtntries;0]
$setservervar[gtnstatus;Currently there are no active GTNs.]
$setservervar[gtn;false]
$slowmode[$getservervar[gtnchan];0s]
$title[$randomText[Winner Winner, chicken dinner.;Well well well.;We have a winner!;Congratulations!;You have won the GTN Event.;Woah, great job!;We're proud of you;Guess The Number has ended.;GTN;Woop woop.]]
$description[Looks like we have a winner..]
$addField[Correct Number;$getservervar[winnum];yes]
$addField[Winner;$usertag;yes]
$addField[Tries;$getServerVar[gtntries];yes]
$color[ORANGE]
$thumbnail[$authoravatar]
$footer[Guess The Number! +1 gtn wins added. Check stats with the gtnStats command!]
$onlyif[$message[1]==$getservervar[winnum];❌ Wrong number **$usertag,** it's not **$message**!]
$setServerVar[gtntries;$sum[$getServerVar[gtntries];1]]
$setglobaluserVar[gtnattempts;$sum[$getglobaluserVar[gtnattempts];1]]
$onlyif[$message[1]>=$getservervar[n1];The number is a random number from **$getservervar[n1] to $getservervar[n2].** You provided a number **smaller** than $getservervar[n1].]
$onlyif[$message[1]<=$getservervar[n2];The number is a random number from **$getservervar[n1] to $getservervar[n2].** You provided a number **bigger** than $getservervar[n2].]
$onlyif[$getservervar[winnum]!=Ended. start again with the gtn command.;Looks like the last gtn has ended, you will have to get a staff to re-set it up.]
$onlyif[$isNumber[$message]==true;❌ Please only enter a number. **This is a Guess The Number Channel.**]
$onlyif[$channelid==$getservervar[gtnchan];]
$onlyIf[$getservervar[gtn]==true;]
`
})