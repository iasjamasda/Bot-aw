const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const im = require('imagemagick')
const util = require('util')
const execute = util.promisify(require('child_process').exec)
const blockeds = JSON.parse(fs.readFileSync('./src/database/blocklist.json'))
const gm = require('gm').subClass({imageMagick: true})
const moment = require('moment-timezone')
const { exec } = require('child_process')
const { databases, imune } = require('./src/wppimune')
const kagApi = require('@kagchi/kag-api')
const { nethunter } = require('./src/nethunter')
const linkfy = require('linkifyjs')
const aztroJs = require("aztro-js")
const youtube = require('scrape-youtube').default
const { destrava, destrava2 } = require('./src/destrava')
const translate = require('translatte')
const fetch = require('node-fetch')
const { pack } = require('./src/pack')
const { lingua } = require('./src/idioma')
const { termux } = require('./src/termux')
const  { urlShortener } = require('./lib/shortener')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const {uploadimg} = require('./lib/uploadimg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const { get } = require('request')
const { exit, on } = require('process')
const { type } = require('os')
const {stickerImgTag, stickerVidTag, addExif, stickerForVideo } = require('./lib/sticker')
const { welcometxt } = require('./welcometext')
const ytdl = require('ytdl-core');
const durpornvid = JSON.parse(fs.readFileSync('./src/database/durpornvid.json'))
const sticker_pack = JSON.parse(fs.readFileSync('./src/database/sticker_pack.json'))
const antilink = JSON.parse(fs.readFileSync('./src/database/antilink.json'))
const antilinkhard = JSON.parse(fs.readFileSync('./src/database/antilinkhard.json'))
const antifake = JSON.parse(fs.readFileSync('./src/database/antifake.json'))
const antipornvid = JSON.parse(fs.readFileSync('./src/database/antipornvid.json'))
const antipornimg = JSON.parse(fs.readFileSync('./src/database/antipornimg.json'))
const loli = new lolis()
const antipv = JSON.parse(fs.readFileSync('./src/database/antipv.json'))
const antipalavra = JSON.parse(fs.readFileSync('./src/database/antipalavra.json'))
const listantipalavra = JSON.parse(fs.readFileSync('./src/database/listaantipalavra.json'))
const welkom = JSON.parse(fs.readFileSync('./src/database/welkom.json'))
const dontback = JSON.parse(fs.readFileSync('./src/database/dontback.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/database/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/database/simi.json'))
const welcome_group = JSON.parse(fs.readFileSync('./src/database/welcome_group.json'))
const bye_group = JSON.parse(fs.readFileSync('./src/database/bye_group.json'))
const _level = JSON.parse(fs.readFileSync('./src/database/level.json'));
const { getK, yta } = require('./lib/ytdl')
const { replaceWith } = require('cheerio/lib/api/manipulation')
const blockgpcmd = JSON.parse(fs.readFileSync('./src/database/blockcmdgp.json'))
const admingpcmd = JSON.parse(fs.readFileSync('./src/database/admingpcmd.json'))
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Meu criador^~^\n' 
            + 'ORG:PENTEST;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=5521982882464:+55 21 98288-2464\n' 
            + 'END:VCARD'
prefix = '.'
blocked = []
isAvised = []

async function ytDownlodMp3(url) {
	return new Promise((resolve, reject) => {
	  try {
		const id = ytdl.getVideoID(url)
		const yutub = ytdl.getInfo(`https://www.youtube.com/watch?v=${id}`)
		.then((data) => {
		  let pormat = data.formats
		  let audio = []
		  for (let i = 0; i < pormat.length; i++) {
			if (pormat[i].mimeType == 'audio/webm; codecs=\"opus\"') {
			  let aud = pormat[i]
			  audio.push(aud.url)
			}
		  }
		  const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
		  const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
		  const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
		  const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
		  const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
		  const result = {
			title: title,
			thumb: thumb,
			channel: channel,
			published: published,
			views: views,
			url: audio[1]
		  }
		  return(result)
		})
		resolve(yutub)
	  } catch (error) {
		  reject(error);
		}
		console.log(error)
	})
  }

const getLevelingXp = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].xp
    }
}

const getLevelingPosition = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return position
    }
}

const getLevelingLevel = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].level
    }
}

const getLevelingId = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].id
    }
}

const addLevelingId = (userid) => {
    const obj = {id: userid, xp: 1, level: 1, patent: '🥉 Bronze IV'}
    _level.push(obj)
    fs.writeFileSync('./src/database/level.json', JSON.stringify(_level, null, 2) + '\n')
}

const addLevelingPatent = async (userid, patent) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].patent = patent
        fs.writeFileSync('./src/database/level.json', JSON.stringify(_level, null, 2) + '\n')
    }
}

const getLevelingPatent = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].patent
    }
}



const addLevelingLevel = async (userid, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].level += amount
        fs.writeFileSync('./src/database/level.json', JSON.stringify(_level, null, 2) + '\n')
    }
}

const addLevelingXp = async (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./src/database/level.json', JSON.stringify(_level, null, 2) + '\n')
	}
}

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function dataAtualFormatada(){
	var data = new Date(),
		dia  = data.getDate().toString().padStart(2, '0'),
		mes  = (data.getMonth()+1).toString().padStart(2, '0'),
		ano  = data.getFullYear();
	return dia+"/"+mes+"/"+ano;
}
async function starts() {
	const client = new WAConnection()
	client.version = [3, 3234, 9]
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		const mdata = await client.groupMetadata(anu.jid)
		const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
		const pushname = client.contacts[anu.participants[0]] != undefined ? client.contacts[anu.participants[0]].vname || client.contacts[anu.participants[0]].notify : undefined
		const dontback = JSON.parse(fs.readFileSync('./src/database/dontback.json'))
		const dbackid = []
		for(i=0;i<dontback.length;++i) dbackid.push(dontback[i].groupId)

		const groupIdWelcomed = []
		const groupIdBye = []
		for(let obj of welcome_group) groupIdWelcomed.push(obj.jid)
		for(let obj of bye_group) groupIdBye.push(obj.jid)
		const isByed = groupIdBye.indexOf(anu.jid) >= 0 ? true : false
		const isWelcomed = (groupIdWelcomed.indexOf(anu.jid) >= 0) ? true : false

		if(dbackid.indexOf(anu.jid) >= 0) {
			if (anu.action == 'add'){ 
				num = anu.participants[0]
				var ind = dbackid.indexOf(anu.jid)
				if(dontback[ind].actived && dontback[ind].number.indexOf(num.split('@')[0]) >= 0) {
					await client.sendMessage(mdata.id, '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*', MessageType.text)
					client.groupRemove(mdata.id, [num])
					return
				}
			}
		}
		if(antifake.includes(anu.jid)) {
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					client.groupRemove(mdata.id, [num])
					return
				}
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			console.log(anu.participants[0])
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				if(isWelcomed) {
					var ind = groupIdWelcomed.indexOf(anu.jid)
					teks = welcome_group[ind].msg
					.replace('#data#', dataAtualFormatada())
					.replace('#hora#', time)
					.replace('#groupname#', mdata.subject)
					.replace('#numuser#', '@'+num.split('@')[0])
					.replace('#botnum#', client.user.jid)
					.replace('#user#', pushname)
				} else {
					teks = welcometxt(num.split('@')[0], mdata.subject)
				}
				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				if(isByed) {
					var ind = groupIdBye.indexOf(anu.jid)
					teks = bye_group[ind].msg
					.replace('#data#', dataAtualFormatada())
					.replace('#hora#', time)
					.replace('#groupname#', mdata.subject)
					.replace('#numuser#', num.split('@')[0])
					.replace('#botnum#', client.user.jid)
					.replace('#user#', pushname)
				} else {
					teks = `Até logo @${num.split('@')[0]}, até mais ver, bon voyage, arrivederci, até mais, adeus, boa viagem, vá em paz, que a porta bata onde o sol não bate, não volte mais aqui, hasta la vista baby, escafeda-se, e saia logo daqui.`
				}
				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	client.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return
			mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.isAvised
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			bady = (type === 'conversation') ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (mek.message.listResponseMessage && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ''
			console.log(mek)
			const palavrasid = []

			for(let obj of listantipalavra) {
				palavrasid.push(obj.jid)
			}

			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			let mess = {
				wait: '⌛ Aguarde um pouco... ⌛',
				success: '✔️ Sucesso! ✔️',
				error: {
					stick: '❌ Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
					Iv: '❌ Link inválido ❌'
				},
				only: {
					group: '❌ Este comando só pode ser usado em grupos! ❌',
					ownerG: '❌ Este comando só pode ser usado pelo grupo proprietário! ❌',
					ownerB: '❌ Este comando só pode ser usado pelo bot proprietário! ❌',
					admin: '❌ SILÊNCIO MEMBRO COMUM VC N TEM MORAL PRA USAR ESSE COMANDO ❌',
					Badmin: '❌ Este comando só pode ser usado quando o bot se torna administrador! ❌'
				}
			}
			
			const countMessage = JSON.parse(fs.readFileSync('./src/database/countmsg.json'))
			const botNumber = client.user.jid
			const OriginalOwner = '5521982882464'
			const ownerNumber = JSON.parse(fs.readFileSync('./src/database/ownerNumber.json'))
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isAntiFake = isGroup ? antifake.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isAntiPornVid = isGroup ? antipornvid.includes(from) : false
			const isAntiPornImg = isGroup ? antipornimg.includes(from) : false
			const isAntiPalavra = isGroup ? antipalavra.includes(from) : false
			const voto = JSON.parse(fs.readFileSync('./src/database/voto.json'))
			const gpvoto = JSON.parse(fs.readFileSync('./src/database/gpvoto.json'))
			const isVotoInit = voto.length > 0 ? true : false
			const pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			
			const gpvotohelp = `O sistema de voto gp consiste no sistema normal de voto, porém feito somente para grupos
veja abaixo os comandos e suas funções a seguir:

${prefix}gpinitvoto
${prefix}gpvotoinit - Inicia a votação em grupo
Ex: ${prefix}gpvotoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}gpclearvoto
${prefix}gpvotoclear - Limpa todos os votos

${prefix}gpvotostatus
${prefix}gpstatusvoto - Vê o status atual do voto

${prefix}gpvoto - Vota em uma opção
Ex: ${prefix}gpvoto opção1

${prefix}gpvotofinish
${prefix}gpfinishvoto - Encerra a votação

${prefix}gpbroadvoto
${prefix}gpvotobroad - Faz uma transmissão da votação para todos membros do grupo`

			const votohelp = `O sistema de voto consistem em todos os usuários do bot poderem votar e para ter uma boa
experiência, há comandos para administrar essa votação. Veja abaixo os comandos e suas funções a seguir:

${prefix}initvoto
${prefix}votoinit - Inicia a votação geral
Ex: ${prefix}votoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}clearvoto
${prefix}votoclear - Limpa todos os votos

${prefix}votostatus
${prefix}statusvoto - Vê o status atual do voto

${prefix}voto - Vota em uma opção
Ex: ${prefix}voto opção1

${prefix}votofinish
${prefix}finishvoto - Encerra a votação

${prefix}broadvoto
${prefix}votobroad - Faz uma transmissão da votação para todos que usam o bot`
			const isUrl = (url) => {
				if(type === MessageType.text) {
					if(linkfy.find(url)[0]) return true
				}
				return false
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			
			const levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, patent) => {
				return`*「 Subiu de nível 」*
*Nome* : ${pushname}
*Wa.me* : wa.me/${sender.split("@")[0]}
*Xp* : ${getLevelingXp(sender)}
*Patente* : ${patent}
*Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}`
			}

			const isListAntiPalavra = (teks) => {
				var ind = palavrasid.indexOf(from)
				var is_checked = false
				if(ind >= 0) {
					for(let obj of listantipalavra[ind].palavras) {
						if(teks.includes(obj)) is_checked = true
					}
					return is_checked
				} else return false
			}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if(isCmd && blockeds.includes(sender)) return reply(`❌ NÚMERO BLOQUEADO POR NÃO CUMPRIR AS REGRAS, ENTRE EM CONTATO COM O PROPRIETÁRIO DO BOT PARA SABER COMO USAR OS MEUS COMANDOS ❌ 
NÚMERO DO PROPRIETÁRIO DO BOT>> Wa.me/+5521982882464`)
			if(type == MessageType.video) {
				if(isMedia && mek.message.videoMessage.seconds < 20 && isAntiPornVid) {
					const encmedia = mek
					const media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.gif')
					execute(`ffmpeg -i ${media}  -fs 3M -vf "fps=5,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 ${ran}`).then(async (res, err) => {
						const upload = await uploadimg('BOT SOPHIA', ran, ran)
						anu = await fetchJson(`http://brizas-api.herokuapp.com/ia/porngifdetect?apikey=BOT SOPHIA&img=${upload.resultado.link}`)
						porn_media = parseFloat(anu.result_media.porno)
						hentai_media = parseFloat(anu.result_media.hentai)
						console.log(hentai_media)
						sexy_media = parseFloat(anu.result_media.sexy)
						if(!isGroupAdmins && isBotGroupAdmins) {
							if(porn_media >= 50) {
								reply('*Porno detectado, banindo usuário...*')
								client.groupRemove(from, [sender])
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
								return
							}else if(hentai_media >= 50) {
								reply('*Porno detectado, banindo usuário...*')
								client.groupRemove(from, [sender])
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
								return
							} else if(sexy_media > 50) {
								reply('*Porno detectado, banindo usuário...*')
								client.groupRemove(from, [sender])
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
								return
							}
						} 
					})
				} else if(isMedia && isAntiPornVid && type == MessageType.video) {
					const encmedia = mek
					const media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.gif')
					execute(`ffmpeg -i ${media} -fs 3M -ss 00:00:00 -to 00:00:${durpornvid[0]} -vf "fps=5,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 ${ran}`).then(async (res, err) => {
						const upload = await uploadimg('BOT SOPHIA', ran, ran)
						anu = await fetchJson(`http://brizas-api.herokuapp.com/ia/porngifdetect?apikey=BOT SOPHIA&img=${upload.resultado.link}`)
						console.log(anu)
						porn_media = parseFloat(anu.result_media.porno)
						hentai_media = parseFloat(anu.result_media.hentai)
						sexy_media = parseFloat(anu.result_media.sexy)
						if(!isGroupAdmins && isBotGroupAdmins) {
							if(porn_media > 50) {
								reply('*Porno detectado, banindo usuário...*')
								client.groupRemove(from, [sender])
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
								return
							}
							if(hentai_media > 50) {
								reply('*Porno detectado, banindo usuário...*')
								client.groupRemove(from, [sender])
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
								return
							}
							if(sexy_media > 50) {
								reply('*Porno detectado, banindo usuário...*')
								client.groupRemove(from, [sender])
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
								return
							}
						}
					})
				}
			}
			if (isAntiPornImg && isBotGroupAdmins && type == MessageType.image) {
				savedFilename = await client.downloadAndSaveMediaMessage (mek)
				ran = getRandom('.'+savedFilename.split('.')[1])
				const upload = await uploadimg('BOT SOPHIA', savedFilename, ran)
				anu = await fetchJson(`http://brizas-api.herokuapp.com/ia/porndetect?apikey=17desetembro&img=${upload.resultado.link}`)
				hentai_media = parseFloat(anu.probabilidades.hentai)
				porn_media = parseFloat(anu.probabilidades.porno)
				sexy_media = parseFloat(anu.probabilidades.sexy)
				if(hentai_media > 50) {
					reply('*Porno detectado, banindo...*')
					client.groupRemove(from, [sender])
				} else if(porn_media > 50) {
					reply('*Porno detectado, banindo...*')
					client.groupRemove(from, [sender])
				} else if(sexy_media > 50) reply('Cuidado com o que posta, to com antiporn ativo')
				fs.unlinkSync(savedFilename)
			}

			if(isAntiPv && !isGroup && !isOwner) {
				if(isAvised.indexOf(sender) >= 0) {
					reply('*🚫 ANTI PV LIGADO E VOCÊ FOI AVISADO, LOGO SERÁ BLOQUEADO 🚫*')
					client.blockUser(sender, 'add')
					return
				} else {
					reply('⚠️ *ATENÇÃO O BOT FUNCIONA APENAS PARA GRUPOS, O ANTI PV ESTÁ LIGADO ENTÃO SE MANDAR OUTRA MENSAGEM VOCÊ SERÁ BLOQUEADO* ⚠️')
					isAvised.push(sender)
					return
				}
			}

			if(isUrl(bady) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins) {
				kic = `${sender.split("@")[0]}@s.whatsapp.net`
				client.groupRemove(from, [kic])
			}
			if(isUrl(bady) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins) {
				reply('Isso é um link amigo... ah é tu é adm ent pode kkkk 🙃')
			}

			if(bady.includes('://chat.whatsapp.com/') && isAntiLink && !isGroupAdmins && isBotGroupAdmins) {
				kic = `${sender.split("@")[0]}@s.whatsapp.net`
				client.groupRemove(from, [kic])
			}
			if(bady.includes('://chat.whatsapp.com/') && isAntiLink && isGroupAdmins && isBotGroupAdmins) {
				reply('Isso é um link amigo... ah é tu é adm ent pode kkkk 🙃')
			}
			if(bady.includes('://youtube.com/channel') && isAntiLink && !isGroupAdmins && isBotGroupAdmins) {
				kic = `${sender.split("@")[0]}@s.whatsapp.net`
				client.groupRemove(from, [kic])
			}
			if(bady.includes('://youtube.com/channel') && isAntiLink && isGroupAdmins && isBotGroupAdmins) {
				reply('Isso é um link amigo... ah é tu é adm ent pode kkkk 🙃')
			}
			if(isAntiPalavra && type != MessageType.sticker && type != MessageType.document) {
				var isDetect = false
				ind = palavrasid.indexOf(from)
				for(let obj of listantipalavra[ind].palavras) {
					if(budy.includes(obj)) isDetect = true;
				}
				if(isDetect && command != 'rmpalavra' && !isOwner) {
					if(isGroupAdmins) return client.sendMessage(from, 'Palavra proibida detectada, porém usuário e adm', MessageType.text, {quoted: mek})
					await client.sendMessage(from, 'Palavra proibida detectada, banindo usuário', MessageType.text, {quoted: mek})
					await client.groupRemove(from, [sender])
					isDetect = false
					
				}
			}
			if(!isGroup) {
				sticker_pack.package = sticker_pack.set_pack
				fs.writeFileSync('./src/database/sticker_pack.json', JSON.stringify(sticker_pack, null, 2) +'\n')
			}
			else if(sticker_pack.groupname) {
				sticker_pack.package = groupName 
				fs.writeFileSync('./src/database/sticker_pack.json', JSON.stringify(sticker_pack, null, 2) +'\n')
			}
			else {
				sticker_pack.package = sticker_pack.set_pack 
				fs.writeFileSync('./src/database/sticker_pack.json', JSON.stringify(sticker_pack, null, 2) +'\n')
			}
			const dbids = []
			for(i=0;i<dontback.length;++i) {
				dbids.push(dontback[i].groupId)
			}
			const isDontBack = (isGroup && dbids.indexOf(from) >= 0) ? true : false

			const groupIdWelcomed = []
			for(let obj of welcome_group) groupIdWelcomed.push(obj.jid)
			const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false

			const groupIdBye = []
			for(let obj of bye_group) groupIdBye.push(obj.jid)
			const isByed = (groupIdBye.indexOf(from) >= 0) ? true : false

			
			const blockCmdGroupJids = []
			for(let obj of blockgpcmd) blockCmdGroupJids.push(obj.jid)
			if(isGroup && blockCmdGroupJids.indexOf(from) < 0) {
				blockgpcmd.push({jid: from, actived: false, blockedcmds: []})
				fs.writeFileSync('./src/database/blockcmdgp.json', JSON.stringify(blockgpcmd, null, 2))
			}
			const isBlockedCmdGp = (isGroup && blockCmdGroupJids.indexOf(from) >= 0) ? blockgpcmd[blockCmdGroupJids.indexOf(from)].actived : false
			if(isBlockedCmdGp && blockCmdGroupJids.indexOf(from) >= 0 && blockgpcmd[blockCmdGroupJids.indexOf(from)].blockedcmds.indexOf(command) >= 0) {
				reply('*Esse comando não está permitido no grupo*')
				return
			}

			const admingpcmdJids = []
			for(let obj of admingpcmd) admingpcmdJids.push(obj.jid)
			if(isGroup && admingpcmdJids.indexOf(from) < 0) {
				admingpcmd.push({jid: from, actived: false, blockedcmds: []})
				fs.writeFileSync('./src/database/blockcmdgp.json', JSON.stringify(admingpcmd, null, 2))
			}
			const isAdminCmdGp = (isGroup && admingpcmdJids.indexOf(from) >= 0) ? admingpcmd[admingpcmdJids.indexOf(from)].actived : false
			if(isAdminCmdGp && admingpcmdJids.indexOf(from) >= 0 && admingpcmd[admingpcmdJids.indexOf(from)].blockedcmds.indexOf(command) >= 0 && !isGroupAdmins) {
				reply(mess.only.admin)
				return
			}

			const groupIdscount = []
			const numbersIds = []
			for(let obj of countMessage) {
				groupIdscount.push(obj.groupId)
			}

			if(isGroup && groupIdscount.indexOf(from) >= 0) {
				var ind = groupIdscount.indexOf(from)
				for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.jid)}
				if(numbersIds.indexOf(sender) >=0) {
					var indnum = numbersIds.indexOf(sender)
					countMessage[ind].numbers[indnum].messages += 1
					countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
					fs.writeFileSync('./src/database/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
				} else {
					const messages = 1
					const cmd_messages = isCmd ? 1 : 0
					countMessage[ind].numbers.push({
						jid: sender,
						messages: messages,
						cmd_messages: cmd_messages
					})
					fs.writeFileSync('./src/database/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
				}
			}
			else if(isGroup) {
				countMessage.push({
					groupId: from,
					numbers: [{
						jid: sender,
						messages: 2,
						cmd_messages: isCmd ? 1 : 0
					}]
				})
				fs.writeFileSync('./src/database/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
			}

			votoactivegp = []
			for(let obj of gpvoto) votoactivegp.push(obj.group_id)
			const isVotoGroupActived = (isGroup && votoactivegp.indexOf(from) >= 0 ) ? true : false
			const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
			var getLevel
			var requiredXp
            try {
                if (currentLevel != undefined && checkId != undefined) {
					const amountXp = 100
					getLevel = getLevelingLevel(sender)
					requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
					await addLevelingXp(sender, amountXp)
					async function checkPatente() {
						if(currentLevel == 2) await addLevelingPatent(sender, '🥉 Bronze III') 
						if(currentLevel == 3) await addLevelingPatent(sender, '🥉 Bronze II') 
						if(currentLevel == 4) await addLevelingPatent(sender, '🥉 Bronze I') 
						if(currentLevel == 5) await addLevelingPatent(sender, '🥈 Prata IV') 
						if(currentLevel == 6) await addLevelingPatent(sender, '🥈 Prata III') 
						if(currentLevel == 7) await addLevelingPatent(sender, '🥈 Prata II') 
						if(currentLevel == 8) await addLevelingPatent(sender, '🥈 Prata I') 
						if(currentLevel == 9) await addLevelingPatent(sender, '🥇 Ouro IV') 
						if(currentLevel == 10) await addLevelingPatent(sender, '🥇 Ouro III') 
						if(currentLevel == 11) await addLevelingPatent(sender, '🥇 Ouro II') 
						if(currentLevel == 12) await addLevelingPatent(sender, '🥇 Ouro I')
						if(currentLevel == 13) await addLevelingPatent(sender, '🏅🏅 Platina IV')
						if(currentLevel == 14) await addLevelingPatent(sender, '🏅🏅 Platina III')
						if(currentLevel == 15) await addLevelingPatent(sender, '🏅🏅 Platina II')
						if(currentLevel == 16) await addLevelingPatent(sender, '🏅🏅 Platina I')
						if(currentLevel == 17) await addLevelingPatent(sender, '💎 Diamante IV')
						if(currentLevel == 18) await addLevelingPatent(sender, '💎 Diamante III')
						if(currentLevel == 19) await addLevelingPatent(sender, '💎 Diamante II')
						if(currentLevel == 20) await addLevelingPatent(sender, '💎 Diamante I')
					}
					await checkPatente()
					if (requiredXp <= getLevelingXp(sender)) {
						await addLevelingLevel(sender, 1)
						await checkPatente()
						console.log(getLevelingPatent(sender))
						reply(levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, getLevelingPatent(sender)))
					}
				} else {
					addLevelingId(sender)
				}
            } catch (err) {
                console.error(err)
            }
			switch(command) {
				
				case 'lyrics':
					try {
                	reply('Olá, Espere um pouco!')
					teks = body.slice(8)
					yt = await fetchJson(`http://brizas-api.herokuapp.com/sociais/youtubesrc?apikey=BOT SOPHIA&query=${teks}`)
					link_yt = yt.resultados[0].link
					anu = await fetchJson(`http://brizas-api.herokuapp.com/ia/lyricsfinder?apikey=BOT SOPHIA&query=${teks}`, {method: 'get'})
					client.sendMessage(from, anu.lyrics, text, {quoted: mek, contextInfo: {
						externalAdReply: {
							title: yt.title,
							body: '*✅ Música encontrada ✅*',
							mediaType: 2,
							thumbnailUrl: yt.thumbnail,
							mediaUrl: link_yt
						}
					}})
					} catch (e) {
						console.log(e)
						reply('error')
					}
				break
				case 'ytsrc':
					teks = body.slice(7)
					anu = await fetchJson(`http://brizas-api.herokuapp.com/sociais/youtubesrc?apikey=BOT SOPHIA&query=${teks}`)
					const objs = []
					for(i=0;i< anu.resultados.length; ++i) {
						let data = {
							rowId: `${prefix}play `+ anu.resultados[i].title,
							title: `${prefix}play`,
							description: anu.resultados[i].title
						}
						objs.push(data)
					}

					const button = {
						title: "✅ Músicas encotradas ✅",
						buttonText: "Mostra lista de músicas",
						description: `Palavra chave: ${teks}`,
						listType: 1,
						sections: [
							{
								title: "Músicas relacionadas",
								rows: objs
							}
						]
				    }
					client.sendMessage(from, button, MessageType.listMessage)	   
					break
				case 'signos':
					reply(`1) Aries\n2) Touro\n3) Aquário\n4) Peixes\n5) Capricórnio\n6) Gêmeos\n7) Câncer\n8) Leão\n9) Virgem\n10) Libra\n11) Escorpião\n12) Sagitário`)
					break
				case 'horoshoje':
					teks = args[0]
					if(isNaN(teks)) return reply(`Digite ${prefix}horoshelp para saber o número do seu signo`)
					if(teks <= 0) return reply('Escolha entre 1 e 12')
					if(teks > 12) return reply('Escolha entre 1 e 12')
					var signo;
					if(teks == 1) signo = 'aries'
					if(teks == 2) signo = 'taurus'
					if(teks == 3) signo = 'aquarius'
					if(teks == 4) signo = 'pisces'
					if(teks == 5) signo = 'capricorn'
					if(teks == 6) signo = 'gemini'
					if(teks == 7) signo = 'cancer'
					if(teks == 8) signo = 'leo'
					if(teks == 9) signo = 'virgo'
					if(teks == 10) signo = 'libra'
					if(teks == 11) signo = 'scorpio'
					if(teks == 12) signo = 'sagittarius'
					aztroJs.getTodaysHoroscope(signo, async res => {
						desc = (await translate(res.description, {to: 'pt'})).text
						luck_number = (await translate(res.lucky_number, {to: 'pt'})).text
						luck_time = (await translate(res.lucky_time, {to: 'pt'})).text
						reply(`*Horoscopo do dia:* ${desc}\n*Número da sorte:* ${luck_number}\n*Hora da sorte:* ${luck_time}`)
					})
					break
				case 'horosemana':
					teks = args[0]
					if(isNaN(teks)) return reply(`Digite ${prefix}horoshelp para saber o número do seu signo`)
					if(teks <= 0) return reply('Escolha entre 1 e 12')
					if(teks > 12) return reply('Escolha entre 1 e 12')
					var signo;
					if(teks == 1) signo = 'aries'
					if(teks == 2) signo = 'taurus'
					if(teks == 3) signo = 'aquarius'
					if(teks == 4) signo = 'pisces'
					if(teks == 5) signo = 'capricorn'
					if(teks == 6) signo = 'gemini'
					if(teks == 7) signo = 'cancer'
					if(teks == 8) signo = 'leo'
					if(teks == 9) signo = 'virgo'
					if(teks == 10) signo = 'libra'
					if(teks == 11) signo = 'scorpio'
					if(teks == 12) signo = 'sagittarius'
					anu = await fetchJson(`http://horoscope-api.herokuapp.com/horoscope/week/${signo}`)
					reply((await translate(anu.horoscope, {to: 'pt'})).text)
					break
				case 'durpornvid':
					if(!isOwner) return reply(mess.only.ownerB)
					if(args.lenght < 1) return reply('Digite o tamanho da duração a ser capturada do vídeo')
					if(isNaN(args[0])) return reply('Digite número válidos')
					durpornvid[0] = parseInt(args[0])
					fs.writeFileSync('./src/database/durpornvid.json', JSON.stringify(durpornvid))
					break
				case 'antipornimg':
					if (!isGroup) return reply(mess.only.group)
					if(!isGroupAdmins) return reply(mess.only.admin)
					if(!isBotGroupAdmins) return reply(mess.only.Badmin)
					if(args.length < 1) return reply('*1 ou 0*')
					if (Number(args[0]) === 1) {
						if (isAntiPornImg) return reply('Ja esta ativo')
						antipornimg.push(from)
						fs.writeFileSync('./src/database/antipornimg.json', JSON.stringify(antipornimg, null, 2))
						reply('Ativou com sucesso o recurso de anti porno de imagem neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antipornimg.splice(from, 1)
						fs.writeFileSync('./src/database/antipornimg.json', JSON.stringify(antipornimg, null, 2))
						reply('Desativou com sucesso o recurso de anti porno de imagem neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
				case 'antipornvid':
					if (!isGroup) return reply(mess.only.group)
					if(!isGroupAdmins) return reply(mess.only.admin)
					if(!isBotGroupAdmins) return reply(mess.only.Badmin)
					if(args.length < 1) return reply('*1 ou 0*')
					if (Number(args[0]) === 1) {
						if (isAntiPornVid) return reply('Ja esta ativo')
						antipornvid.push(from)
						fs.writeFileSync('./src/database/antipornvid.json', JSON.stringify(antipornvid, null, 2))
						reply('Ativou com sucesso o recurso de anti porno de vídeo neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antipornvid.splice(from, 1)
						fs.writeFileSync('./src/database/antipornvid.json', JSON.stringify(antipornvid, null, 2))
						reply('Desativou com sucesso o recurso de anti porno de vídeo neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
				case 'ship':
					try {
					buff = await getBuffer('https://arqaparecida.org.br/assets/img/arq_noticia/282.jpg')
					r = Math.floor(Math.random() * 100 + 0)
					if(args.length < 1) reply('*ATA, AGORA É POSSÍVEL SHIPAR FANTASMAS*')
					if(args.length< 2) reply('*NINGUÉM MERECER SER SHIPADO SOZINHO NÉ*')
					num1 = args[0]
					if(!isNaN(num1.slice(1)))
					{
						if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
					}
					if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}

					num2 = args[1]
					if(!isNaN(num2.slice(1)))
					{
						if(num2.startsWith('@')) {num2 = num2.slice(1)+'@s.whatsapp.net'}
					}
					if(num2.slice(0, -15) == '') { num2 = num2+'@s.whatsapp.net'}
					reply('*⌛Buscando dados na máquina do tempo, aguarde...⌛*')
					setTimeout(async function(){
						client.sendMessage(from, buff, image, {caption: `✅ *RESULTADOS OBTIDOS* ✅\n*CHANCES DE NAMORO ENTRE @${num1.slice(0, -15)} E @${num2.slice(0, -15)}* \n*SÃO DE: ${r}%*`, quoted: mek, contextInfo: { "mentionedJid": [num1, num2]}})
					}, 3000)
					} catch {
						reply('Error')
						}
					break
				case 'randomship':
					try{
						buff = await getBuffer('https://arqaparecida.org.br/assets/img/arq_noticia/282.jpg')
						if(!isGroup) return reply(mess.only.group)
						r1 = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						r2 = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						if(args.length < 1) {
							client.sendMessage(from, `*Pesquisando quem é a alma gêmea do @${groupMembers[r1].jid.slice(0, -15)}...*`, extendedText, {quoted: mek, contextInfo: {mentionedJid: [groupMembers[r1].jid]}})
							setTimeout(async function () {
								client.sendMessage(from, buff, image, {caption: `*✅ Consegui achar a alma gêmea do @${groupMembers[r1].jid.slice(0, -15)} ✅*\n 
*De acordo com meus cálculos altamente precisos, a pessoa que combina com @${groupMembers[r1].jid.slice(0, -15)} é: @${groupMembers[r2].jid.slice(0, -15)}*`, quoted: mek, contextInfo: {"mentionedJid": [groupMembers[r1].jid, groupMembers[r2].jid] }})
							}, 3000)
						
						}
						else {
							num1 = args[0]
							if(!isNaN(num1.slice(1)))
							{
								if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
								else return('Número não encontrado')
							}
							else return reply('Marque um Numero')
							client.sendMessage(from,`*Pesquisando quem é a alma gêmea do @${num1.slice(0, -15)} ...*`, extendedText, {quoted: mek, contextInfo: {mentionedJid: [num1]}})
							setTimeout(async function () {
								client.sendMessage(from, buff, image, {caption: `*✅ Consegui achar a alma gêmea do @${num1.slice(0, -15)} ✅*\n 
*De acordo com meus cálculos altamente precisos, a pessoa que combina com @${num1.slice(0, -15)} é: @${groupMembers[r2].jid.slice(0, -15)}*`, quoted: mek, contextInfo: {"mentionedJid": [num1, groupMembers[r2].jid]}})
							}, 3000)
						}
					} catch {
						reply('Error')
					}
					break
				case 'filtroativo':
					if(!isGroupAdmins) return reply(mess.only.admin)
					if(!isGroup) return reply(mess.only.group)
					teks = `*Membros que só mandaram ${args[0]} mensagens:*\n`
					mem = []
					if(groupIdscount.indexOf(from) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
					for(let obj of groupMembers) {
						if(args[0] != 0) { 
							if(numbersIds.indexOf(obj.jid) >=0) { 
								var indnum = numbersIds.indexOf(obj.jid)
								if(countMessage[ind].numbers[indnum].messages == args[0]) {
									teks+= `*➣ @${obj.jid.split('@')[0]}*\n`
									mem.push(obj.jid)
								}
							}
						} else {
							if(numbersIds.indexOf(obj.jid) < 0) { 
								teks+= `*➣ @${obj.jid.split('@')[0]}*\n`
								mem.push(obj.jid)
							}
						}
					}
					mentions(teks, mem, true)
					break
				case 'banativos':
					if(!isGroupAdmins) return reply(mess.only.admin)
					if(!isBotGroupAdmins) return reply(mess.only.Badmin)
					if(!isGroup) return reply(mess.only.group)
					if(groupIdscount.indexOf(from) >= 0) {
						for(let obj of groupMembers) {
							if(numbersIds.indexOf(obj.jid) >=0) { 
								var indnum = numbersIds.indexOf(obj.jid)
								if(countMessage[ind].numbers[indnum].messages <= args[0]) {
									if(groupAdmins.includes(obj.jid)) {
										mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
									} else {
										client.groupRemove(from, [obj.jid])
									}
								}
							} else {
								if(groupAdmins.includes(obj.jid)) {
									mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
								} else {
									client.groupRemove(from, [obj.jid])
								}
							}
						}
					}
					break
				case 'atividade':
					try{
						if(!isGroupAdmins) return reply(mess.only.admin)
						if(isGroup && groupIdscount.indexOf(from) >= 0) {
							var ind = groupIdscount.indexOf(from)
							teks = `*Atividade dos membros do grupo:*\n`
							mem = []
							for(let obj of groupMembers) {
								if(numbersIds.indexOf(obj.jid) >=0) {
									var indnum = numbersIds.indexOf(obj.jid)
									teks += `➣ *@${countMessage[ind].numbers[indnum].jid.split('@')[0]}*\n*Mensagens: ${countMessage[ind].numbers[indnum].messages}\n*Comandos: ${countMessage[ind].numbers[indnum].cmd_messages}*\n`
								} else {
									teks += `➣ *@${obj.jid.split('@')[0]}*\n*Mensagens: 0*\n*Comandos: 0*\n`
								}
								mem.push(obj.jid)
							}
							client.sendMessage(from, teks, extendedText, {quoted: mek, contextInfo:{mentionedJid: mem}})
						} else return reply('*Nada foi encontrado*')
					} catch (e){
						console.log(e)
					}
					break
				case 'checkativo':
					if (!isGroup) return reply(mess.only.group)
					if(groupIdscount.indexOf(from) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
					var ind = groupIdscount.indexOf(from)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque o número que deseja puxar a atividade*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if(numbersIds.indexOf(mentioned[0]) >= 0) {
						var indnum = numbersIds.indexOf(mentioned[0])
						mentions(`*Consulta da atividade de @${mentioned[0].split('@')[0]} no grupo*\n*Mensagens: ${countMessage[ind].numbers[indnum].messages}*\n*Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}*`, mentioned, true)
					}
					else {
						mentions(`*Consulta da atividade de @${mentioned[0].split('@')[0]} no grupo*\n*Mensagens: 0*\n*Comandos dados: 0*`, mentioned, true)
					}
					break
				case 'rankativo':
					if (!isGroup) return reply(mess.only.group)
					if(groupIdscount.indexOf(from) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
					var ind = groupIdscount.indexOf(from)
					if(countMessage[ind].numbers.length < 3) return reply('*Necessita do registro de 3 usuarios*')
					countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
					mentioned_jid = []
					boardi = '*🔥Ranking dos membros mais ativos🔥*\n\n'
					try {
						for (let i = 0; i < 3; i++) {
							if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							
							mentioned_jid.push(countMessage[ind].numbers[i].jid)
						} 
						mentions(boardi, mentioned_jid, true)
					} catch (err) {
						console.log(err)
						await client.sendMessage(from, `*É necessário 3 jogadores para se construir um ranking*`, text, {quoted: mek})
					}
				break
				case 'togif':
					if ((isMedia && mek.message.videoMessage.seconds < 20 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 20)) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.mp4')
						execute(`ffmpeg -i ${media} -fs 5M ${ran}`, async function(err, res){
							if(err) return console.log(err)
							client.sendMessage(from, fs.readFileSync(ran), video, {mimetype: Mimetype.gif, quoted: mek})
							fs.unlinkSync(media)	
							fs.unlinkSync(ran)
						})
					} else if(isQuotedSticker){
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						buff = await stickerForVideo(media)
						await client.sendMessage(from, buff.result, video, {quoted: mek, mimetype: Mimetype.gif})
						
					} else {
						reply('*Diga as dimensões com largura e altura e o video tem que ter 20 segundo*')
					}
					break
				case 'admingpcmd':
					if (!isGroup) return reply(mess.only.group)
					if(!isOwner) return reply(mess.only.ownerB)
					if(args.length < 1) return reply('*Escreva o comando que deseja bloquear*')
					if (Number(args[0]) === 1) {
						if (isAdminCmdGp) return reply('Ja esta ativo')
						admingpcmd[admingpcmdJids.indexOf(from)].actived = true
						fs.writeFileSync('./src/database/admingpcmd.json', JSON.stringify(admingpcmd, null, 2))
						reply('Ativou com sucesso o recurso de bloqueio de comandos neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						admingpcmd[admingpcmdJids.indexOf(from)].actived = false
						fs.writeFileSync('./src/database/admingpcmd.json', JSON.stringify(admingpcmd, null, 2))
						reply('Desativou com sucesso o recurso de bloqueio de comandos neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
                    break
				case 'addadmingpcmd':
					if(!isGroup) return reply(mess.only.group)
					if(!isOwner) return reply(mess.only.ownerB)
					if(args.length < 1) return reply('*Escreva o comando que deseja bloquear*')
					posblockcmdgp = admingpcmdJids.indexOf(from)
					if(posblockcmdgp < 0) return reply('Esse grupo não está cadastrado ainda')
					admingpcmd[posblockcmdgp].blockedcmds.push(args[0])
					fs.writeFileSync('./src/database/admingpcmd.json', JSON.stringify(admingpcmd, null, 2))
					reply('*Comando bloqueado com sucesso!!!*')
					break
				case 'rmadmingpcmd':
					if(!isGroup) return reply(mess.only.group)
					if(!isOwner) return reply(mess.only.ownerB)
					if(args.length < 1) return reply('*Escreva o comando que deseja desbloquear*')
					posblockcmdgp = admingpcmdJids.indexOf(from)
					if(posblockcmdgp < 0) return reply('Esse grupo não está cadastrado ainda')
					poscmdblocked = admingpcmd[posblockcmdgp].blockedcmds.indexOf(args[0])
					if(poscmdblocked < 0) return reply('*Comando não está bloqueado neste grupo*')
					admingpcmd[posblockcmdgp].blockedcmds.splice(poscmdblocked, 1)
					fs.writeFileSync('./src/database/admingpcmd.json', JSON.stringify(admingpcmd, null, 2))
					reply('*Comando desbloqueado com sucesso!!!*')
					break
				case 'admingpcmdlist':
					if(!isGroup) return reply(mess.only.group)
					posblockcmdgp = admingpcmdJids.indexOf(from)
					if(posblockcmdgp < 0) return reply('Esse grupo não está cadastrado ainda')
					teks = `Comando que estão bloqueados neste grupo:\n\n`
					for(let obj of admingpcmd[posblockcmdgp].blockedcmds) teks += `~> ${obj}\n`
					reply(teks)
					break
				case 'blockgpcmd':
					if (!isGroup) return reply(mess.only.group)
					if(!isOwner) return reply(mess.only.ownerB)
					if(args.length < 1) return reply('*Escreva o comando que deseja bloquear*')
					if (Number(args[0]) === 1) {
						if (isBlockedCmdGp) return reply('Ja esta ativo')
						blockgpcmd[blockCmdGroupJids.indexOf(from)].actived = true
						fs.writeFileSync('./src/database/blockcmdgp.json', JSON.stringify(blockgpcmd, null, 2))
						reply('Ativou com sucesso o recurso de bloqueio de comandos neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						blockgpcmd[blockCmdGroupJids.indexOf(from)].actived = false
						fs.writeFileSync('./src/database/blockcmdgp.json', JSON.stringify(blockgpcmd, null, 2))
						reply('Desativou com sucesso o recurso de bloqueio de comandos neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
                    break
				case 'addblockgpcmd':
					if(!isGroup) return reply(mess.only.group)
					if(!isOwner) return reply(mess.only.ownerB)
					if(args.length < 1) return reply('*Escreva o comando que deseja bloquear*')
					posblockcmdgp = blockCmdGroupJids.indexOf(from)
					if(posblockcmdgp < 0) return reply('Esse grupo não está cadastrado ainda')
					blockgpcmd[posblockcmdgp].blockedcmds.push(args[0])
					fs.writeFileSync('./src/database/blockcmdgp.json', JSON.stringify(blockgpcmd, null, 2))
					reply('*Comando bloqueado com sucesso!!!*')
					break
				case 'rmblockgpcmd':
					if(!isGroup) return reply(mess.only.group)
					if(!isOwner) return reply(mess.only.ownerB)
					if(args.length < 1) return reply('*Escreva o comando que deseja desbloquear*')
					posblockcmdgp = blockCmdGroupJids.indexOf(from)
					if(posblockcmdgp < 0) return reply('Esse grupo não está cadastrado ainda')
					poscmdblocked = blockgpcmd[posblockcmdgp].blockedcmds.indexOf(args[0])
					if(poscmdblocked < 0) return reply('*Comando não está bloqueado neste grupo*')
					blockgpcmd[posblockcmdgp].blockedcmds.splice(poscmdblocked, 1)
					fs.writeFileSync('./src/database/blockcmdgp.json', JSON.stringify(blockgpcmd, null, 2))
					reply('*Comando desbloqueado com sucesso!!!*')
					break
				case 'blockgpcmdlist':
					if(!isGroup) return reply(mess.only.group)
					posblockcmdgp = blockCmdGroupJids.indexOf(from)
					if(posblockcmdgp < 0) return reply('Esse grupo não está cadastrado ainda')
					teks = `Comando que estão bloqueados neste grupo:\n\n`
					for(let obj of blockgpcmd[posblockcmdgp].blockedcmds) teks += `~> ${obj}\n`
					reply(teks)
					break
				case 'level':
					if(args.length < 1) {
						const userLevel = getLevelingLevel(sender)
						const userXp = getLevelingXp(sender)
						if (userLevel === undefined && userXp === undefined) return reply(`*Você não esta registrado, para se registrar digite ${prefix}registerlevel*`)
						const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
						const pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
						resul = `╭━━👾 𝙇𝙀𝙑𝙀𝙇 𝙎𝙏𝘼𝙏𝙐𝙎 👾━━╮\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Wa.me:* wa.me/${sender.split('@')[0]}\n┣⊱ *XP atual/requirido:* ${parseInt(userXp)}/${parseInt(requiredXp)}\n┣⊱ *Patente:* ${getLevelingPatent(sender)}\n┣⊱ *Level:* ${userLevel}\n╰━━━━━━━━━━━━━━━━━━━╯`
						reply(resul)
					} else if (mek.message.extendedTextMessage !== undefined || mek.message.extendedTextMessage !== null) {
						mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
						const userLevel = getLevelingLevel(mentioned[0])
						const userXp = getLevelingXp(mentioned[0])
						if (userLevel === undefined && userXp === undefined) return mentions(`O número @${mentioned[0].split('@')[0]} não está registrado`, [mentioned[0]], true)
						const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
						const pushname = client.contacts[mentioned[0]] != undefined ? client.contacts[mentioned[0]].vname || client.contacts[mentioned[0]].notify : undefined
						resul = `╭━━👾 𝙇𝙀𝙑𝙀𝙇 𝙎𝙏𝘼𝙏𝙐𝙎 👾━━╮\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Wa.me:* wa.me/${mentioned[0].split('@')[0]}\n┣⊱ *XP atual/requirido:* ${parseInt(userXp)}/${parseInt(requiredXp)}\n┣⊱ *Patente:* ${getLevelingPatent(mentioned[0])}\n┣⊱ *Level:* ${userLevel}\n╰━━━━━━━━━━━━━━━━━━━╯`
						reply(resul)
					} else if(!isNaN(args[0])) {
						num = args[0]+'@s.whatsapp.net'
						const userLevel = getLevelingLevel(num)
						const userXp = getLevelingXp(num)
						if (userLevel === undefined && userXp === undefined) return reply(`*Número não registrado*`)
						const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
						const pushname = client.contacts[num] != undefined ? client.contacts[num].vname || client.contacts[num].notify : undefined
						resul = `╭━━👾 𝙇𝙀𝙑𝙀𝙇 𝙎𝙏𝘼𝙏𝙐𝙎 👾━━╮\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Wa.me:* wa.me/${num.split('@')[0]}\n┣⊱ *XP atual/requirido:* ${parseInt(userXp)}/${parseInt(requiredXp)}\n┣⊱ *Patente:* ${getLevelingPatent(num)}\n┣⊱ *Level:* ${userLevel}\n╰━━━━━━━━━━━━━━━━━━━╯`
						reply(resul)
					}
				break 
				case 'rename':
					teks = body.slice(8)
					if(isQuotedSticker) {
						if(teks.split('|').length < 2) return reply('*Diga o nome do autor e pacote usando | para separa-los*')
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						rano = getRandom('.webp')
						gb1 = teks.split('|')[0].trim()
						gb2 = teks.split('|')[1].trim()
						ran= getRandom('')
						await addExif(gb1, gb2, ran)
						await execute(`webpmux -set exif ./${ran}.exif ${media} -o ${rano}`, async(err) => {
							if(err) return reply('Houve falha !')
							await client.sendMessage(from, fs.readFileSync(rano), sticker)
							fs.unlinkSync(rano)
							fs.unlinkSync(`${ran}.exif`)
						})
					} else return reply('*Responda apenas figurinhas*')
					break
				case 'nstiker':
				case 'nsticker':
					teks = body.slice(10)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
						if(teks.split('|').length < 2) return reply('*Diga o nome do autor e pacote usando | para separa-los*')
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						gb1 = teks.split('|')[0].trim()
						gb2 = teks.split('|')[1].trim()
						ran = getRandom('.exif')
						buff = await stickerImgTag(media, gb1, gb2, ran)
						client.sendMessage(from, buff.result, sticker, {quoted: mek})
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
						if(teks.split('|').length < 2) return reply('*Diga o nome do autor e pacote usando | para separa-los*')
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						gb1 = teks.split('|')[0].trim()
						gb2 = teks.split('|')[1].trim()
						ran = getRandom('.exif')
						buff = await stickerVidTag(media, gb1, gb2, ran)
						client.sendMessage(from, buff.result, sticker, {quoted: mek})
					}
					break
				case 'antipv':
					try {
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiPv) return reply('Ja esta ativo')
						antipv.push('Ativado')
						fs.writeFileSync('./src/database/antipv.json', JSON.stringify(antipv))
						reply('Ativou com sucesso o recurso de antipv no bot✔️')
					} else if (Number(args[0]) === 0) {
						fs.writeFileSync('./src/database/antipv.json', JSON.stringify([]))
						reply('Desativou com sucesso o recurso de antipv no bot✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						console.log(e)
					}
                break
				case 'fechargp':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						client.groupSettingChange (from, GroupSettingChange.messageSend, true);
						reply('*✅ Grupo fechado com sucesso ✅*')
					} catch {
						console.log(e)
					}
					break
				case 'abrirgp':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						client.groupSettingChange (from, GroupSettingChange.messageSend, false);
						reply('*✅ Grupo Aberto com sucesso ✅*')
					} catch {
						console.log(e)
					}
					break
				case 'gpvotohelp':
					reply(gpvotohelp)
					break
				case 'votohelp':
					reply(votohelp)
					break
					case 'gpinitvoto':
				case 'gpvotoinit':
					if(!isGroupAdmins) return reply(mess.only.admin)
					if(!isGroup) return reply(mess.only.group)
					if(isVotoGroupActived) return reply('*Uma votação de grupo já foi iniciada*')
					teks = body.slice(12).split('|')
					if(teks.length <= 2) return reply('*Deve ter pelo menos 2 opções e um tema para iniciar uma votação*')
					t1 = teks[0]
					optsdata = []
					optsteks = ''
					for(i=1;i<teks.length;++i){
						optsdata.push({
							nome: teks[i].trim(),
							votou: []
						})
						if(i == teks.length) optsteks += `*${i}) ${teks[i].trim()}*`
						else optsteks += `*${i}) ${teks[i].trim()}*\n`
					}
					votodata = {
						group_id: from,
						tema: t1.trim(),
						votos: optsdata
					}
					gpvoto.push(votodata)
					fs.writeFileSync('./src/database/gpvoto.json', JSON.stringify(gpvoto, null, 2) + '\n')
					reply(`*Votação de grupo iniciada*\n*Tema: ${t1.trim()}*\n\n*Opções:*\n${optsteks}`)
					break
				case 'gpvotoclear':
				case 'gpclearvoto':
					if(!isGroupAdmins) return reply(mess.only.admin)
					if(!isGroup) return reply(mess.only.group)
					if(!isVotoGroupActived) return reply('*Uma votação de grupo não foi iniciada*')
					var ind = votoactivegp.indexOf(from)
					for(i=0;i< gpvoto[ind].votos.length;++i) gpvoto[ind].votos[i].votou = []
					fs.writeFileSync('./src/database/gpvoto.json', JSON.stringify(gpvoto, null, 2) + '\n')
					reply(`*Votação de grupo resetada com o tema ${gpvoto[ind].tema}*`)
					break
				case 'gpstatusvoto':
				case 'gpvotostatus':
					if(!isGroup) return reply(mess.only.group)
					if(!isVotoGroupActived) return reply('*Uma votação de grupo não foi iniciada*')
					var ind = votoactivegp.indexOf(from)
					opts = ''
					for(i=0;i<gpvoto[ind].votos.length;++i) {
						opts += `*${i+1}) ${gpvoto[ind].votos[i].nome}*\n*Votaram: ${gpvoto[ind].votos[i].votou.length}*\n\n`
					}
					reply(`*Status de voto*\n*Tema: ${gpvoto[ind].tema}*\n*Opções:*\n${opts}`)
					break
				case 'gpvoto':
					if(!isGroup) return reply(mess.only.group)
					if(!isVotoGroupActived) return reply('*Nenhuma votação foi iniciada*')
					var ind = votoactivegp.indexOf(from)
					votenum = args[0] - 1
					if(isNaN(votenum)) return reply('*Isso não é uma opção*')
					allnumvoted = []
					for(let obj of gpvoto[ind].votos) {
						for(let nums of obj.votou) {
							allnumvoted.push(nums)
						}
					}
					if(allnumvoted.indexOf(sender) >= 0) return reply('*Você já votou amigão*')
					try {
						gpvoto[ind].votos[votenum].votou.push(sender)
						fs.writeFileSync('./src/database/gpvoto.json', JSON.stringify(gpvoto, null, 2) + '\n')
						reply('*Voto registrado com sucesso*')
					} catch {
						reply('*Não foi encontrado essa opção*')
					}
					break
				case 'gpfinishvoto':
				case 'gpvotofinish':
					if(!isGroupAdmins) return reply(mess.only.admin)
					if(!isGroup) return reply(mess.only.group)
					if(!isVotoGroupActived) return reply('*Nenhuma votação foi iniciada*')
					var ind = votoactivegp.indexOf(from)
					teks = `*Opções:*\n`
					for(i=0;i<gpvoto[ind].votos.length;++i) {
						teks += `*${i+1}) ${gpvoto[ind].votos[i].nome}*\n*Votos: ${gpvoto[ind].votos[i].votou.length}*\n\n`
					}
					reply(`*Votação encerrada*\n\n*Tema: ${gpvoto[ind].tema}*\n\n${teks}`)
					fs.writeFileSync('./src/database/gpvoto.json', JSON.stringify([], null, 2) + '\n')
					break
				case 'gpbroadvoto':
				case 'gpvotobroad':
					if(!isGroupAdmins) return reply(mess.only.admin)
					if(!isGroup) return reply(mess.only.group)
					if(!isVotoGroupActived) return reply('*Nenhuma votação foi iniciada*')
					var ind = votoactivegp.indexOf(from)
					teks = `*Opções:*\n`
					for(i=0;i<gpvoto[ind].votos.length;++i) {
						teks += `*${i+1}) ${gpvoto[ind].votos[i].nome}*\n`
					}
					for(let obj of groupMembers) {
						client.sendMessage(obj.jid, `[ 🗳️ Transmissão de votação 🗳️ ]\n\n@${sender.split('@')[0]} iniciou uma votação no grupo ${groupName} use ${prefix}votar (opção) para votar e ${prefix}votostatus para ver os resultados\n
Tema: *${gpvoto[ind].tema}*\n\n${teks}`, extendedText, {contextInfo: { mentionedJid: [sender]}})
					}
					break
				case 'initvoto':
				case 'votoinit':
					if(!isOwner) return reply(mess.only.ownerB)
					if(isVotoInit) return reply('*Uma votação já foi iniciada*')
					teks = body.slice(10).split('|')
					if(teks.length <= 2) return reply('*Deve ter pelo menos 2 opções e um tema para iniciar uma votação*')
					t1 = teks[0]
					optsdata = []
					optsteks = ''
					for(i=1;i<teks.length;++i){
						optsdata.push({
							nome: teks[i].trim(),
							votou: []
						})
						if(i == teks.length) optsteks += `*${i}) ${teks[i].trim()}*`
						else optsteks += `*${i}) ${teks[i].trim()}*\n`
					}
					votodata = {
						tema: t1.trim(),
						votos: optsdata
					}
					voto.push(votodata)
					fs.writeFileSync('./src/database/voto.json', JSON.stringify(voto, null, 2) + '\n')
					reply(`*Votação geral iniciada*\n*Tema: ${t1.trim()}*\n\n*Opções:*\n${optsteks}`)
					break
				case 'votoclear':
				case 'clearvoto':
					if(!isOwner) return reply(mess.only.ownerB)
					if(!isVotoInit) return reply('*Nenhuma votação foi iniciada*')
					for(i=0;i< voto[0].votos.length;++i) gpvoto[0].votos[i].votou = []
					fs.writeFileSync('./src/database/voto.json', JSON.stringify(voto, null, 2))
					reply(`*Votação geral resetada com o tema ${voto[0].tema}*`)
					break
				case 'statusvoto':
				case 'votostatus':
					if(!isVotoInit) return reply('*Nenhuma votação foi iniciada*')
					opts = ''
					for(i=0;i<voto[0].votos.length;++i) {
						opts += `*${i+1}) ${voto[0].votos[i].nome}*\n*Votaram: ${voto[0].votos[i].votou.length}*\n\n`
					}
					reply(`*Status de voto*\n*Tema: ${voto[0].tema}*\n*Opções:*\n${opts}`)
					break
				case 'voto':
					if(!isVotoInit) return reply('*Nenhuma votação foi iniciada*')
					votenum = args[0] - 1
					if(isNaN(votenum)) return reply('*Isso não é uma opção*')
					allnumvoted = []
					for(let obj of voto[0].votos) {
						for(let nums of obj.votou) {
							allnumvoted.push(nums)
						}
					}
					if(allnumvoted.indexOf(sender) >= 0) return reply('*Você já votou amigão*')
					try {
						voto[0].votos[votenum].votou.push(sender)
						fs.writeFileSync('./src/database/voto.json', JSON.stringify(voto, null, 2) + '\n')
						reply('*Voto registrado com sucesso*')
					} catch {
						reply('*Não foi encontrado essa opção*')
					}
					break
				case 'finishvoto':
				case 'votofinish':
					if(!isOwner) return reply(mess.only.ownerB)
					if(!isVotoInit) return reply('*Nenhuma votação foi iniciada*')
					teks = `*Opções:*\n`
					for(i=0;i<voto[0].votos.length;++i) {
						teks += `*${i+1}) ${voto[0].votos[i].nome}*\n*Votos: ${voto[0].votos[i].votou.length}*\n\n`
					}
					reply(`*Votação encerrada*\n\n*Tema: ${voto[0].tema}*\n\n${teks}`)
					fs.writeFileSync('./src/database/voto.json', JSON.stringify([], null, 2) + '\n')
					break
				case 'broadvoto':
				case 'votobroad':
					if(!isOwner) return reply(mess.only.ownerB)
					if(!isVotoInit) return reply('*Nenhuma votação foi iniciada*')
					teks = `*Opções:*\n`
					for(i=0;i<voto[0].votos.length;++i) {
						teks += `*${i+1}) ${voto[0].votos[i].nome}*\n`
					}
					anu = await client.chats.all()
					for(let obj of anu) {
						client.sendMessage(obj.jid, `[ 🗳️ Transmissão de votação 🗳️ ]\n\n@${sender.split('@')[0]} iniciou uma votação geral use ${prefix}votar (opção) para votar e ${prefix}votostatus para ver os resultados\n
Tema: ${voto[0].tema}\n\n${teks}`, extendedText, {contextInfo: { mentionedJid: [sender]}})
					}
					break
				case 'addowner':
					if(sender.split('@')[0] != OriginalOwner) return reply('*Você não é autorizado pra usar esse comando*')
					if(isNaN(args[0])) return reply('*Diga o número sem espaço, traço ou +*')
					teks = args[0]+'@s.whatsapp.net'
					if(ownerNumber.indexOf(args[0]+'@s.whatsapp.net') >= 0) return reply('*Esse número já existe na lista*')
					ownerNumber.push(teks)
					fs.writeFileSync('./src/database/ownerNumber.json', JSON.stringify(ownerNumber))
					reply('*Número adicionado aos proprietários*')
					break
				case 'rmowner':
					if(sender.split('@')[0] != OriginalOwner) return reply('*Você não é autorizado pra usar esse comando*')
					if(isNaN(args[0])) return reply('*Diga o número sem espaço, traço ou +*')
					teks = args[0]+'@s.whatsapp.net'
					if(ownerNumber.indexOf(args[0]+'@s.whatsapp.net') < 0) return reply('*Esse número não existe na lista*')
					pos = ownerNumber.indexOf(args[0]+'@s.whatsapp.net')
					ownerNumber.splice(pos, 1)
					fs.writeFileSync('./src/database/ownerNumber.json', JSON.stringify(ownerNumber))
					reply('*Número removido dos proprietários*')
					break
				case 'byeadd':
					if(!isGroup) return reply(mess.only.group)
					if(!isOwner) return reply(mess.only.admin)
					if(args.length < 1) return reply('*Escreva a mensagem de saída*')
					teks = body.slice(8)
					if(isByed) {
						var ind = groupIdBye.indexOf(from)
						bye_group[ind].msg = teks
						fs.writeFileSync('./src/database/bye_group.json', JSON.stringify(bye_group, null, 2) + '\n')
						reply('*Mensagem de saída alteradas com sucesso!*')
					} else {
						var json = {
							jid: from,
							msg: teks
						}
						bye_group.push(json)
						fs.writeFileSync('./src/database/bye_group.json', JSON.stringify(bye_group, null, 2) + '\n')
						reply('*Mensagem de saída criada com sucesso!*')
					}
					break
				case 'welcomeadd':
					if(!isGroup) return reply(mess.only.group)
					if(!isOwner) return reply(mess.only.admin)
					if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
					teks = body.slice(12)
					if(isWelcomed) {
						var ind = groupIdWelcomed.indexOf(from)
						welcome_group[ind].msg = teks
						fs.writeFileSync('./src/database/welcome_group.json', JSON.stringify(welcome_group, null, 2) + '\n')
						reply('*Mensagem de boas vindas alteradas com sucesso!*')
					} else {
						var json = {
							jid: from,
							msg: teks
						}
						welcome_group.push(json)
						fs.writeFileSync('./src/database/welcome_group.json', JSON.stringify(welcome_group, null, 2) + '\n')
						reply('*Mensagem de boas vindas criada com sucesso!*')
					}
					break
				case 'welcomehelp':
					if(!isGroup) return reply(mess.only.group)
					if(!isOwner) return reply(mess.only.admin)
					reply(`*Bem vindo ao menu de ajuda do sistema de boas vindas de grupos o comando ${prefix}welcomeadd mais um texto cria uma mensagem de boas vindas para você porém ele vem com algumas variáveis para deixar mais decorado, veja abaixo:*\n`
					+ `\n*#data#* - _mostra a data atual_`
					+ `\n*#hora#* - _mostra a hora atual_`
					+ `\n*#botnum#* - _mostra o numero do bot_`
					+ `\n*#user#* - _mostra o nome do usuário que entrar_`
					+ `\n*#numuser#* - _mostra o número do usuário que entrar_`
					+ `\n*#groupname#* - _mostra o nome do grupo_`)
					break
				case 'dontback':
					if (!isGroup) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						var ind = dbids.indexOf(from)
						if(isDontBack) {
							if(dontback[ind].actived) return reply('*Já está ativo*')
							dontback[ind].actived = true
						} else {
							dontback.push({
								groupId: from,
								actived: true,
								number: []
							})
						}
						fs.writeFileSync('./src/database/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
						reply(`Ativou com sucesso o recurso de don't back neste grupo✔️`)
					} else if (Number(args[0]) === 0) {
						var ind = dbids.indexOf(from)						
						if(isDontBack) {
							dontback[ind].actived = false
						} else {
							dontback.push({
								groupId: from,
								actived: false,
								number: []
							})
						}
						fs.writeFileSync('./src/database/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
						reply(`Desativou com sucesso o recurso de don't back neste grupo✔️`)
					} else {
						reply('1 para ativar, 0 para desativar')
					}
				break
				case 'dbackadd':
					if (!isGroup) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
					if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
					var ind = dbids.indexOf(from)
					if(isDontBack) {
						var numind = dontback[ind].number.indexOf(args[0])
						if(numind >= 0) return reply('*Esse Número ja esta incluso*')
						dontback[ind].number.push(args[0])
					} else {
						dontback.push({
							groupId: from,
							actived: false,
							number: [args[0]]
						})
					}
					fs.writeFileSync('./src/database/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
					reply(`*Número adicionado a lista de don't back*`)

				break
				case 'dbackrm':
					if (!isGroup) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
					if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
					var ind = dbids.indexOf(from)
					if(!isDontBack) return reply('*Nenhum Número não foi adicionado*')
					var numind = dontback[ind].number.indexOf(args[0])
					if(numind < 0) return reply('*Esse número não está incluso*')
					dontback[ind].number.splice(numind, 1)
					fs.writeFileSync('./src/database/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
					reply(`*Número removido a lista de don't back*`)
				break
				case 'dbacklist':
					if (!isGroup) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var ind = dbids.indexOf(from)
					if(!isDontBack) return reply('*Nenhum Número não foi adicionado*')
					teks = '*Números que vou moer na porrada se voltar 😡:*\n'
					for(i=0;i<dontback[ind].number.length;++i) {
						teks += `➤ *${dontback[ind].number[i]}*\n`
					}
					teks += '*Esses ai vou descer meu martelo do ban 🥵*'
					reply(teks)
				break
				case 'changepack':
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Hmmmm')
					sticker_pack.set_pack = body.slice(12)
					fs.writeFileSync('./src/database/sticker_pack.json', JSON.stringify(sticker_pack, null, 2) + '\n')
					reply(`*Agora o nome do pacote das stickers é ${sticker_pack.set_pack}*`)
				break
				case 'groupack':
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (sticker_pack.groupname) return reply('Ja esta ativo')
						sticker_pack.groupname = true
						fs.writeFileSync('./src/database/sticker_pack.json', JSON.stringify(sticker_pack, null, 2) +'\n')
						reply('Ativou com sucesso o recurso de sticker com nome de grupo✔️')
					} else if (Number(args[0]) === 0) {
						sticker_pack.groupname = false
						fs.writeFileSync('./src/database/sticker_pack.json', JSON.stringify(sticker_pack, null, 2) +'\n')
						reply('Desativou com sucesso o recurso de sticker com nome de grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
				case 'addpalavra':
					if(!isOwner) return reply(mess.only.ownerB)
					if(!isAntiPalavra) return reply('*Ative o anti palavra no grupo*')
					if(args.length < 1) return reply('*Cade a palavra animal*')
					if(isListAntiPalavra(args[0])) return reply('*Já esta incluso essa palavra*')
					if(palavrasid.indexOf(from) >= 0) {
						ind = palavrasid.indexOf(from)
						listantipalavra[ind].palavras.push(args[0])
						fs.writeFileSync('./src/database/listaantipalavra.json', JSON.stringify(listantipalavra, null, 2) + '\n')
						reply(`*✔️ Adicionada com sucesso a palavra ${args[0]} na lista de anti palavras ✔️*`)
					}
					break
				case 'rmpalavra':
					if(!isOwner) return reply(mess.only.ownerB)
					if(!isAntiPalavra) return reply('*Ative o anti palavra no grupo*')
					if(args.length < 1) return reply('*Cade a palavra animal*')
					if(!isListAntiPalavra(args[0])) return reply('*Não esta incluso essa palavra*')
					if(palavrasid.indexOf(from) >= 0) {
						ind = palavrasid.indexOf(from)
						indpal = listantipalavra[ind].palavras.indexOf(args[0])
						if(indpal >= 0) {
							listantipalavra[ind].palavras.splice(indpal, 1)
							fs.writeFileSync('./src/database/listaantipalavra.json', JSON.stringify(listantipalavra, null, 2) + '\n')
							reply(`*✔️ Removida com sucesso a palavra ${args[0]} na lista de anti palavras ✔️*`)
						} else return reply('*Esta palavra não está inclusa*')
					}
					break
					case 'listpalavra':
						if(!isAntiPalavra) return reply('*Ative o anti palavra no grupo*')
						ind = palavrasid.indexOf(from)
						teks = '*🚫 A lista das palavras proibidas no grupo são: 🚫*\n'
						for(i = 0; i < listantipalavra[ind].palavras.length; i++) {
							teks += `❧ ${listantipalavra[ind].palavras[i]}\n`
						}
						reply(teks)
						break
				case 'antipalavra':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiPalavra) return reply('Ja esta ativo')
							antipalavra.push(from)
							if(palavrasid.indexOf(from) < 0) {
								listantipalavra.push({
									jid: from,
									palavras: []
								})
							}
							fs.writeFileSync('./src/database/antipalavra.json', JSON.stringify(antipalavra))
							fs.writeFileSync('./src/database/listaantipalavra.json', JSON.stringify(listantipalavra, null, 2) + '\n')
							reply('Ativou com sucesso o recurso de anti palavras neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antipalavra.splice(from, 1)
							fs.writeFileSync('./src/database/antipalavra.json', JSON.stringify(antipalavra))
							reply('Desativou com sucesso o recurso de anti palavras neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch (e) {
						console.log(e)
						reply('*Error*')
					}
                break
				case 'antifake':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./src/database/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/database/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Error')
					}
                break
				case 'ytmp4':
					try{
						if(args.length < 1) return reply('CADE O LINK ANIMAL')
						var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
						if(!args[0].match(p)) return reply('❌ Isso não é um link do youtube ❌')
						res1 = await getK(args[0])
						vid = await yta(res1.data.links.mp4.auto.k, res1.data.vid)
						reply('*⬇️ Baixando vídeo ⬇️*')
						buff = await getBuffer(vid.dlink)
						client.sendMessage(from, buff, video, {mimetype: Mimetype.mp4, quoted: mek})
					} catch (e){
						console.log(e)
						reply('Error')
					}
					break
				case 'ytmp3':
					try{
						if(args.length < 1) return reply('CADE O LINK ANIMAL')
						var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
						if(!args[0].match(p)) return reply('❌ Isso não é um link do youtube ❌')
						res1 = await getK(args[0])
						vid = await yta(res1.data.links.mp3.mp3128.k, res1.data.vid)
						buff = await getBuffer(vid.dlink)
						reply('*🥳🥳 Download completo, enviando... 🥳🥳*')
						client.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek})
					} catch {
						reply('Error')
					}
					break
					case 'play':
						if( args.length < 1) return reply('*E o texto animal*')
						reply('*🔍Procurando Música aguarde🔎*')
						teks = body.slice(6)
						anu = await fetchJson(`http://brizas-api.herokuapp.com/sociais/youtubesrc?apikey=BOT SOPHIA&query=${teks}`)
						date = anu.resultados[0]
						dated = `*✅ Música encontrada ✅*\n*Titulo: ${date.title}*\n*Link: ${date.link}*\n*Duração: ${date.duration} segs*\n*Views: ${date.views}segs*\n*Canal:${date.channel.name}*`
						buff = await getBuffer(date.thumbnail)
						await client.sendMessage(from, buff, image, {quoted: mek, caption: dated})
						var dur = date.duration
						if(dur > 360) return reply('*Apenas músicas com 6 minutos de duração*')
						reply('*⬇️ Baixando música ⬇️*')
						try {
							anumusic = await fetchJson(`http://brizas-api.herokuapp.com/sociais/ytmp3?apikey=BOT SOPHIA&url=${date.link}`)
							buffmusic = await getBuffer(anumusic.link)
							await reply('*🥳🥳 Download completo, enviando... 🥳🥳*')
							client.sendMessage(from, buffmusic, audio, {quoted: mek, mimetype: Mimetype.mp4Audio})
						}
						catch {
							reply('*Falha ao baixar música, instale por meio do playv2*')
						}
					break
				case 'playv2':
					if( args.length < 1) return reply('*E o texto animal*')
						reply('*🔍Procurando Música aguarde🔎*')
						teks = body.slice(8)
						anu = await fetchJson(`http://brizas-api.herokuapp.com/sociais/youtubesrc?apikey=BOT SOPHIA&query=${teks}`)
						date = anu.resultados[0]
						dated = `*✅ Música encontrada ✅*\n*Titulo: ${date.title}*\n*Link: ${date.link}*\n*Duração: ${date.duration} segs*\n*Views: ${date.views}segs*\n*Canal:${date.channel.name}*`
						buff = await getBuffer(date.thumbnail)
						await client.sendMessage(from, buff, image, {quoted: mek, caption: dated})
						var dur = date.duration
						if(dur > 360) return reply('*Apenas músicas com 6 minutos de duração*')
						reply('*⬇️ Baixando música ⬇️*')
					try {
						ytDownlodMp3(date.link).then(async res => {
							buffmusic = await getBuffer(res.url)
							await reply('*🥳🥳 Download completo, enviando... 🥳🥳*')
							client.sendMessage(from, buffmusic, audio, {quoted: mek, mimetype: Mimetype.mp4Audio})
						})
					} catch {

					}
					break
				case 'blacklist':
					try{
						mem_id = []
						list = 'Lista das pessoas que não obedeço 🤏😎: \n'
						for( i = 0; i < blockeds.length; i++) {
							list += '@'+blockeds[i].split('@')[0]+'\n'
							mem_id += blockeds[i]
						}
					client.sendMessage(from, list, extendedText, {quoted: mek, contextInfo: { "mentionedJid": mem_id}})
				} catch {
					reply('*Erro ao bloquear usuario*')
				}
					break
				case 'block':
					try{
						if(sender.split('@')[0] != OriginalOwner) return reply('Apenas meu proprietário oficial pode usar esse comando')
						if(!isOwner) return reply('Somente meu propietário e autorizados podem usar esse comando')
						if(args.length <1 ) return reply('Cade o número?')
						num = args[0]
						if(args[0].startsWith('@')){ num = num.slice(1)}
						if(isNaN(num)) return reply('Isso não é um numero de telefone')
						if(ownerNumber.includes(num+'@s.whatsapp.net')) return reply('Não posso bloquear meu propietário')
						if(blockeds.includes(num+'@s.whatsapp.net')) return reply('Ja está bloqueado')
						blockeds.push(num+'@s.whatsapp.net')
						fs.writeFileSync('./src/database/blocklist.json', JSON.stringify(blockeds))
						client.blockUser([num+'@s.whatsapp.net'], 'add')
						reply('*✅ Bloqueado com sucesso ✅*')
					} catch {
						reply('*Erro ao bloquear usuario*')
					}
					break
				case 'unblock':
					try{
						if(sender.split('@')[0] != OriginalOwner) return reply('Apenas meu proprietário oficial pode usar esse comando')
						if(!isOwner) return reply('Somente meu propietário e autorizados podem usar esse comando')
						if(args.length <1 ) return reply('Cade o número?')
						num = args[0]
						if(num.startsWith('@')){ num = num.slice(1)}
						if(isNaN(num)) return reply('Isso não é um numero de telefone')
						if(!blockeds.includes(num+'@s.whatsapp.net')) return reply('Ja está desbloqueado')
						var indice = blockeds.indexOf(num+'@s.whatsapp.net');
						blockeds.splice(indice, 1);
						fs.writeFileSync('./src/database/blocklist.json', JSON.stringify(blockeds))
						client.blockUser([num+'@s.whatsapp.net'], 'remove')
						reply('*✅ Desbloqueado com sucesso ✅*')
					} catch {
						reply('*Erro ao bloquear usuario*')
					}
					break
				case 'hidemarcar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					value = body.slice(12)
					group = await client.groupMetadata(from)
					member = group['participants']
					mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
					case 'attp':
						try{                 
						 if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}stc Daddy*`)
							url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp1?apikey=BOT SOPHIA&text=${body.slice(6)}`)
							attp2 = await getBuffer(url)
							client.sendMessage(from, attp2, sticker, {quoted: mek})
						} catch {
							reply('Erro')
						}
					break
				case 'gostosa':
					case 'gostoso':
						try {
						buff = await getBuffer('https://vozdabahia.com.br/wp-content/uploads/2020/06/1_mia2-9308495.jpg')
						r = Math.floor(Math.random() * 100 + 0)
						if(args.length < 1) {
							if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
							else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
						}
						else { num1 = args[0] 
							if(!isNaN(num1.slice(1)))
							{
								if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
							}
						}
						if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
						client.sendMessage(from, `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						setTimeout(async function () {
							if(r == 0) return client.sendMessage(from, buff, image, {caption: `*O @${num1.slice(0, -15)} parece que pegou fogo e foi apagado com gasolina kkkkkkkk, tu é mt feio em neguin kkkkkk*`,quoted: mek, contextInfo: { mentionedJid: [num1]}})
							if(r > 0 && r <= 33) return client.sendMessage(from, buff, image, {caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Tão feio que pra dar role com os amigos(as), eles tem que falar com a mãe "Seu jorge por favor me empresta o dragão" 🤣🤣*`,quoted: mek, contextInfo: { mentionedJid: [num1]}})
							if(r > 33 && r <= 40) return client.sendMessage(from, buff, image, {caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Parece mais um sirigueijo, um caranguejo amassado kkkkkkkk*`,quoted: mek, contextInfo: { mentionedJid: [num1]}})
							if(r > 40 && r <= 66) return client.sendMessage(from, buff, image, {caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Bonitinho você ein 😳👉👈*`, quoted: mek, contextInfo: { mentionedJid: [num1]}})
							if(r > 66 && r <= 100) return client.sendMessage(from, buff, image, {caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Passa o zap o-onii-chan 😳👉👈*`, quoted: mek, contextInfo: { mentionedJid: [num1]}})
						}, 3000)
						} catch {
							reply('Deu erro')
						}
						break
				case 'ban':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
						num1 = mek.message.extendedTextMessage.contextInfo.participant
						client.sendMessage(from, `Banindo ${num1.split('@')[0]}...`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						client.groupRemove(from, [num1])
					}
					else { 
						reply('Responda a mensagem da pessoa')
					}
					break
				case 'resizevid':
					try{
					
					if ((isMedia && mek.message.videoMessage.seconds < 15 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 15) && args.length < 4) {
						if(args.length < 4){framerate = 12}
						else{framerate = args[0]}
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.mp4')
						lag = args[0]
						alt = args[1]
						reply(mess.wait)
						execute(`ffmpeg -i ${media} -filter_complex "[0:v] scale=${lag}:${alt},pad=${lag}:${alt}:-1:-1:color=white@0.0" -f mp4 ${ran}`, async function(err, res){
							if(err) return console.log(err)
							client.sendMessage(from, fs.readFileSync(ran), video, { mimetype: Mimetype.gif, quoted: mek})
							fs.unlinkSync(media)	
							fs.unlinkSync(ran)
						})
					} else {
						reply('*Diga as dimensões com largura e altura e o video tem que ter 15 segundo*')
					}
					} catch{
						reply('Deu erro')
					}
					break
				case 'gay':
					try {
					r = Math.floor(Math.random() * 100 + 0)
					if(args.length < 1) {
						if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
						else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
					}
					else { num1 = args[0] 
						if(!isNaN(num1.slice(1)))
						{
							if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
						}
					}
					if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
					client.sendMessage(from, `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
					setTimeout(async function () {
						if(num1.includes(OriginalOwner)) return reply('*Meu criador não é gay*\n*Mas pelo oq eu vi aq os dados me dizem ao contrário sobre você🤨*')
						if(r == 0) return client.sendMessage(from, `*O @${num1.slice(0, -15)} não é gay*\n*mas talvez você seja 🤨`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 0 && r <= 33) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gay*\n*perdeu o bv com o amigo*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 33 && r <= 66) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gay*\n*ta devendo 50 pro traveco 🤣🤣*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 66 && r <= 100) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gay*\n*da o butico por 5 conto pra pagar o agiota 🤣🤣*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
					}, 3000)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'gado':
					try {
					r = Math.floor(Math.random() * 100 + 0)
					if(args.length < 1) {
						if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
						else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
					}
					else { num1 = args[0] 
						if(!isNaN(num1.slice(1)))
						{
							if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
						}
					}
					if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
					client.sendMessage(from, `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
					setTimeout(async function () {
						if(num1.includes(OriginalOwner)) return reply('*Meu criador não é gado*\n*Mas pelo oq eu vi aq os dados me dizem ao contrário sobre você🤨*')
						if(r == 0) return client.sendMessage(from, `*O @${num1.slice(0, -15)} não é gado*\n*mas talvez você seja 🤨`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 0 && r <= 33) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gado*\n*o que fala "ela é diferente poh"*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 33 && r <= 66) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gado*\n*comprou água de banho da belle delphine ksksksk*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 66 && r <= 100) return client.sendMessage(from, `*O @${num1.slice(0, -15)} é ${r}% gado*\n*esse aí gastou todo o auxílio em pack do pé kkkkkk🤣🤣*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
					}, 3000)
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'antilink':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiLink) return reply('Ja esta ativo')
							antilink.push(from)
							fs.writeFileSync('./src/database/antilink.json', JSON.stringify(antilink))
							reply('Ativou com sucesso o recurso de antilink neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antilink.splice(from, 1)
							fs.writeFileSync('./src/database/antilink.json', JSON.stringify(antilink))
							reply('Desativou com sucesso o recurso de antilink neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'antilinkhard':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiLinkHard) return reply('Ja esta ativo')
							antilinkhard.push(from)
							fs.writeFileSync('./src/database/antilinkhard.json', JSON.stringify(antilinkhard))
							reply('Ativou com sucesso o recurso de antilink hardcore neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antilinkhard.splice(from, 1)
							fs.writeFileSync('./src/database/antilinkhard.json', JSON.stringify(antilinkhard))
							reply('Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'cheguei':
					if(!isGroup) return reply(mess.only.group)
					if(isGroupAdmins) return reply('Olá melhor adm do mundo como vai? espero que bem 🥰')
					if(isBotGroupAdmins) return reply('Ninguém liga membro comum 😎🤏')
					reply('Que legal que pena que ninguém liga 😒')
					break
				case 'destrava':
					if(isGroup)
					{
						if(isGroupAdmins)
						{
							client.sendMessage(from, destrava(), text)
							client.sendMessage(from, destrava2(), text)
							client.sendMessage(from, destrava(), text)
							client.sendMessage(from, destrava2(), text)
							client.sendMessage(from, destrava(), text)
							client.sendMessage(from, destrava2(), text)
							client.sendMessage(from, destrava(), text)
							client.sendMessage(from, destrava2(), text)
						} 
						else return reply(mess.only.admin)
					}
					else{
						client.sendMessage(from, destrava(), text)
						client.sendMessage(from, destrava2(), text)
						client.sendMessage(from, destrava(), text)
						client.sendMessage(from, destrava2(), text)
						client.sendMessage(from, destrava(), text)
						client.sendMessage(from, destrava2(), text)
						client.sendMessage(from, destrava(), text)
						client.sendMessage(from, destrava2(), text)
					}
					break

				case 'criador':
					client.sendMessage(from, {displayname: "PENTEST", vcard: vcard}, MessageType.contact, { quoted: mek})
       				client.sendMessage(from, 'Este é o número do meu proprietário >_<, não envie spam ou bloqueio você',MessageType.text, { quoted: mek} )
				break
				case 'help':
				case 'comandos':
				case 'menu':
					await client.sendMessage(from, fs.readFileSync('./menu.mp3'), audio, {mimetype:Mimetype.mp4Audio, quoted:mek, ptt: true})
					client.sendMessage(from, help(prefix), text)
					break
				case 'pack':
					buffer = await getBuffer(`https://i.imgur.com/5ksFWsr.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: pack(prefix)})
				break
				case 'shadow':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(8)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=shadow&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'ocean':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(8)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=underwater_ocean&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'coffe':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(7)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=coffee&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'lovepaper':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(11)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=love_paper&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch {
						reply('Deu erro, tente novamente :/')
					}
				break
				case '8bits':
					var gh = body.slice(8)
					var gbl1 = gh.split("|")[0]
					var gbl2 = gh.split("|")[1]
					if (args.length < 1) return reply('Cadê o texto, hum')
					try {
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=bit8&text1=${gbl1}&text2=${gbl2}&apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(anu.result)
						client.sendMessage(from, buffer, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'bpaper':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(8)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`tobz-api.herokuapp.com/api/photooxy?theme=burn_paper&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'glowmetal':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(11)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`tobz-api.herokuapp.com/api/photooxy?theme=metalic_text_glow&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'harrytext':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(11)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`tobz-api.herokuapp.com/api/photooxy?theme=harry_potter&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'woodblock':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					teks = `${body.slice(11)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
						anu = await fetchJson(`tobz-api.herokuapp.com/api/photooxy?theme=wood_block&text=${teks}&apikey=BotWeA`, {method: 'get'})
						buff = await getBuffer(anu.result)
						client.sendMessage(from, buff, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'textph':
					var gh = body.slice(8)
					var gbl1 = gh.split("|")[0]
					var gbl2 = gh.split("|")[1]
					if (args.length < 1) return reply('Cadê o texto, hum')
					try{
						anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
						buffer = await getBuffer(anu.result)
						client.sendMessage(from, buffer, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'glitch':
					var gh = body.slice(8)
					var tels3 = gh.split("|")[0]
					var tels4 = gh.split("|")[1]
					if (args.length < 1) return reply(mess.blank)
					try{
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${tels3}&text2=${tels4}&apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(anu.result)
						client.sendMessage(from, buffer, image, {quoted: mek})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'text3d':
              	    if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
                    teks = `${body.slice(8)}`
					if (teks.length > 10) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					try{
                    	buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
						client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
					 break
				
				case 'wolflogo':
                      if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
                      gh = body.slice(10)
                      gl1 = gh.split("|")[0]
					  gl2 = gh.split("|")[1]
					  try{
                      	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
                      	buff = await getBuffer(anu.result)
					  	client.sendMessage(from, buff, image, {quoted: mek})
					  }
					  catch{
						reply('Deu erro, tente novamente :/')
					  }
					 break
					case 'ninjalogo':
						if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
						gh = body.slice(11)
						gl1 = gh.split("|")[0]
						gl2 = gh.split("|")[1]
						try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
							buff = await getBuffer(anu.result)
							client.sendMessage(from, buff, image, {quoted: mek})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					case 'pubgtext':
						if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
						gh = body.slice(10)
						gl1 = gh.split("|")[0]
						gl2 = gh.split("|")[1]
						try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
							buff = await getBuffer(anu.result)
							client.sendMessage(from, buff, image, {quoted: mek})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					
					case 'idioma' :
						reply(lingua())
					break
					case 'signome':
						if (args.length < 1) return reply('você é sem nome ??')
						try{
							anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(9)}`, {method: 'get'})
							var codelang = `pt`
							var teks = anu.result
							translate(teks, {to: codelang}).then(res =>{
								reply('Seu nome:\n\n'+res.text)
							}).catch(err => {
								reply(`Ocorreu um erro :(`);
						    });
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					 case 'jokerlogo':
						if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					  teks = `${body.slice(11)}`
					  if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					  try{
					  	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${teks}&apikey=BotWeA`, {method: 'get'})
					  	buff = await getBuffer(anu.result)
					  	client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
					  }
					  catch{
						reply('Deu erro, tente novamente :/')
					  }
					   break
					case 'dwater':
					  if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					  teks = `${body.slice(8)}`
					  if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
					  try{
					  	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=dropwater&text=${teks}&apikey=BotWeA`, {method: 'get'})
					  	buff = await getBuffer(anu.result)
					  	client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
					  }
					  catch{
						reply('Deu erro, tente novamente :/')
					  }
					break
					case 'warfacetext':
					  if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					  teks = `${body.slice(13)}`
					  if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 25 letras', text, {quoted: mek})
					  try{
					  	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=warface&text=${teks}&apikey=BotWeA`, {method: 'get'})
					  	buff = await getBuffer(anu.result)
					  	client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
					  }
					  catch{
						reply('Deu erro, tente novamente :/')
					  }
					break
					case 'overtext':
					  if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					  teks = `${body.slice(10)}`
					  if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 25 letras', text, {quoted: mek})
					  try{
					  	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=overwatch&text=${teks}&apikey=BotWeA`, {method: 'get'})
					  	buff = await getBuffer(anu.result)
					  	client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
					  }
					  catch{
						reply('Deu erro, tente novamente :/')
					  }
					break
					case 'cstext':
					  if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
					  teks = `${body.slice(8)}`
					  if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 25 letras', text, {quoted: mek})
					  try{
					  	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=csgo&text=${teks}&apikey=BotWeA`, {method: 'get'})
					  	buff = await getBuffer(anu.result)
					  	client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
					  }
					  catch{
						reply('Deu erro, tente novamente :/')
					  }
					break
					case 'frase':
						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomquotes?apikey=BotWeA`, {quoted: 'get'})
						var la = `pt`
						var result = anu.quotes
						var author = anu.author
						try{
							translate(result,{to: la}).then(res =>{
								reply(`Frase de ${author}:\n`+res.text)
							}).catch(err => {
								reply('Ocorreu um erro😓')
							})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					case 'blood':
						if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
						teks = `${body.slice(7)}`
						if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
						try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=blood&text=${teks}&apikey=BotWeA`, {method: 'get'})
							buff = await getBuffer(anu.result)
							client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					case 'snow':
						if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
						teks = `${body.slice(6)}`
						if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
						try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=snow&text=${teks}&apikey=BotWeA`, {method: 'get'})
							buff = await getBuffer(anu.result)
							client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					case 'neonligth':
						if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
						teks = `${body.slice(11)}`
						if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
						try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_light&text=${teks}&apikey=BotWeA`, {method: 'get'})
							buff = getBuffer(anu.result)
							client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break
					case 'neontec':
						if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
						teks = `${body.slice(9)}`
						if (teks.length > 25) return client.sendMessage(from, 'Só pode apenas 10 letras', text, {quoted: mek})
						try{
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_technology&text=${teks}&apikey=BotWeA`, {method: 'get'})
							buff = await getBuffer(anu.result)
							client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
						}
						catch{
							reply('Deu erro, tente novamente :/')
						}
					break

				 case 'lionlogo':
                      if (args.length < 1) return reply('CADE A PRR DO TEXTO?')
                      gh = body.slice(10)
                      gl1 = gh.split("|")[0];
					  gl2 = gh.split("|")[1];
					  try{
                      	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
                      	buff = await getBuffer(anu.result)
					  	client.sendMessage(from, buff, image, {quoted: mek})
					  }
					  catch{
						reply('Deu erro, tente novamente :/')
					  }
                	break
				case 'nekoanime':
					try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hmmm nekos são lolis tbm amigo :)'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
				break
				case 'randomanime':
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Um anime aleatorio pra vc'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break
				case 'randomhentai':
			    try {
					if (isNsfw)
					{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Um hentai aleatorio pra vc :)'})
					}
					else if (!isGroup)
					{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Um hentai aleatorio pra vc :)'})
					}
					else return reply('❌Somente PV e com o nsfw ativado❌')
				} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply(' *ERROR* ')
				}
				break
				case 'randomshota':
					try{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hmmm ent quer dizer que gosta de shotas'})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'randomkiss':
					try{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Pena que o meu criador n ta ai😔'})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'randomhug':
					try{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nada que um abraço resolva😔'})
					}
					catch{
						reply('Deu erro, tente novamente :/')
					}
				break
				case 'nsfwblowjob':
				    try {
						if (isNsfw)
						{
							try{
								res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, {method: 'get'})
								buffer = await getBuffer(res.result)
								reply(mess.wait)
								client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nada melhor que um hentai animado :)'})
							}
							catch{
								reply('Deu erro, tente novamente :/')
							}
						}
						else if(!isGroup) {
							try{
								res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, {method: 'get'})
								buffer = await getBuffer(res.result)
								reply(mess.wait)
								client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nada melhor que um hentai animado :)'})
							}
							catch{
								reply('Deu erro, tente novamente :/')
							}
						}
						else return reply('❌Somente PV e com o nsfw ativado❌')
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break
				case 'nsfwneko':
					
					try {
						if (isNsfw) {
							try{
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hmmm, hentai de neko parece que estou sentido um furry'})
							}
							catch{
								reply('Deu erro, tente novamente :/')
							}
						}
						else if(!isGroup)
						{
							try{
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hmmm, hentai de neko parece que estou sentido um furry'})
							}
							catch{
								reply('Deu erro, tente novamente :/')
							}
						}
						else return reply('❌Somente PV e com o nsfw ativado❌')
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
				break
				case 'nsfwtrap':
					try {
						if (isNsfw) {
							try{
								res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA`, {method: 'get'})
								buffer = await getBuffer(res.result)
								client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hentai de traveco kkkkkk'})
							}
							catch{
								reply('Deu erro, tente novamente :/')
							}
						}
						else if(!isGroup) {
							try{
								res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA`, {method: 'get'})
								buffer = await getBuffer(res.result)
								client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hentai de traveco kkkkkk'})
							}
							catch{
								reply('Deu erro, tente novamente :/')
							}
						}
						else return reply('❌Somente PV e com o nsfw ativado❌')

					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break
				case 'nsfw':
						if (!isGroup) return reply('❌So usa isso pra ativar porno no grupo, no pv é liberado❌')
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (args.length < 1) return reply('E pra ativar ou n klr?')
						if (Number(args[0]) === 1) {
							if(isNsfw) return reply('Ja esta ativo')
							nsfw.push(from)
							fs.writeFileSync('./src/database/nsfw.json', JSON.stringify(nsfw))
							reply('Prontinho porno liberado guys :)')
						}
						else if (Number(args[0]) === 0) {
							nsfw.splice(from, 1)
							fs.writeFileSync('./src/database/nsfw.json', JSON.stringify(nsfw))
							reply('O corno do adm desativou o porno 😡')
						}
						else {
							reply('1 pra ativar e 0 pra desativar')
						}
				break
				case 'nethunter':
					buffer = await getBuffer(`https://i.imgur.com/uj6dP9Y.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: nethunter()})
				break
				case 'termux':
					buffer = await getBuffer(`https://i.imgur.com/NMk9sC4.png`)
					client.sendMessage(from, buffer, image, {caption: termux(prefix)})
					break
					case 'creator':
                 		 client.sendMessage(from, {displayname: "Lucas", vcard: vcard}, MessageType.contact, { quoted: mek})
       				 	 client.sendMessage(from, 'Este é o número do meu proprietário >_<, não envie spam ou eu te bloqueio',MessageType.text, { quoted: mek} )
           			break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nome do bot* : ${me.name}\n*Número do Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total de contatos bloqueados* : ${blocked.length}\n*O bot esta ativo desde* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Só uma foto mano')
					}
					break
				case 'sticker':
				case 'stiker':
					framerate = 12
					if(args[0] > 15) return reply('o limite são apenas 15 fps')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length < 2) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						gm(media).resize(512, 512, '!').write(ran, async function (){
							client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
						})
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length < 2) {
						if(args.length < 1){framerate = 12}
						else{framerate = args[0]}
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply('*Criando... ▬▬▬▬▭ 𝟫𝟤%*')
						execute(`ffmpeg -i ${media} -y -vcodec libwebp -filter_complex "[0:v] scale=512:512,fps=${framerate},pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${ran}`, function(err, res){
							if(err) return reply('Deu erro, tente novamente :/')
							client.sendMessage(from, fs.readFileSync(ran), sticker)
							client.sendMessage(from, `*Se a figurinha sair parada ou com falha, repita o comando seguido de um número menor que 10*`, text, {quoted:mek})
							setTimeout( async function(){
								fs.unlinkSync(ran)
								fs.unlinkSync(media)
							}, 5000)
						})
					} else return reply(`*Marque a imagem com o comando .sticker ou coloque na legenda, o video ou gif só pode ter 6 segundos de duração, se sua figurinha sair falhada peça ajuda aos ADMs do grupo*`)
				break
				case 'fsticker':
				case 'fstiker':
					framerate = 12
					if(args[0] > 15) return reply('o limite são apenas 15 fps')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)	
								fs.unlinkSync(ran)	
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 7 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 7) && args.length == 0) {
						if(args.length < 1){framerate = 12}
						else{framerate = args[0]}
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(`*Criando... ▬▬▬▬▭ 𝟫𝟤%*\n*Só use este comando caso o comando .STICKER não tenha funcionado*`)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Não foi possível converter ${tipe} em sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=${framerate}, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					}
					else return reply(`Marque a imagem com o comando .fsticker ou coloque na legenda, o video ou gif só pode ter 6 segundos de duração, se sua figurinha sair falhada peça ajuda aos ADMs do grupo`)
				break
				case 'gtts':
					if (args.length < 1) return client.sendMessage(from, 'CADE A PRR DO CODIGO DO IDIOMA???', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'CADE A PRR DO TEXTO', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('QUER ESCREVER A BIBLIA KLR??')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Falhou:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
				break
				case 'db':
					reply(databases(prefix))
				break
				case 'wppim':
					reply(imune(prefix))
				break
				case 'meme':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				
				case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
				break
				case 'hilih':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO??')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'yt2mp3':
					if (args.length < 1) return reply('CADE A PRR DA URL??')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytsearch':
					if (args.length < 1) return reply('O que você está procurando? pau?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/ytsearch?q=${body.slice(10)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'tiktok':
					if (args.length < 1) return reply('CADE A PRR DA URL??')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'gimage':
					var gis = require('g-i-s');
					if(args.length < 1) return reply('CADE A PRR DO TEXTO???')
					teks = `${body.slice(8)}`
					gis(teks, logResults);
					function logResults(error, results) {
						if(error) {
							reply('Deu erro amigo 😓')
						} else {
							var link = JSON.stringify(results[1])
							reply(`Aqui esta o link: ${link.slice(8, -27)}`)
						}
					}
					break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('O que você quer escrever?')
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/nulis?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
					break
				case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Qual é o tipo hum?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana um?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'tstiker':
				case 'tsticker':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO??')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'listonline':
					if (!isGroup) return reply(mess.only.group)
					client.updatePresence(from, Presence.composing)
					client.requestPresenceUpdate(from, Presence.available)
					let online = [...Object.keys(client.chats.get(from).presences)]
					client.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, extendedText, {
						contextInfo: {mentionedJid: online}
					})
					break
				case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					admins = []
					teks = (args.length > 1) ? body.slice(11).trim(): ''
					teks += '\n\n'
					for (let mem of groupAdmins) {
						teks += `*#* @${mem.split('@')[0]}\n`
						admins.push(mem)
					}
					mentions(teks, admins, true)
					
				break
					
                case 'tagall2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                 case 'tagall3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'clearall':
					if (!isOwner) return reply('Quem é Você?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Exclua com sucesso todo o chat :)')
					break
				case 'bc':
					if (!isOwner) return reply('Quem é Você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ Ini Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão de sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ Trasmissão de aviso ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão de sucesso')
					}
					break
				case 'kill':
					if (!isOwner) return reply('Quem é Você?')
					anu = await client.chats.all()
					for (let _ of anu) {
						sendMess(_.jid, `[ Trasmissão de aviso ]\n\n FECHANDO O BOT...`)
					}
					process.exit(0)
				break
        		case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Promovido com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Promovido com sucesso @${mentioned[0].split('@')[0]} Como Administrador do Grupo!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Rebaixado com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Rebaixado com sucesso @${mentioned[0].split('@')[0]} Tornou-se um membro comum!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você quer adicionar um gênio?')
					if (args[0].startsWith('08')) return reply('Use o código do país, mas')
					try {
						nume = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [nume])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos recebidos, emitidos :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedidos recebidos, emitidos : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                    case 'linkgroup':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await client.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                    case 'leave':
                	    if (!isGroup) return reply(mess.only.group)
                	    if (isGroupAdmins || isOwner) {
                	    client.groupLeave(from)
                	    } else {
                	    reply(mess.only.admin)
                	    }
                    break
				case 'toimg':
					if (!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter adesivos em imagens ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
					if (args.length < 1) return reply('CADE A PRR DO TEXTO')
					teks = body.slice(5)
					anu = await simih(teks)
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativo')
						samih.push(from)
						fs.writeFileSync('./src/database/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/database/simi.json', JSON.stringify(samih))
						reply('Desativado com sucesso o modo simi neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ja esta ativo')
						welkom.push(from)
						fs.writeFileSync('./src/database/welkom.json', JSON.stringify(welkom))
						reply('Ativou com sucesso o recurso de boas-vindas neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/database/welkom.json', JSON.stringify(welkom))
						reply('Desativou com sucesso o recurso de boas-vindas neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
                                      break
				case 'clone':
					var isClone = false
					if(!isClone) return reply('TA ME TIRANDO SEU GAY')
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('A tag alvo que você deseja clonar')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Houve Falha')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(' Só uma foto mano')
					}
					break
				case 'countmsg':
					console.log(mek)
					break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
			}
			
		} catch (e) {
			console.log(e)
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
