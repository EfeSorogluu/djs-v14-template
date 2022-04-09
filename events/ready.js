import { Client } from "discord.js"
import check_commands from "../utils/check_commands.js";

/**
 * 
 * @param {Client} client
 * 
 */


export default client => {
    client.once('ready', () => {
        console.log(`${client.user.tag} Hazır!`);
        check_commands(client);
        
        // Presence
        client.user.setPresence({ activities: [{ name: 'BURAYI DEGİSTİRİN (events/ready.js)', type:'PLAYING' }] });
    });
}