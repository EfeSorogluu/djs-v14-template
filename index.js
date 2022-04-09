import { Client, Collection } from "discord.js";
import { readdirSync } from 'fs';
import 'dotenv/config';

const client = new Client({
    intents: ["Guilds", "MessageContent"],
});

client.commands = new Collection();
client.embed = await import("./utils/embed.js").then(m => m.default);


// Event Loader

readdirSync('./events').forEach(async file => {
    const event = await import(`./events/${file}`).then(e => e.default);
    event(client);
});

// Command Loader

readdirSync('./commands').forEach(category => {
    readdirSync(`./commands/${category}`).forEach(async file => {
        const command = await import(`./commands/${category}/${file}`).then(c => c)
        client.commands.set(command.data.name, command)
    });
});



client.login(process.env.TOKEN)