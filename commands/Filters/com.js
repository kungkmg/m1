const { EmbedBuilder, version } = require('discord.js');
const os = require('os');

module.exports = {
    config: {
        name: "com",
        description: "Turn on 3d filter",
        category: "Filters",
        accessableby: "Member"
    },
run: async (client, message, args, track) => {
        let msg = await message.channel.send({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({ name: 'กรุณารอสักครู่'})
                    .setDescription(`รอแปปนะครับตอนนี้กำลังเชื่อมต่อapi`)
                    .setColor("#008000")
                    .setTimestamp()
            ]
        })
        const cpuModel = os.cpus()[0].model;
        const numCores = os.cpus().length;
        const cpu = new EmbedBuilder()
            .setAuthor({ name: 'ยินดีตอนรับเข้าดิสเพื่อแจ้งปัญญา'})
            .setDescription(`discord | https://discord.gg/VdD5jnHMwY | https://discord.gg/aNN79Syc3u
            **ระบบที่บอทใช้📊** 
            ผู้ใช้ : ${client.users.cache.size}
            prefix : ${client.prefix} 
            discord : ${version}
            ปิงจากเน็ต : ${client.ws.ping}ms
            **เกี่ยวกับเครืองของบอท📊**
            ห้องที่บอทสามาถหาได้: ${client.channels.cache.size}
            server : ${client.guilds.cache.size}
            CPU : ${cpuModel} x${numCores}
            Nodeที่บอทใช้ : ${process.version}
             `)
            .setColor("#008000")
            .setTimestamp()

           
            

    
        setTimeout(function () {
            msg.edit({ embeds: [cpu] });
        }, 20 );
    }
}
