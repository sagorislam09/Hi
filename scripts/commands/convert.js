module.exports.config = {
    name: "convert",
    version: "1.0.0",
    permission: 0,
    credits: "Nayan",
    prefix: true,
    description: "",
    category: "user",
    usages: "",
    cooldowns: 0
};
module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  try{
 const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
var audioss = []
  var audio = args.join(" ") || event.messageReply.attachments[0].url;
    var { data } = await axios.get(audio ,{  method: 'GET',  responseType: 'arraybuffer' });
                fs.writeFileSync(__dirname + "/cache/vdtoau.m4a", Buffer.from(data, 'utf-8'));
  audioss.push(fs.createReadStream(__dirname + "/cache/vdtoau.m4a"));
    var msg = { body : "𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝙰𝚁𝚈𝙰𝙽 𝙼𝙿𝟹 𝚂𝙾𝙽𝙶 ️🎶\n𝙰𝚁𝚈𝙰𝙽 𝙼𝙸𝙳𝙴𝙰", attachment: audioss}
  api.sendMessage(msg, event.threadID, event.messageID)
} catch(e){
    console.log(e)
}
      }
