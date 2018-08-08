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
      attachment: 'https://downloader.disk.yandex.ru/preview/1cccd9f7a5126be56133589c58c036eb0dbd310e2f5e27d5b95bc86acd55e9a4/5b6b1dc0/_B0aXmp4RJTYYcc2mgnKlrmpH3rlZ_pkkratHtjudH_u8OZcReoJ1nn-XIbhq7MA4QZKY5x34Mg0QvIfpZ0LDw%3D%3D?uid=0&filename=Garuna.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
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
