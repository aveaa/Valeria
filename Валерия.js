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
	 if(message.content.startsWith(prefix + 'anime')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
		message.channel.sendMessage('<:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> @everyone <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> \n Штайнер жмотит хентай!');
	 }
	  if(message.content.startsWith(prefix + 'say')) {
    const args = message.content.slice(prefix.length).split('say'); 
	  message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
     		message.channel.sendMessage(message.content.slice(prefix.length).split('say'));
	 }
// Арты победителей
// Академия Волшебства
if(message.content.startsWith(prefix + 'djalib')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/f1dfba7a5195e0150e8d88876a2303e1e696aa0607655606b81645d7c0bf244e/5b5c1574/_B0aXmp4RJTYYcc2mgnKliqlFqb3V9vhamPlRlyisAlUKQAMdaNljKlmFMHAipEzVaH7kXIRF-M82VAHLnVIAQ%3D%3D?uid=0&filename=Djalib.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Djalib.png'
   }]
})
.then(console.log)
.catch(console.error);
}

if(message.content.startsWith(prefix + 'ora')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/10fea3c62c98a19194edd1163f1371c43270014c5b7b9af276beb92d086c3c68/5b5c1ab3/_B0aXmp4RJTYYcc2mgnKljprmRiLvgtEicVN2OFkU-7ZqY5B_XV6fSqFZDDBbCP6ojwvWgKBBY2A3jV_Hy63jg%3D%3D?uid=0&filename=Ora.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Ora.png'
   }]
})
.then(console.log)
.catch(console.error);
}

if(message.content.startsWith(prefix + 'razzak')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/d963d4ecf37dc7d3d18e5c08bddf25ffbb8e91805be682b2255e8491a2851fed/5b5c1c06/_B0aXmp4RJTYYcc2mgnKlljREa-Bp0QBiz-RTq9Qt_EfGXDau3AcMuTu_6iWtHzBt38VvJzSYxje_jIADkbZWQ%3D%3D?uid=0&filename=Razzak.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Razzak.png'
   }]
})
.then(console.log)
.catch(console.error);
}

if(message.content.startsWith(prefix + 'hafiz')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/7de1e8b62a79c43b3281da4acf9daa59f41fce417ccdadc2ca66e268c6aafc32/5b5c1c64/_B0aXmp4RJTYYcc2mgnKlgD9fWRLaVLvfrH0I6FQitupboeV_7fXH6qfEf143CKsvQey7-8AxTpIu0FLFbFNdA%3D%3D?uid=0&filename=Hafiz.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Hafiz.png'
   }]
})
.then(console.log)
.catch(console.error);
}
// Великая Орда

if(message.content.startsWith(prefix + 'haggesh')) {
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
      attachment: 'https://yadi.sk/i/Sy2yxEQc3ZepGE',
      name: 'Haggesh.png'
   }]
})
.then(console.log)
.catch(console.error);
}

if(message.content.startsWith(prefix + 'krag')) {
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
      attachment: 'https://psv4.userapi.com/c834500/u40777116/docs/d14/1e9ce5806e76/Krag.png?extra=5nYM9h_jTPBiwEWpbjk8L6Utn-jXar5sbb0LrHgugMYD64f6ZFRDx45d9Cw0Ww_-AKSLohm7HyI0lq6fmSGMmDshQXRgqL_TNwkfJUSfmhh2ismPZCXnQ2DIntk3mmEdg3xDw4E_',
      name: 'Krag.png'
   }]
})
.then(console.log)
.catch(console.error);
}

if(message.content.startsWith(prefix + 'shak')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/4eb1c62ffc4685f820abea3b7199ee77691f6156b460be776fdb19cfb05624f8/5b5c1f51/_B0aXmp4RJTYYcc2mgnKlmZrPMPqBDJTjveOqRsM_znjQWdJ-s9qohBbDJ6f0E0_nccReKOr0slRp_FHk-xB4g%3D%3D?uid=0&filename=Shak%27Karrukat.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'ShakKarrukat.png'
   }]
})
.then(console.log)
.catch(console.error);
}
	
if(message.content.startsWith(prefix + 'argat')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/d21b01e820b5f05dcec105da217c76da5d872588eaaeb6994cfb532532f3582f/5b5c1fee/_B0aXmp4RJTYYcc2mgnKlqkAn_shecJ8ZSU1qW2472F_heQKq0lGISObLvcpywmGgAyT7xgajA1n7P4dItbklA%3D%3D?uid=0&filename=Argat.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Argat.png'
   }]
})
.then(console.log)
.catch(console.error);
}
 
if(message.content.startsWith(prefix + 'tilsek')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/da5fdcf9823efdd3e1d29fc0eb5d7f3af37ac4711363f7dfbb3df0119d089c47/5b5c2075/_B0aXmp4RJTYYcc2mgnKlvCKM8VFkUEhPQxg-d0q-6vLaRTNd8styNN0UbuRem1O30SaqvXBmvRC3LBjL0g2VA%3D%3D?uid=0&filename=Tilsek.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Tilsek.png'
   }]
})
.then(console.log)
.catch(console.error);
}
//Инферно
if(message.content.startsWith(prefix + 'deleb')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/84236612f01f0ac82ea67e508dac9e8a6e3dbc3461fe9a2e90eb2ad57a23ad0c/5b5c22dd/_B0aXmp4RJTYYcc2mgnKltizf0lfDj5eYsLMqmGqj43b1MZnSW6mGDnP41B9jgG87w7j1jFimIb7Lhb5fxU6Vw%3D%3D?uid=0&filename=Deleb.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Deleb.png'
   }]
})
.then(console.log)
.catch(console.error);
}

if(message.content.startsWith(prefix + 'djezebet')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/53e0f0ea9b03c9a0be043e24357a8ba16852b348fdf88b4338e2435bc59a80da/5b5c2338/_B0aXmp4RJTYYcc2mgnKllASZQM5jX1u5aLDjsjhYD6tfuRYkGAAzYjUT20rVJwCYalHEGvrvs-J4kx7RKf0AA%3D%3D?uid=0&filename=Djezebet.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Djezebet.png'
   }]
})
.then(console.log)
.catch(console.error);
}
//Лесной Союз

if(message.content.startsWith(prefix + 'vinrael')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/89a955c3b6ff2a180a78adb26d844983aafe9a32a60a3fc3be1c79a62cbb227a/5b5c24d3/_B0aXmp4RJTYYcc2mgnKluOcn-5iBOhP-9h0kGRSKv-3NdsWe9y8fZujskxej9v-qu8q6OQpLh7Knynr51DWuw%3D%3D?uid=0&filename=Vinrael.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Vinrael.png'
   }]
})
.then(console.log)
.catch(console.error);
}

if(message.content.startsWith(prefix + 'gilraen')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/24844fd6b0cc6e6e58b6d168c629295f5dc4cf0424d387750c9755925786787d/5b5c255f/_B0aXmp4RJTYYcc2mgnKlp5L5jJ0HGaEMwjeWNjvN1RApLp5WlXHjNwV-rgPR2T8wJ5EE2iiYATitKYvrExsMQ%3D%3D?uid=0&filename=Gilraen.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'gilraen.png'
   }]
})
.then(console.log)
.catch(console.error);
}

if(message.content.startsWith(prefix + 'ilfina')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/dcea723e69dcd21735ceb01e9b9d0d22c3e9cc2e8998c29d1e960a5e3a1b5ccf/5b5c25bc/_B0aXmp4RJTYYcc2mgnKlmvVp8Q2Zm0gAs1LPHp-Pw7bVXjG3LK2kG0oRXJqK8iHdxRZU2PVoGYjs3GWMlIVUQ%3D%3D?uid=0&filename=Ilfina.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Ilfina.png'
   }]
})
.then(console.log)
.catch(console.error);
}
//Лига Теней
if(message.content.startsWith(prefix + 'letos')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/13ac746f5e39679ac70aa0563ae2b7d5cbed24c624971b3a4aff6d3e6b51445a/5b5c279e/_B0aXmp4RJTYYcc2mgnKlvjUJXj55SHXbsUq2X8_Q_G1ieLMzC137pmUj3vBCtn2JMTjcXFO1209LR-x2hXo_g%3D%3D?uid=0&filename=Letos.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Letos.png'
   }]
})
.then(console.log)
.catch(console.error);
}

if(message.content.startsWith(prefix + 'sinitar')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/571dbe2b70150d1c45477ea4ba8d22bfe9d7d2e9b9ccba52cac7be90be1d286a/5b5c27f0/_B0aXmp4RJTYYcc2mgnKlrbyYrA7Kq7dbH69BjnkVSmjHTdrwHvaX_DVyu4B0PAHUziIIHcpy9GG7ue7GCkxbw%3D%3D?uid=0&filename=Sinitar.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Sinitar.png'
   }]
})
.then(console.log)
.catch(console.error);
}
//Некрополис
if(message.content.startsWith(prefix + 'deidra')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/b1d4e81c59adfd17dcdccbb22a12f7e98ad84197aa846199cee92c92dde45109/5b5c2852/_B0aXmp4RJTYYcc2mgnKlk-xVuvP_XStjjyOZvF4kM39PyXjIIVgRun4NqIGxQes91vn2xn4vYFraOZC6xzn8A%3D%3D?uid=0&filename=Deidra.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Deidra.png'
   }]
})
.then(console.log)
.catch(console.error);
}

if(message.content.startsWith(prefix + 'luckrecia')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/9dd790c84264c44a91a1136648725ff27788fd00405e95c332379752b58793c9/5b5c297a/_B0aXmp4RJTYYcc2mgnKlqQgAsWsRj7foDVBFOfYuyyZQuQMssY3X9z3K0ySq_0aV5eTTwcNonX5U5iIiIjYyg%3D%3D?uid=0&filename=Luckrecia.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Luckrecia.png'
   }]
})
.then(console.log)
.catch(console.error);
}

if(message.content.startsWith(prefix + 'naadir')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/1d94bd60e5963e2288fe94520c705fe64f6de6ab96e4a998b2526d57e2c7fead/5b5c29cc/_B0aXmp4RJTYYcc2mgnKlqS3tRGq-KoEDKvb7UNNzj5M3m-TLjXszSG8KXQLl0p6sUmDnTC7CxD7zxJIqDI_xw%3D%3D?uid=0&filename=Naadir.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Naadir.png'
   }]
})
.then(console.log)
.catch(console.error);
}

if(message.content.startsWith(prefix + 'orson')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/4c06b512189e6a934a5eee998d283da6de48c30ede96aa3fa92dc0e01f6fd573/5b5c2a3e/_B0aXmp4RJTYYcc2mgnKlmQKd3p0Whjf2U6keUlO77C1gMHksfY0eY7IUHX9dogeDaPbj_4J1oX_KM2JtU44jA%3D%3D?uid=0&filename=Orson.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Orson.png'
   }]
})
.then(console.log)
.catch(console.error);
}


if(message.content.startsWith(prefix + 'zoltan')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/a769d9bd59b3a5641fcace2ce0aa9b27aa65701275dd5dd3c420696d1e614057/5b5c2a7e/_B0aXmp4RJTYYcc2mgnKlqNsb8wUp8xqHGCjJepojHcKhH_w-JzMLuAgD_tDoYwjkhpL4U8V8QyU4vuLelcPnA%3D%3D?uid=0&filename=Zoltan.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Zoltan.png'
   }]
})
.then(console.log)
.catch(console.error);
}
//Орден Порядка

if(message.content.startsWith(prefix + 'aksel')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/044f07c3add9b4a76593043f157ebadd0fe945822944ef48a695ea49a5c1924d/5b5c2bfc/_B0aXmp4RJTYYcc2mgnKlqs47cOPjkq9WlC4-ldCAd9a4HF5Xtfnvx08dqf4p_vhjoTIow22ejROVzkPJOjXZw%3D%3D?uid=0&filename=Aksel.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Aksel.png'
   }]
})
.then(console.log)
.catch(console.error);
}


if(message.content.startsWith(prefix + 'laslo')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/bea92fc0686b5cb78d2f91ed7b2af1a987950b7752e9962916cf1e35b2e20ff5/5b5c2c34/_B0aXmp4RJTYYcc2mgnKlrMMZPbzs8kF9OGUiR6ZQx16rEImYFfCiQnjMrbZBcmPBarkXddUT5B5fxXDTVMHAQ%3D%3D?uid=0&filename=Laslo.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Laslo.png'
   }]
})
.then(console.log)
.catch(console.error);
}


if(message.content.startsWith(prefix + 'miv')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/13473132d33899c66d068bb7c10ecf91d0468ec417ede21e99036490eccf3a6a/5b5c2c81/_B0aXmp4RJTYYcc2mgnKlukcjmSxFfjpDAzKDOagSbS6IaYXKU6OkDH5WmG3IgBKpJWaitkXT6P0hc0SiNlMIA%3D%3D?uid=0&filename=Miv.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Miv.png'
   }]
})
.then(console.log)
.catch(console.error);
}

if(message.content.startsWith(prefix + 'vittorio')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/6781233bdc339ec4aaff9503c3dbd49d327e7d65b9faf9f4a32720551f3158af/5b5c80e6/_B0aXmp4RJTYYcc2mgnKlgFcEYoZcJUaC1VZYEWwzewQE_EBlPXO9934qvMsvriV_hS_gABosIn7_YOy6ZQz5g%3D%3D?uid=0&filename=Vittorio.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Vittirio.png'
   }]
})
.then(console.log)
.catch(console.error);
}
//Северные Кланы
if(message.content.startsWith(prefix + 'ibba')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/86f57213b8602eec11fd3f4a5f22867d21b077af430dda3cc45373ccb320dd7c/5b5c2e14/_B0aXmp4RJTYYcc2mgnKliKuhQ_u77FzpvQYbzJJFsCNCIQbgtH3vntC4OImX_hGwHlZbUvynexuntp5miQi_A%3D%3D?uid=0&filename=Ibba.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Ibba.png'
   }]
})
.then(console.log)
.catch(console.error);
}

if(message.content.startsWith(prefix + 'inga')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/f82176d10c8639c4199159b6ab3ffb4c9eaaa2d4e3fd1f16a49094bf17aa0dd2/5b5c2e54/_B0aXmp4RJTYYcc2mgnKlvL9TD47gcabuY8-QhF26FAji4dgsr-lskY4oxMY14zaYzxcOA9WdShlF3e1f0D-Nw%3D%3D?uid=0&filename=Inga.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Inga.png'
   }]
})
.then(console.log)
.catch(console.error);
}


if(message.content.startsWith(prefix + 'ingvar')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/440b45290716c706840f6f6f99fe528541a5faf18658ee99dedf012ff17f9bed/5b5c2e8a/_B0aXmp4RJTYYcc2mgnKlmmE49JH45wXWY9v0IbvZPdf8SDfrWMMr3sSHcgO4TSOR1T_32FVzA6yLXer9YXECQ%3D%3D?uid=0&filename=Ingvar.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Ingvar.png'
   }]
})
.then(console.log)
.catch(console.error);
}


if(message.content.startsWith(prefix + 'karli')) {
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
      attachment: 'https://downloader.disk.yandex.ru/preview/7f4496ba02e53dcc9caad3a1700f7016bf6096d8998c50ae93fcf7494440cfa3/5b5c2ec4/_B0aXmp4RJTYYcc2mgnKlr2ORSfRrUgJfrPjMBLglabSo7N30f4BxM8KHQYsgkVtwp8k7MizUySpJBmNOK8FiA%3D%3D?uid=0&filename=Karli.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048',
      name: 'Karli.png'
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
    member.guild.channels.get('432864200864301059').send('<:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> **' + member.user + '**, приветствую тебя, Воин! <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> \n Прочти правила сервера, чтобы не налажать: https://discord.gg/X6u9ubv'); 
	});


client.on('guildMemberRemove', member => {
    member.guild.channels.get('432864200864301059').send('<:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> **' + member.user + '**, беги! Жалкий трус! <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778>');
    // channel-id - Надо вводить ид канала куда будет писаться это сообщение
});

client.login(process.env.BOT_TOKEN);
