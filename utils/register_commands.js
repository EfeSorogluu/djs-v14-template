import { REST } from "@discordjs/rest";
import { EmbedBuilder, Guild } from "discord.js";
import { Routes } from "discord-api-types/v10";


/**
 * 
 * @param {Guild} guild
 * 
 */



export default async guild => {
    const { client } = guild;

    const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

    const body = client.commands.map(command => command.slash_data);
    
    try {
        
        await rest.put(
            Routes.applicationGuildCommands(client.user.id, guild.id),
            { body }
        )

    } catch (e) {
        if(e.code == 50001) {
            const embed = new EmbedBuilder()
                .setColor('Red')
                .setDescription('Komutlar başarılı bir şekilde kayıt edilemedi lütfen [buraya](https://discord.com/api/oauth2/authorize?client_id=961957974513942578&permissions=8&scope=bot%20applications.commands) tıklayarak tekrardan ekleyiniz!')

            const owner = await guild.fetchOwner();

            owner.send({ embeds: [embed] }).catch(() => {  });
        }
    }
}