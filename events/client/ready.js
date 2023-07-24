const { Client } = require("discord.js");


module.exports = async (client) => {
    console.log(`กำลังล็อกลิน - ${client.user.username} (${client.user.id}) นะค่ะ/ครับ[✅]`);

    const activity = {
        name: `${client.prefix}play <songs>[✅]`,
        type: 1,
    };
client.user.setPresence({ 
    activities: [activity], 
    status: 'online', 
    afk: true,
});
};
