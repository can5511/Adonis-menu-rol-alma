const Command = require("../base/Command.js");
const Discord = require("discord.js")
const { MessageMenuOption,  MessageMenu, MessageActionRow } = require("discord-buttons");
class renk extends Command {
    constructor(client) {
        super(client, {
            name: "renk",
            aliases: ["renk"]
        });
    }

    async run(message, args, client) {

        if(!this.client.config.botOwners.includes(message.author.id)) return

        const adonis = new MessageMenuOption()
        .setLabel('Kırmızı')
        .setEmoji('🔴')
        .setValue('red')
        .setDescription('Kırmızı')
  
        const adonis1 = new MessageMenuOption()
        .setLabel('Sarı')
        .setEmoji('🟡')
        .setValue('yellow')
        .setDescription('Sarı')

        const adonis2 = new MessageMenuOption()
        .setLabel('Yeşil')
        .setEmoji('🟢')
        .setValue('green')
        .setDescription('Yeşil')

        const adonis3 = new MessageMenuOption()
        .setLabel('Mavi')
        .setEmoji('🔵')
        .setValue('blue')
        .setDescription('Mavi')

        const adonis4 = new MessageMenuOption()
        .setLabel('Turuncu')
        .setEmoji('🟠')
        .setValue('orange')
        .setDescription('Turuncu')

        const adonis5 = new MessageMenuOption()
        .setLabel('Mor')
        .setEmoji('🟣')
        .setValue('purple')
        .setDescription('Mor')
        
    const select = new MessageMenu()
        .setID('select1')
        .setPlaceholder('Renk rolünüzü seçin')
        .addOption(adonis)
        .addOption(adonis1)
        .addOption(adonis2)
        .addOption(adonis3)
        .addOption(adonis4)
        .addOption(adonis5)
  
  
     const Row1 = new MessageActionRow()
     .addComponent(select)   
    
    await message.channel.send('🎨 **VERONİCA** Taglılara özel renk rollerimiz', { components: [Row1] });
}

}
module.exports = renk;
