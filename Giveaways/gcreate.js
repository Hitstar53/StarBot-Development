module.exports = ({
name: "gcreate",
code: `
In development.....
$onlyIf[$jsonRequest[https://normal-api.ml/topgg/hasvoted?bot=$clientID&user=$authorID&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgxMzMxMzMzMjI0OTEwMDMyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjIzMDQyMDc2fQ.7VuHSimgi2N_TVkRwER1GrEQz74dFZspq-tZi-QgrCw;voted;you haven't voted bruh]==true;{description:This is a **Voter-only** feature, If you want to use this command kindly vote for star bot [here](https://top.gg/bot/813313332249100329/vote)}{color:BLACK}]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
`
})