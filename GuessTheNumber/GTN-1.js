module.exports = ({
name: "winningnumber",
aliases: "wnb",
code: `
$deleteIN[5s]
$title[Winning Number]
$color[BLACK]
$description[The winning number for GTN is: **$getservervar[winnum]**]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})