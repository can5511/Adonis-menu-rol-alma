const Command = require("../base/Command.js");
const Discord = require("discord.js")
const { MessageMenuOption,  MessageMenu, MessageActionRow } = require("discord-buttons");
class oyun extends Command {
    constructor(client) {
        super(client, {
            name: "oyun",
            aliases: ["oyun"]
        });
    }

    async run(message, args, client) {
        if(!this.client.config.botOwners.includes(message.author.id)) return


        const adonis = new MessageMenuOption()
        .setLabel('Among Us')
        .setEmoji('๐ฎ')
        .setValue('amongus')
        .setDescription('Among Us')
  
        const adonis1 = new MessageMenuOption()
        .setLabel('League of Legends')
        .setEmoji('๐ฎ')
        .setValue('lol')
        .setDescription('League of Legends')

        const adonis2 = new MessageMenuOption()
        .setLabel('Counter Strike')
        .setEmoji('๐ฎ')
        .setValue('cs')
        .setDescription('Counter Strike')

        const adonis3 = new MessageMenuOption()
        .setLabel('Minecraft')
        .setEmoji('๐ฎ')
        .setValue('minecraft')
        .setDescription('Minecraft')

        const adonis4 = new MessageMenuOption()
        .setLabel('Fortnite')
        .setEmoji('๐ฎ')
        .setValue('fortnite')
        .setDescription('Fortnite')

        const adonis5 = new MessageMenuOption()
        .setLabel('Grand Theft Auto V')
        .setEmoji('๐ฎ')
        .setValue('gta')
        .setDescription('Grand Theft Auto V')

        const adonis6 = new MessageMenuOption()
        .setLabel('Rust')
        .setEmoji('๐ฎ')
        .setValue('rust')
        .setDescription('Rust')
        
    const select = new MessageMenu()
        .setID('select1')
        .setPlaceholder('Oyun rollerinizi seรงin')
        .addOption(adonis)
        .addOption(adonis1)
        .addOption(adonis2)
        .addOption(adonis3)
        .addOption(adonis4)
        .addOption(adonis5)
        .addOption(adonis6)
  
  
     const Row1 = new MessageActionRow()
     .addComponent(select)   
    
    await message.channel.send('๐ฎ**Oyun rollerini seรง**', { components: [Row1] });
}

}
module.exports = oyun;
