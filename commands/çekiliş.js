const Command = require("../base/Command.js");
const Discord = require("discord.js")
const { MessageButton } = require("discord-buttons");
class cekilis extends Command {
    constructor(client) {
        super(client, {
            name: "cekilis",
            aliases: ["cekilis"]
        });
    }

    async run(message, args, client) {
        if(!this.client.config.botOwners.includes(message.author.id)) return


 let button7 = new MessageButton()
 .setStyle("green")
 .setID("Etkinlik")
 .setLabel("🎉 Etkinlik Katılımcısı")

 let button6 = new MessageButton()
 .setStyle("red")
 .setID("Çekiliş")
 .setLabel("🎉 Çekiliş Katılımcısı")


 message.channel.send(" Merhaba **SUNUCU_İSMİ_GİREBİLİRSİN** üyeleri,                                                                                                                                                                             Çekiliş katılımcısı alarak **Nitro** , **Spotify** , **Netfilix** , **Exxen** gibi çeşitli ödüllerin sahibi olabilirsiniz.                                                                                                                                                                                                                                                                                           Etkinlik katılımcısı alarak çeşitli etkinliklerin yapıldığı anlarda herkesten önce haberdar olabilirsiniz ve çekilişlere önceden katılma hakkı kazanabilirsiniz..                                                                                                                                                                      __Aşağıda ki butonlara basarak siz de bu ödülleri kazanmaya hemen başlayabilirsiniz!__",{
     buttons: [button7, button6] 
 })
 
}

}
module.exports = cekilis;
 