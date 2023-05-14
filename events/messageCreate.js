const db = require("croxydb");
const { PermissionFlagsBits, EmbedBuilder, Events, PermissionsBitField  } = require("discord.js");
const Discord = require("discord.js")

module.exports =  {
  name: Events.MessageCreate,

  run: async(client, message, msg) => {
  if(message.author.bot) return;
  if(!message.guild) return;

  if(message.content === db.fetch(`soruMesaj_${message.guild.id}_${message.content}`).soru) {
    message.reply({ content: `${db.fetch(`soruMesaj_${message.guild.id}_${message.content}`).cevap}` })
  }

    let kufur = db.fetch(`kufurengel_${message.guild.id}`)
    
    if(kufur) {
    const kufurler = [
      
      "amk",
      "piç",
      "yarrak",
      "oç",
      "göt",
      "amq",
      "yavşak",
      "amcık",
      "amcı",
      "orospu",
      "sikim",
      "sikeyim",
      "aq", 
      "mk"
         
    ]
    
  if(kufurler.some(alo => message.content.toLowerCase().includes(alo))) {
      if(message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return;
      if(message.author?.bot) return;

  message.delete()
  message.channel.send(`<:carpi:1040649840394260510> | Hey <@${message.author.id}>, Bu Sunucuda Küfür Engel Sistemi Aktif! `)
  }
  }

    let reklamlar = db.fetch(`reklamengel_${message.guild.id}`)
    
    if(reklamlar) {
  
    const linkler = [
      
      ".com.tr",
      ".net",
      ".org",
      ".tk",
      ".cf",
      ".gf",
      "https://",
      ".gq",
      "http://",
      ".com",
      ".gg",
      ".porn",
      ".edu"
         
    ]
    
  if(linkler.some(alo => message.content.toLowerCase().includes(alo))) {
      if(message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return;
    if(message.author?.bot) return;
  message.delete()
  message.channel.send(`<:carpi:1040649840394260510> | Hey <@${message.author.id}>, Bu Sunucuda Reklam Engel Sistemi Aktif! `)
  }
  }

      const data = db.fetch(`yasaklı_kelime_${message.guild.id}`)
      if(data) {
      if(message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return;
      if(message.author?.bot) return;
      if(data.includes(message.content)) {
      message.delete()
      const embed = new EmbedBuilder()
      .setTitle(`<:uyari:1040649846400499712> **UYARI!**`)
      .setDescription(`✋ | ${message.author}, Bu sunucuda bu kelime yasak!`)
      .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
      .setTimestamp()
      message.channel.send({ embeds: [embed] })
      }
    }
    
            if (message.content.length > 4) {
             if (db.fetch(`capslockengel_${message.guild.id}`)) {
               let caps = message.content.toUpperCase()
               if (message.content == caps) {
                if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
                   if (!message.mentions.users.first()) {
                    message.delete()
                     const embed = new EmbedBuilder()
                     .setTitle(`<:uyari:1040649846400499712> **UYARI!**`)
                     .setDescription(`✋ | ${message.author}, Bu sunucuda büyük harf kullanımı engelleniyor!`)
                     .setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL({ dynamic: true })})
                     .setTimestamp()
                     message.channel.send({embeds: [embed]})
         }
        }
         }
       }
      }

  }
}