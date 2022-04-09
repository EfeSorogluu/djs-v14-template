import { Client } from "discord.js"
import register_commands from "../utils/register_commands.js"

/**
 * 
 * @param {Client} client
 * 
 */


export default client => {
    client.on('guildCreate', (guild) => {
        register_commands(guild);
    });
};