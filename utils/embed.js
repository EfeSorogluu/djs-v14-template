import { EmbedBuilder } from "discord.js"

export default (description, color = "#5f7fcf", title) => {

    if(color == "RED") color = 'Red'
    else if (color = "GREEN") color = 'Green'
    else if (color = "INFO") color = '#dbd160'

    const response = new EmbedBuilder()
        .setDescription(description)
        .setColor(color)
        .setTitle(title)

    return response
}