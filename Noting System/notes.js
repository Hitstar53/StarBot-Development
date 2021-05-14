module.exports = ({
name: "notes",
code: `
$title[Notes]
$author[$username;$authorAvatar]
$color[BLACK]

$addField[Note #1;$getUserVar[note1;$mentioned[1]];yes]
$addField[Note #2;$getUserVar[note2;$mentioned[1]];yes]
$addField[Note #3;$getUserVar[note3;$mentioned[1]];yes]
$addField[Note #4;$getUserVar[note4;$mentioned[1]];yes]
$addField[Note #5;$getUserVar[note5;$mentioned[1]];yes]
$addField[Note #6;$getUserVar[note6;$mentioned[1]];yes]
$addField[Note #7;$getUserVar[note7;$mentioned[1]];yes]
$addField[Note #8;$getUserVar[note8;$mentioned[1]];yes]
$addField[Note #9;$getUserVar[note9;$mentioned[1]];yes]
$addField[Note #10;$getUserVar[note10;$mentioned[1]];yes]
$addField[Note #11;$getUserVar[note11;$mentioned[1]];yes]
$addField[Note #12;$getUserVar[note12;$mentioned[1]];yes]

$footer[Remember to keep your notes clean!]
$addTimestamp
$onlyif[$mentioned[1]!=;Mention someone!]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})