module.exports = (client, member) => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'testing-js');
  if (!channel) return;
  channel.send(`${member.user.tag} has joined **${member.guild}** discord server!`)
}
