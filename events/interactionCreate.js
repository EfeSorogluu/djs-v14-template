import { Client } from "discord.js";

/**
 * 
 * @param {Client} client
 * 
 */


export default client => {

    const embed = client.embed

    client.on('interactionCreate', interaction => {
        if(!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if(!command) return;
        //Perm Control
        if(command.data.permission && !interaction.member.permissions.has(command.data.permission)) return interaction.send({ 
            embeds: [embed(`Bu komutu kullanmak için \`${command.data.permissions}\` yetkisine sahip olmalısınız!`, `RED`)]
         })

        // Command Execute
        try {
            command.data.execute(interaction);
        } catch (e) {
            console.log(e)
            interaction.reply({ embeds: [embed(`Komut çalıştırılırken bir hata oluştu!`, `RED`, 'HATA!')], ephemeral: true });
        }
    })
}