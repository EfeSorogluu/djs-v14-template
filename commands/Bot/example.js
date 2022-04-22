import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder, CommandInteraction } from 'discord.js';

export const data = {
    name: '',
    description: '',
    /**
    *
    * @param {CommandInteraction} interaction
    *
    */
   execute(interaction) {

   }
}
export const slash_data = new SlashCommandBuilder()
    .setDescription(data.description)
    .setName(data.name)