const { EmbedBuilder, } = require('discord.js');
const { version } = require('../../package.json')

module.exports = { 
    config: {
        name: "ping",
        aliases: ["ping", "p"],
        description: "Pause song in queue!",
        accessableby: "Member",
        category: "Music",
    },
    run: async (client, message, args) => {
        let msg = await message.channel.send({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({ name: 'กรุณารอสักครู่'})
                    .setDescription(`กำลังโหลด`)
                    .setColor("#008000")
                    .setTimestamp()
            ]
        })
        const ping = new EmbedBuilder()
            .setAuthor({ name: '📊 Botปิงตอนนี้'})
            .setDescription(`ปิงจากเครืองของบอท ${client.ws.ping}ms`)
            .setColor("#008000")
            .setTimestamp()


        setTimeout(function () {
            msg.edit({ embeds: [ping] });
        }, 1 /* ปรับดีเลย์เอาเอง หรือไม่ต้องใส่;ก็ได้*/);
    }
};