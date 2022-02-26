const Command = require("../base/Command.js");
const Discord = require("discord.js")
const { MessageMenuOption,  MessageMenu, MessageActionRow } = require("discord-buttons");
class iliski extends Command {
    constructor(client) {
        super(client, {
            name: "iliski",
            aliases: ["iliski"]
        });
    }

    async run(message, args, client) {
        if(!this.client.config.botOwners.includes(message.author.id)) return


        const adonis = new MessageMenuOption()
        .setLabel('Sevgilim Var')
        .setEmoji('💍')
        .setValue('lovers')
        .setDescription('Sevgilim Var')
  
        const adonis1 = new MessageMenuOption()
        .setLabel('Sevgilim Yok')
        .setEmoji('💔')
        .setValue('unlovers')
        .setDescription('Sevgilim Yok')
        
        const adonis2 = new MessageMenuOption()
        .setLabel('Lgbt')
        .setEmoji('🌈')
        .setValue('lgbt')
        .setDescription('Lgbt')

           const adonis3 = new MessageMenuOption()
        .setLabel('Rolleri kaldırmak için seçin')
        .setValue('norole')
        .setDescription('Rolleri kaldırmak için seçin')
        
        
    const select = new MessageMenu()
        .setID('select1')
        .setPlaceholder('İlişki Durumunuzu seçin')
        .addOption(adonis)
        .addOption(adonis1)
        .addOption(adonis2)
        .addOption(adonis3)
  
  
     const Row1 = new MessageActionRow()
     .addComponent(select)   
    
    await message.channel.send('💘**İlişki Durumunuzu seçin**', { components: [Row1] });
}

}
module.exports = iliski;
