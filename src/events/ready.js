module.exports = {
    name: 'ready',
    execute(client) {
      console.log(`Le bot ${client.user.tag} est en ligne ✅`);
      client.user.setActivity('play.iraniamc.fr', { type: 'PLAYING' });
      client.user.setStatus('idle');
    },
  };
  
