module.exports = ({
name: "$alwaysExecute",
code: `$channelSendMessage[$channelID;{description:This command doesnt **exist!** ❌}{color:BLACK}{delete:10s}]
$onlyIf[$commandinfo[$replaceText[$message[1];$getServerVar[prefix];];name]==;]
$onlyIf[$stringStartsWith[$message;$getServerVar[prefix]]!=false;]`
})
