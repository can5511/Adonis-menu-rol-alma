const Command = require("../base/Command.js");
const Discord = require("discord.js")
const { MessageMenuOption,  MessageMenu, MessageActionRow } = require("discord-buttons");
class oyun extends Command {
    constructor(client) {
        super(client, {
            name: "burc",
            aliases: ["burc"]
        });
    }

    async run(message, args, client) {
        if(!this.client.config.botOwners.includes(message.author.id)) return


        const adonis = new MessageMenuOption()
        .setLabel('♈Koç')
        .setEmoji('♈')
        .setValue('koç')
        .setDescription('Koç')
  
        const adonis1 = new MessageMenuOption()
        .setLabel('♉Boğa')
        .setEmoji('♉')
        .setValue('boğa')
        .setDescription('Boğa')

        const adonis2 = new MessageMenuOption()
        .setLabel('♊İkizler')
        .setEmoji('♊')
        .setValue('ikizler')
        .setDescription('İkizler')

        const adonis3 = new MessageMenuOption()
        .setLabel('♋Yengeç')
        .setEmoji('♋')
        .setValue('yengeç')
        .setDescription('Yengeç')

        const adonis4 = new MessageMenuOption()
        .setLabel('♌Aslan')
        .setEmoji('♌')
        .setValue('aslan')
        .setDescription('Aslan')

        const adonis5 = new MessageMenuOption()
        .setLabel('♍Başak')
        .setEmoji('♍')
        .setValue('başak')
        .setDescription('Başak')

        const adonis6 = new MessageMenuOption()
        .setLabel('♎Terazi')
        .setEmoji('♎')
        .setValue('terazi')
        .setDescription('Terazi')

        const adonis7 = new MessageMenuOption()
        .setLabel('♏Akrep')
        .setEmoji('♏')
        .setValue('akrep')
        .setDescription('Akrep')

        const adonis8 = new MessageMenuOption()
        .setLabel('♐Yay')
        .setEmoji('♐')
        .setValue('yay')
        .setDescription('Yay')

        const adonis9 = new MessageMenuOption()
        .setLabel('♑Oğlak')
        .setEmoji('♑')
        .setValue('oğlak')
        .setDescription('Oğlak')

        const adonis10 = new MessageMenuOption()
        .setLabel('♒Kova')
        .setEmoji('♒')
        .setValue('kova')
        .setDescription('Kova')

        const adonis11 = new MessageMenuOption()
        .setLabel('♓Balık')
        .setEmoji('♓')
        .setValue('balık')
        .setDescription('Balık')

        
    const select = new MessageMenu()
        .setID('select1')
        .setPlaceholder('Burç rollerinizi seçin')
        .addOption(adonis)
        .addOption(adonis1)
        .addOption(adonis2)
        .addOption(adonis3)
        .addOption(adonis4)
        .addOption(adonis5)
        .addOption(adonis6)
        .addOption(adonis7)
        .addOption(adonis8)
        .addOption(adonis9)
        .addOption(adonis10)
        .addOption(adonis11)
        

  
  
     const Row1 = new MessageActionRow()
     .addComponent(select)   
    
    await message.channel.send('⚖️ **Burç rollerini seç**', { components: [Row1] });
}

}
module.exports = oyun;
