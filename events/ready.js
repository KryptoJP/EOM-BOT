module.exports = (client, message) => {
  client.user.setActivity('NF - PAID MY DUES', { type: 'LISTENING'});
    console.log(`Logged in as ${client.user.tag}!`);
};
