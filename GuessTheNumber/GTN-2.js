module.exports = ({
name: "guessthenumber",
aliases: ['gtn'],
code: `
$slowmode[$channelID;5s]
$setservervar[winnum;$random[$message[1];$message[2]]]
$setservervar[gtnchan;$channelid]
$setservervar[gtn;true]
$setservervar[n1;$message[1]]
$setservervar[n2;$message[2]]
$setservervar[gtnstatus;There is an ongoing game of GTN in <#$channelID>]
$author[Guess the number!;$servericon]
$title[Alrighty!]
$description[I have got the number in mind. I have DMed you the number.]
$color[BLUE]
$channelSendMessage[$channelID;✅ Guess the number has **Started!** The number is from __**$message[1] to $message[2]**__. Good luck **Eerybody!**]
$sendDM[$authorID;The Winning Number for Guess The Number is: **$random[$message[1];$message[2]]**
**__Why are you getting this DM?__**
You started a **Guess-The-Number Event** in **$servername**]
$onlyif[$isuserdmenabled==true;||Your DMs are disabled. but the number is $random[$message[1];$message[2]].|| Keep that number somewhere safe! {delete:3s}]
$onlyif[$message[1]<$message[2];❌ You have provided the wrong input, please make sure the first number is the min number and the second the max number.]
$onlyif[$message[2]>=5;The max number has to be at **least 5!**]
$onlyif[$checkcontains[$message;q;w;e;r;t;y;u;i;o;p;a;s;d;f;g;h;j;k;l;z;x;c;v;b;n;m]==false;You only need to use numbers as input.]
$argscheck[>2;Please provide a min number and a max number]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
$onlyif[$getservervar[gtn]==false;A Game is already Ongoing!]
`
})