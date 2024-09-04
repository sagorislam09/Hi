const fs = require("fs");
module.exports.config = {
  name: "reply",
  version: "1.1.0",
  permission: 0,
  credits: "Fahim",
  description: "noprefix",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("i love you") ||
     react.includes("") || 
react.includes("") || react.includes("") || react.includes("") || react.includes("") ||
react.includes("xn") ||
react.includes("") || react.includes("") || react.includes("ভালবাসি") ||
react.includes("") ||
react.includes("") ||
react.includes("") ||
react.includes("") ||  
react.includes("") ||
react.includes("")) {
		var msg = {
				body: "-❒ 🤖 | 𝐌𝐄𝐒𝐒𝐄𝐆𝐄:\n╰┈➤ ভালোবাসা নামক আব্লামি করতে মন\n চাইলে বস 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 এর\n ইনবক্স চলে জাও-!!🌚\n                                             \n━━━━━━━━━━━━━━━━━━━\n✿◕𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑:\n𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘◕✿🌚\n━━━━━━━━━━━━━━━━━━━\n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 :\nhttps://www.facebook.com/profile.php?id=100029901980367"
 
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  } 
