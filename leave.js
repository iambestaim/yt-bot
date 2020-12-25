module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("A hangcsatornában kell legyél, hogy le tudd állítani");
        await voiceChannel.leave();
        await message.channel.send('Kiléptem :smiling_face_with_tear:')
 
    }
}