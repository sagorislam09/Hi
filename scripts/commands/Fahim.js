module.exports.config = {
    name: "Fahim",
    version: "1.0.0",
    permssion: 0,
    prefix:false,
    premium:false,
    credits: "fahim",
    description: "FAHIM",
    category: "no prefix",
    usages: "",
    cooldowns: 5
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ফাহিম")==0 || event.body.indexOf("Fahim")==0 || event.body.indexOf("FAHIM")==0 || event.body.indexOf("bd")==0) {
		var msg = {
				body: "আসসালামু আলাইকুম এই যে বাবু সোনা তুমি যে আমার বসকে ডাকছো আমার বস 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘_ ব্যাস্ত  আছে তোমার যদি কিছু বলার থাকে তাহলে আমার বস 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 _এর  ইনবক্সে নক করে রাখো সোনা _𝙸𝙽𝙱𝙾𝚇 𝙻𝙸𝙽𝙺 - m.me/100029901980367",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
