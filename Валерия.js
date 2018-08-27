const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var prefix = '!'
 
 client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'ek')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
		message.channel.sendMessage('<:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> @everyone <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> \n Идёт набор на ежедневную катку!');
	 }
	 if(message.content.startsWith(prefix + 'turnir')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
		message.channel.sendMessage('<:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> @everyone <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> \n Идёт набор на турнир! Успей встать в очередь на поражение!');
	 }
	  if(message.content.startsWith(prefix + 'kubek')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
		message.channel.sendMessage('<:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> @everyone <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> \n Граждане Имперского города! Делайте ваши ставки! Кто победит в ежедневной катке!? \n Кликайте по иконке претендента!');
	 }
	 if(message.content.startsWith(prefix + 'kubtur')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
		message.channel.sendMessage('<:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> @everyone <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> \n Граждане Имперского города! Делайте ваши ставки! Кто победит в сегодняшнем турнире!? \n Кликайте по иконке претендента!');
	 }
	  if(message.content.startsWith(prefix + 'say')) {
    const args = message.content.slice(prefix.length).split('say'); 
	  message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
     		message.channel.sendMessage(message.content.slice(prefix.length).split('say'));
	 }
// Арты победителя
if(message.content.startsWith(prefix + 'hero')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
message.channel.send({
  embed: {
    thumbnail: {
         url: 'attachment://file.png'
      }
   },
   files: [{
      attachment: 'https://downloader.disk.yandex.ru/preview/f1de911a22cf33505c1b9a5b211db0a188816bbcb4be50d54de5dc84911d93d0/5b843203/_B0aXmp4RJTYYcc2mgnKlojIQE20dw3ZM3wPIoLM89MWUyz9NxlGInOlHyA75MssFHSsHk-CNR6lT7_ARQTZMw%3D%3D?uid=0&filename=Talanar.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Win hero.png'
   }]
})
.then(console.log)
.catch(console.error);
}
//Карта
if(message.content.startsWith(prefix + 'map')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
message.channel.send({
  embed: {
    thumbnail: {
         url: 'attachment://file.h5m'
      }
   },
   files: [{
      attachment: 'https://github.com/NorthTort/Valeria/raw/master/Tri%20Dorogi.h5m',
      name: 'Tri Dorogi.h5m'
   }]
})
.then(console.log)
.catch(console.error);
}

let messageArray = message.content.split(" ");
let args = messageArray.slice(1);    
    if(message.content.startsWith(prefix + 'calc')) {
const sayMessage1 = args.join(" ");
        message.channel.send(eval(sayMessage1))
     } 
 
 });

client.on('guildMemberAdd', member => {
    member.guild.channels.get('432864200864301059').send('<:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> **' + member.user + '**, приветствую тебя, Воин! <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> \n Прочти правила сервера, чтобы не налажать: <#464435496773484554>.'); 
	});


client.on('guildMemberRemove', member => {
    member.guild.channels.get('432864200864301059').send('<:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> **' + member.user + '**, беги! Жалкий трус! <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778>');
    // channel-id - Надо вводить ид канала куда будет писаться это сообщение
});

client.login(process.env.BOT_TOKEN);
