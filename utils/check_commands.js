import { Client } from "discord.js";
import register_commands from "./register_commands.js";

/**
 * 
 * @param {Client} client
 * 
 */

export default client => {
    client.guilds.cache.forEach(async guild => {
        const command = (await guild.commands.fetch().catch(e => {  })) || client.commands.size

        if(command.size != client.commands.size ) {
            register_commands(guild);
        };
    });
}