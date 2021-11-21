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
const blockcmd = JSON.parse(fs.readFileSync('./src/blockcmd.json'))
const im = require('imagemagick')
const util = require('util')
const execute = util.promisify(require('child_process').exec)
const gm = require('gm').subClass({imageMagick: true})
const moment = require('moment-timezone')
const { exec } = require('child_process')
const linkfy = require('linkifyjs')
const { databases, imune } = require('./src/wppimune')
const kagApi = require('@kagchi/kag-api')
const { nethunter } = require('./src/nethunter')
const { destrava, destrava2 } = require('./src/destrava')
const translatte = require('translatte')
const gis = require('g-i-s');
const translate = require('translatte')
const fetch = require('node-fetch')
const { pack } = require('./src/pack')
const { lingua } = require('./src/idioma')
const { termux } = require('./src/termux')
const  { urlShortener } = require('./lib/shortener')
const _level = JSON.parse(fs.readFileSync('./src/level.json'));
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const lolis = require('lolis.life')
const { get } = require('request')
const { exit, on, send } = require('process')
const { type } = require('os')
const { welcometxt } = require('./welcometext')
const { ar, fa, tr, el } = require('translatte/languages')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const usedCommandRecently = new Set()
const gamesCmd = new Set()
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Meu criador^~^\n' 
            + 'ORG:PENTEST;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=5511991710095:+55 11 99171-0095\n' 
            + 'END:VCARD'
prefix = '.'
blocked = []

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
    const obj = {id: userid, xp: 1, level: 1}
    _level.push(obj)
    fs.writeFileSync('./src/level.json', JSON.stringify(_level, null, 2) + '\n')
}
const rmLevelingId = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _level.splice(position, 1)
        fs.writeFileSync('./src/level.json', JSON.stringify(_level, null, 2) + '\n')
		return true
    } else {
		return false
	}
}


const addLevelingLevel = (userid, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].level += amount
        fs.writeFileSync('./src/level.json', JSON.stringify(_level, null, 2) + '\n')
    }
}
const rmLevelingLevel = (userid, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].level -= amount
        fs.writeFileSync('./src/level.json', JSON.stringify(_level, null, 2) + '\n')
    }
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level, null, 2) + '\n')
	}
}
const rmLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp = _level[position].xp - amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level, null, 2) + '\n')
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
		start('2', 'Conectando...')
	})
	client.on('open', () => {
		success('2', 'Conectado :)')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		const mdata = await client.groupMetadata(anu.jid)
		const dontback = JSON.parse(fs.readFileSync('./src/dontback.json'))
		const dbackid = []
		for(i=0;i<dontback.length;++i) dbackid.push(dontback[i].groupId)
		if(dbackid.indexOf(anu.jid) >= 0) {
			if (anu.action == 'add'){ 
				num = anu.participants[0]
				var ind = dbackid.indexOf(anu.jid)
				if(dontback[ind].actived && dontback[ind].number.indexOf(num.split('@')[0]) >= 0) {
					await client.sendMessage(mdata.id, '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*', MessageType.text)
					client.groupRemove(mdata.id, [num])
				}
			}
		}
		if(antifake.includes(anu.jid)) {
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					client.sendMessage(mdata.id, 'Corra numero fake safado seu ban esta próximo', MessageType.text)
					setTimeout(async function () {
						client.groupRemove(mdata.id, [num])
					}, 1000)
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
				teks = welcometxt(num.split('@')[0], mdata.subject)
				if(num.startsWith('55'))
				{
					let buffer = await getBuffer(ppimg)
					client.sendMessage(mdata.id, buffer, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				}
				else {
					alertext= '🚫 NUMERO GRINGOS NÃO SÃO PERMITIDOS 🚫'
					client.sendMessage(mdata.id, alertext, MessageType.text)
					console.log(anu.participants)
					client.groupRemove(anu.jid, anu.participants)
				}
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `👋👋Até logo @${num.split('@')[0]}👋👋`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
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
	client.on('chat-new', async (anu) => {
		const ownerNumber = ["5511991710095@s.whatsapp.net"]
		const isOwner = ownerNumber.includes(anu.jid)
		const antinewchat = JSON.parse(fs.readFileSync('./src/antinewchat.json'))
		if(antinewchat.includes('Ativado') && !isOwner) {
			await client.sendMessage(anu.jid, 'O anti chat novo está ativado e você não é meu proprietário, logo será bloqueado', MessageType.text)
			client.blockUser(anu.jid, 'add')
		}
	})
	client.on('chat-update', async (mek) => {
		const limitactive = JSON.parse(fs.readFileSync('./src/limitactive.json'))
		const limitedlist = JSON.parse(fs.readFileSync('./src/limitedlist.json'))
		const countMessage = JSON.parse(fs.readFileSync('./src/countmsg.json'))
		const antinewchat = JSON.parse(fs.readFileSync('./src/antinewchat.json'))
		const antipv = JSON.parse(fs.readFileSync('./src/antipv.json'))
		const blockeds = JSON.parse(fs.readFileSync('./src/blocklist.json'))
		const dontback = JSON.parse(fs.readFileSync('./src/dontback.json'))
		const antidoc = JSON.parse(fs.readFileSync('./src/antidoc.json'))
		const antiimg = JSON.parse(fs.readFileSync('./src/antiimg.json'))
		const antivid = JSON.parse(fs.readFileSync('./src/antivid.json'))
		const antiloc = JSON.parse(fs.readFileSync('./src/antiloc.json'))
		const antictt = JSON.parse(fs.readFileSync('./src/antictt.json'))
		const antisticker = JSON.parse(fs.readFileSync('./src/antisticker.json'))
		const antiaudio = JSON.parse(fs.readFileSync('./src/antiaudio.json'))
		const _level = JSON.parse(fs.readFileSync('./src/level.json'));
		const antiporn = JSON.parse(fs.readFileSync('./src/antiporn.json'))
		const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
		const autostickerimg = JSON.parse(fs.readFileSync('./src/autostickerimg.json'))
		const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
		const antilinkhard = JSON.parse(fs.readFileSync('./src/antilinkhard.json'))
		const autoreply = JSON.parse(fs.readFileSync('./src/autoreply.json'))
		const jogatina = JSON.parse(fs.readFileSync('./src/jogatina.json'))
		try {
			if (!mek.hasNewMessage) return
			mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const botNumber = client.user.jid
			const ownerNumber = ["5511991710095@s.whatsapp.net"] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const isAutoStickerImg = isGroup ? autostickerimg.includes(from) : false
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiNewchat = (antinewchat.indexOf('Ativado') >= 0) ? true : false
			const isAntiDoc = isGroup ? antidoc.includes(from) : false
			const isLimitActive = (limitactive.indexOf('Ativado') >= 0) ? true : false
			const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false
			const isAntiImg = isGroup ? antiimg.includes(from) : false
			const isAntiVid = isGroup ? antivid.includes(from) : false
			const isJogatina = isGroup ? jogatina.includes(from) : false
			const isAntiLoc = isGroup ? antiloc.includes(from) : false
			const isAntiCtt = isGroup ? antictt.includes(from) : false
			const isAntiSticker = isGroup ? antisticker.includes(from) : false
			const OriginalOwner = '5511991710095'
			const isAntiAudio = isGroup ? antiaudio.includes(from) : false
			const isAntiFake = isGroup ? antifake.includes(from) : false
			const isAntiPorn = from.endsWith('@g.us') ? antiporn.includes(from) : false
			const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isAutoReply = isGroup ? autoreply.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const isFiltered = (from) => !!usedCommandRecently.has(from)
			const addFilter = (from) => {
				usedCommandRecently.add(from)
				setTimeout(() => usedCommandRecently.delete(from),  600000)
			}
			const isFilteredGame = (from) => !!gamesCmd.has(from)
			const addFilterGame = (from) => {
				gamesCmd.add(from)
				setTimeout(() => gamesCmd.delete(from),  180000)
			}
			if ((isAntiPorn && isBotGroupAdmins)) {
				if(!mek.message) return
				if (type === MessageType.image) {
					savedFilename = await client.downloadAndSaveMediaMessage (mek)
					imgbbUploader('c9cf132756510ad171587fb5a5a0389f', savedFilename).then(async function(response) {
						anu = await fetchJson(`https://nsfw-demo.sashido.io/api/image/classify?url=${response.url}`)

						if(anu[0].className === 'Porn' && isGroupAdmins)  {
							client.sendMessage(from,'*Administradores podem enviar porno*', MessageType.text, {quoted: mek})
							return
							
						} else if(anu[0].className === 'Porn' && !isGroupAdmins) {
							client.sendMessage(from,'*Corra membro comum o ban esta proximo*', MessageType.text, {quoted: mek})
							setTimeout(async function () {
								client.groupRemove(from, [sender])
							}, 2000)
							return
						}
						
						if(anu[0].className === 'Hentai' && isGroupAdmins) {
							client.sendMessage(from,'*Administradores podem enviar porno*', MessageType.text, {quoted: mek})
							return

						}  else if(anu[0].className === 'Hentai' && !isGroupAdmins) {
							client.sendMessage(from,'*Corra membro comum o ban esta proximo*', MessageType.text, {quoted: mek})
							setTimeout(async function () {
								client.groupRemove(from, [sender])
							}, 2000)
							return
						}
						
						if(anu[0].className === 'Sexy') return client.sendMessage(from,'Cuidado com oq manda em amigo, to com antiporn ativado', MessageType.text, {quoted: mek})
						
						fs.unlinkSync(savedFilename)

					}).catch((error) => console.error(error));
				}
			}
			if(isAutoStickerImg && type === MessageType.image) {
				savedFilename = await client.downloadAndSaveMediaMessage(mek)
				ran = getRandom('.webp')
				mname = getRandom('.webp')
				fs.renameSync(savedFilename, mname)
				gm(mname).resize(512, 512, '!').write(ran, async function (){
					await client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
					fs.unlinkSync(mname)
					fs.unlinkSync(ran)
				})
			}
			if(isAntiDoc && isBotGroupAdmins && type === MessageType.document) {
				if(isGroupAdmins) return client.sendMessage(from,'*Adms podem enviar mensagens proibidas*', MessageType.text, {quoted: mek})
				client.sendMessage(from, '*Corra membro comum o ban esta proximo*')
				setTimeout(async function () {
					client.groupRemove(from, [sender])
				}, 1000)
			}
			if(isAntiCtt && isBotGroupAdmins && type === MessageType.contact) {
				if(isGroupAdmins) return client.sendMessage(from,'*Adms podem enviar mensagens proibidas*', MessageType.text, {quoted: mek})
				client.sendMessage(from, '*Corra membro comum o ban esta proximo*')
				setTimeout(async function () {
					client.groupRemove(from, [sender])
				}, 1000)
			}
			if(isAntiAudio && isBotGroupAdmins && type === MessageType.audio) {
				if(isGroupAdmins) return client.sendMessage(from,'*Adms podem enviar mensagens proibidas*', MessageType.text, {quoted: mek})
				client.sendMessage(from, '*Corra membro comum o ban esta proximo*')
				setTimeout(async function () {
					client.groupRemove(from, [sender])
				}, 1000)
			}
			if(isAntiImg && isBotGroupAdmins && type === MessageType.image) {
				if(isGroupAdmins) return client.sendMessage(from,'*Adms podem enviar mensagens proibidas*', MessageType.text, {quoted: mek})
				client.sendMessage(from, '*Corra membro comum o ban esta proximo*')
				setTimeout(async function () {
					client.groupRemove(from, [sender])
				}, 1000)
			}
			if(isAntiLoc && isBotGroupAdmins && type === MessageType.location) {
				if(isGroupAdmins) return client.sendMessage(from,'*Adms podem enviar mensagens proibidas*', MessageType.text, {quoted: mek})
				client.sendMessage(from, '*Corra membro comum o ban esta proximo*')
				setTimeout(async function () {
					client.groupRemove(from, [sender])
				}, 1000)
			}
			if(isAntiSticker && isBotGroupAdmins && type === MessageType.sticker) {
				if(isGroupAdmins) return client.sendMessage(from,'*Adms podem enviar mensagens proibidas*', MessageType.text, {quoted: mek})
				client.sendMessage(from, '*Corra membro comum o ban esta proximo*')
				setTimeout(async function () {
					client.groupRemove(from, [sender])
				}, 1000)
			}
			if(isAntiVid && isBotGroupAdmins && type === MessageType.video) {
				if(isGroupAdmins) return client.sendMessage(from,'*Adms podem enviar mensagens proibidas*', MessageType.text, {quoted: mek})
				client.sendMessage(from, '*Corra membro comum o ban esta proximo*')
				setTimeout(async function () {
					client.groupRemove(from, [sender])
				}, 1000)
			}

			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			bidy =  budy.toLowerCase()
			bady = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			mess = {
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
			 
			const isUrl = (url) => {
				if(linkfy.find(url)[0]) return true
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
			const isCmdBlocked = (teks) => {
				return blockcmd.includes(teks)
			}

			const levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
				return`*「 Subiu de nível 」*
*Nome* : ${pushname}
*Wa.me* : wa.me/${sender.split("@")[0]}
*Xp* : ${getLevelingXp(sender)}
*Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}`
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
			if(isCmd && blockeds.includes(sender)) return
			if(isCmd && blockcmd.includes(command)) return
			if(isAntiPv && !isOwner && isCmd && !isGroup) return reply('🚫PV BLOQUEADO🚫')

			if(isGroup){
				if(bidy.startsWith('/') && isAutoReply) return reply('Meu prefixo é .')
				if(bidy.startsWith('#') && isAutoReply) return reply('Meu prefixo é .')
				if(bidy.startsWith('!') && isAutoReply) return reply('Meu prefixo é .')
				if(bidy.startsWith('$') && isAutoReply) return reply('Meu prefixo é .')
				if(bidy.startsWith('*') && isAutoReply) return reply('Meu prefixo é .')
			}
			else {
				if(bidy.startsWith('/')) return reply('Meu prefixo é .')
				if(bidy.startsWith('#')) return reply('Meu prefixo é .')
				if(bidy.startsWith('!')) return reply('Meu prefixo é .')
				if(bidy.startsWith('$')) return reply('Meu prefixo é .')
				if(bidy.startsWith('*')) return reply('Meu prefixo é .')
			}
			
			if(bidy.includes('pedro') && isAutoReply) {
				client.sendMessage(from, fs.readFileSync('./img/pedro.webp'), sticker, {quoted: mek})
			}
			if(bidy.includes('cade o bot') && isAutoReply) return reply('Me chamou onii-chan 👉👈?')
			if(bidy.includes('bot fdp') && isAutoReply) return reply('Te foder rapaz, te deitar na porrada quando tiver dormindo')
			if(bidy.includes('bot gostoso') && isAutoReply) return reply('Arigato go sai masu 😳👉👈')
			if(bidy.includes('bot fofo') && isAutoReply) return reply('Arigato go sai masu 😳👉👈')
			if(bidy.includes('bot baianor') && isAutoReply) return reply('Convidei sua placa-mãe pra minha rede seu corno')
			if(bidy.includes('bot corno') && isAutoReply) return reply('Vai te foder, jogador de ff, comprador de pack do pézinho')
			if(bidy.includes('bot feio') && isAutoReply) return reply('Tu parece um sirgueijo, um caranguejo amassado 😡')
			if(bidy.includes('bot puta') && isAutoReply) return reply('Senhora sua mãe 😡')
			if(bidy.includes('bot gay') && isAutoReply) return reply('Falou o manja rola 😡')
			if(bidy.includes('bot viado') && isAutoReply) return reply('Falou o manja rola 😡')
			if(bidy.includes(botNumber+' feio') && isAutoReply) return reply('senhora sua mãe 😡')
			if(bidy.includes('bot lindo') && isAutoReply) {
				buff = await getBuffer('https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg')
				teks = 'Bakaaaa 😣😣'
				client.sendMessage(from, buff, image)
			}
			if(bidy.includes('bom dia') && isAutoReply) {
				buff = await getBuffer('https://i.ibb.co/9NBQZf7/Whats-App-Image-2021-03-21-at-17-28-24.jpg')
				teks = 'Ohayo gozaimasu, Onii-chan 👉👈'
				client.sendMessage(from, buff, image)
			}
			if(bidy.includes('boa tarde') && isAutoReply) {
				buff = await getBuffer('https://i.ibb.co/jHsm18b/Whats-App-Image-2021-03-21-at-17-33-15.jpg')
				teks = `Kon'nichiwa Onii-chan, aceite esse café ☕`
				client.sendMessage(from, buff, image)
			}
			if(bidy.includes('boa noite') && isAutoReply) {
				buff = await getBuffer('https://i.ibb.co/W0m0P6z/Whats-App-Image-2021-03-21-at-17-35-20.jpg')
				teks = 'Konbanwa Onii-chan, espero que tenha tido um bom dia ☺️'
				client.sendMessage(from, buff, image)
			}
			
			
			if(isUrl(bady) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins) {
				reply('Corra Membro comum, O ban está próximo...')
				setTimeout(async function () {
					kic = `${sender.split("@")[0]}@s.whatsapp.net`
					client.groupRemove(from, [kic])
				}, 3000)
			}
			if(isUrl(bady) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins) {
				reply('Isso é um link amigo... ah é tu é adm ent pode kkkk 🙃')
			}

			if(bady.includes('://chat.whatsapp.com/') && isAntiLink && !isGroupAdmins && isBotGroupAdmins) {
				reply('Corra Membro comum, O ban está próximo...')
				setTimeout(async function () {
					kic = `${sender.split("@")[0]}@s.whatsapp.net`
					client.groupRemove(from, [kic])
				}, 3000)
			}
			if(bady.includes('://chat.whatsapp.com/') && isAntiLink && isGroupAdmins && isBotGroupAdmins) {
				reply('Isso é um link amigo... ah é tu é adm ent pode kkkk 🙃')
			}
			if(bady.includes('://youtube.com/channel') && isAntiLink && !isGroupAdmins && isBotGroupAdmins) {
				reply('Corra Membro comum, O ban está próximo...')
				setTimeout(async function () {
					kic = `${sender.split("@")[0]}@s.whatsapp.net`
					client.groupRemove(from, [kic])
				}, 3000)
			}
			if(bady.includes('://youtube.com/channel') && isAntiLink && isGroupAdmins && isBotGroupAdmins) {
				reply('Isso é um link amigo... ah é tu é adm ent pode kkkk 🙃')
			}
			const dbids = []
			for(i=0;i<dontback.length;++i) {
				dbids.push(dontback[i].groupId)
			}
			const isDontBack = (isGroup && dbids.indexOf(from) >= 0) ? true : false

			const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
			var getLevel
			const isMiniGame = (command == 'flip') ? true : (command == 'cassino') ? true : (command == 'steal') ? true : (command == 'stealrandom') ? true : (command == 'doarxp') ? true : (command == 'roletaneg') ? true : (command == 'roletapos') ? true : false
			var requiredXp
            try {
                if (currentLevel != undefined && checkId != undefined && !isMiniGame) {
					const amountXp = 100
					getLevel = getLevelingLevel(sender)
					requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
					addLevelingXp(sender, amountXp)
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)
						await reply(levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
					}
				} else if(isCmd && command != 'registerlevel' && checkId == undefined) return reply(`*Se registre com ${prefix}registerlevel para acessar os comandos do bot*`)
            } catch (err) {
                console.error(err)
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
					fs.writeFileSync('./src/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
				} else {
					const messages = 1
					const cmd_messages = isCmd ? 1 : 0
					countMessage[ind].numbers.push({
						jid: sender,
						messages: messages,
						cmd_messages: cmd_messages
					})
					fs.writeFileSync('./src/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
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
				fs.writeFileSync('./src/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
			}

			var cassinov = [ '🍇 🍇 🍇',
			'🍒 🍒 🍒',
			'🍎 🍎 🍎',
			'🍇 🍇 🍎',
			'🍇 🍇 🍒',
			'🍇 🍎 🍇',
			'🍇 🍎 🍎',
			'🍇 🍎 🍒',
			'🍇 🍒 🍇',
			'🍇 🍒 🍎',
			'🍇 🍒 🍒',
			'🍎 🍇 🍇',
			'🍎 🍇 🍎',
			'🍎 🍇 🍒',
			'🍎 🍎 🍇',
			'🍎 🍎 🍒',
			'🍎 🍒 🍇',
			'🍎 🍒 🍎',
			'🍎 🍒 🍒',
			'🍒 🍇 🍇',
			'🍒 🍇 🍎',
			'🍒 🍇 🍒',
			'🍒 🍎 🍇',
			'🍒 🍎 🍎',
			'🍒 🍎 🍒',
			'🍒 🍒 🍇',
			'🍒 🍒 🍎']

			const limitsids = []
			for(let nums of limitedlist) {
				limitsids.push(nums.jid)
			}
			if(!isOwner && isCmd && isLimitActive && limitsids.indexOf(sender) < 0) {
				var id = {
					jid: sender,
					limit: 15
				}
				limitedlist.push(id)
				await fs.writeFileSync('./src/limitedlist.json', JSON.stringify(limitedlist, null, 2) + '\n')
			}
			if(!isOwner && isCmd && isLimitActive && limitsids.indexOf(sender) >= 0) {
				var ind = limitsids.indexOf(sender)
				if(limitedlist[ind].limit <= 0) return reply('*Voce chegou no limite máximo de comandos dados*')
				limitedlist[ind].limit -= 1
				await fs.writeFileSync('./src/limitedlist.json', JSON.stringify(limitedlist, null, 2) + '\n')
			}

			switch(command) {
				case 'jogatina':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isJogatina) return reply('Ja esta ativo')
							jogatina.push(from)
							fs.writeFileSync('./src/jogatina.json', JSON.stringify(jogatina))
							reply('Ativou com sucesso o recurso de jogatina neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							jogatina.splice(from, 1)
							fs.writeFileSync('./src/jogatina.json', JSON.stringify(jogatina))
							reply('Desativou com sucesso o recurso de jogatina neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Erro')
					}
					break
				case 'stealrandom':
					if(!isJogatina) return reply('*A jogatina não está disponível no momento, tente novamente mais tarde*')
					if(!isGroup) return reply(mess.only.group)
					if(_level.length < 4) return reply('Precisa de no minimo mais que 5 usuários registrados')
					if (isFiltered(sender)) return reply(`「 ❗ 」Você so pode usar o comando a cada 10 minutos`)
					r = Math.floor(Math.random() * _level.length + 0)
					ind = (_level[r].id == sender && r == 0 && _level.length > 1) ? r + 1 : r
					mem = _level[ind].id
					rxp = Math.floor(Math.random() * _level[ind].xp + 0)
					addLevelingXp(sender, rxp)
					rmLevelingXp(mem, rxp)
					mentions(`@${sender.split('@')[0]} roubou ${rxp}xp de @${mem.split('@')[0]}`, [sender, mem], true)
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)
						await reply(levelup(pushname, sender, getLevelingXp(sender),  getLevel, getLevelingLevel(sender)))
					} else {
						reply(`*Você ganhou ${rxp} de xp*`)
					}
					addFilter(sender)
					break
				case 'steal':
					if(!isJogatina) return reply('*A jogatina não está disponível no momento, tente novamente mais tarde*')
					if(!isGroup) return reply(mess.only.group)
					if (isFiltered(sender)) return reply(`「 ❗ 」Você so pode usar o comando a cada 10 minutos`)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque alguém')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					for(i=0; i < mentioned.length; ++i) {
						if(!getLevelingXp(mentioned[i])) return mentions(`*O número @${mentioned[i].split('@')[0]} não está registrado*`, [mentioned[i]], true)
						rxp = Math.floor(Math.random() * 500 + 0)
						if(getLevelingXp(mentioned[i]) < rxp) {
							addLevelingXp(sender, getLevelingXp(mentioned[i]))
							rmLevelingXp(mentioned[i], getLevelingXp(mentioned[i]))
						} else {
							addLevelingXp(sender, rxp)
							rmLevelingXp(mentioned[i], rxp)
						}
						mentions(`@${sender.split('@')[0]} roubou ${rxp}xp de @${mentioned[i].split('@')[0]}`, [sender, mentioned[i]], true)
						if(mentioned.length > 2) {
							client.sendMessage(mentioned[i], `O usuário ${pushname} roubou ${rxp} de xp seu no grupo ${groupName}, o que tá esperando? vai lá agora revidar`, text)
						}
					}
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)
						await reply(levelup(pushname, sender, getLevelingXp(sender),  getLevel, getLevelingLevel(sender)))
					} else {
						reply(`*Você ganhou ${rxp} de xp totais*`)
					}
					addFilter(sender)
					break
				case 'cassino':
					if (isFilteredGame(sender)) return reply(`「 ❗ 」Você so pode usar o comando a cada 3 minutos`)
					if(!isJogatina) return reply('*A jogatina não está disponível no momento, tente novamente mais tarde*')
					if(args.length < 1) return reply('*Escolha uma quantidade de xp que deseja apostar*')
					else if(isNaN(args[0])) return reply('*Escolha uma quantidade de xp que deseja apostar*')
					else rxp = parseInt(args[0])
					if(getLevelingXp(sender) < parseInt(args[0])) return reply('*Você não tem essa quantidade de xp*')
					reply('*🎰Girando a roleta...🎰*')
					r1 = Math.floor(Math.random() * cassinov.length + 0)
					r2 = Math.floor(Math.random() * cassinov.length + 0)
					r3 = Math.floor(Math.random() * cassinov.length + 0)
					setTimeout(async function () {
						if(r1 <= 2) {
							addLevelingXp(sender, rxp)
							teks = `*🎰 Roleta girada ✅ 🎰*\n\n${cassinov[r1]}\n${cassinov[r2]}\n${cassinov[r3]}\n\n*✅ Você ganhou ${rxp} de xp!! ✅*\n*🥳👏 Parabéns 👏🥳*`
							reply(teks)
						} 
						else if(r2 <= 2) {
							addLevelingXp(sender, rxp)
							teks = `*🎰 Roleta girada ✅ 🎰*\n\n${cassinov[r1]}\n${cassinov[r2]}\n${cassinov[r3]}\n\n*✅ Você ganhou ${rxp} de xp!! ✅*\n*🥳👏 Parabéns 👏🥳*`
							reply(teks)
						}
						else if(r3 <= 2) {
							addLevelingXp(sender, rxp)
							teks = `*🎰 Roleta girada ✅ 🎰*\n\n${cassinov[r1]}\n${cassinov[r2]}\n${cassinov[r3]}\n\n*✅ Você ganhou ${rxp} de xp!! ✅*\n*🥳👏 Parabéns 👏🥳*`
							reply(teks)
						}
						else {
							if(getLevelingXp(sender) <= rxp) rmLevelingXp(sender, getLevelingXp(sender))
							else rmLevelingXp(sender, rxp)
							teks = `*🎰 Roleta girada ✅ 🎰*\n\n${cassinov[r1]}\n${cassinov[r2]}\n${cassinov[r3]}\n\n*❌ Você perdeu!! ❌*\n*😭🥺Que penaaa 🥺😭*`
							reply(teks)
						}
						addFilterGame(sender)
					}, 3000)
					break
				case 'flip':
					if(!isJogatina) return reply('*A jogatina não está disponível no momento, tente novamente mais tarde*')
					if (isFilteredGame(sender)) return reply(`「 ❗ 」Você so pode usar o comando a cada 3 minutos`)
					if(!isGroup) return reply(mess.only.group)
					if(args.length < 1 ) return reply('*Fale se é cara ou coroa*')
					if(args[0].toLowerCase() == 'cara') moeda = 2
					else if(args[0].toLowerCase() == 'coroa') moeda = 1
					else return reply('*Fale se é cara ou coroa*')
					r = Math.floor(Math.random() * 2 + 1)
					if(r == moeda) {
						rxp = Math.floor(Math.random() * 500 + 100)
						addLevelingXp(sender, rxp)
						if(r == 1) reply(`*Deu coroa 🪙*\n*Você ganhou ${rxp} de xp*`)
						if(r == 2)reply(`*Deu cara 🪙*\n*Você ganhou ${rxp} de xp*`)
						if (requiredXp <= getLevelingXp(sender)) {
							addLevelingLevel(sender, 1)
							await reply(levelup(pushname, sender, getLevelingXp(sender),  getLevel, getLevelingLevel(sender)))
						} 
					} else {
						rxp = Math.floor(Math.random() * 500 + 100)
						if(getLevelingXp(sender) < rxp) rmLevelingXp(sender, getLevelingXp(sender)) 
						else rmLevelingXp(sender, rxp)
						if(r == 1) reply(`*Deu coroa 🪙*\n*Você perdeu ${rxp} de xp*`)
						if(r == 2) reply(`*Deu cara 🪙*\n*Você perdeu ${rxp} de xp*`)
					}
					addFilterGame(sender)
					break
				case 'doarxp':
					if(!isGroup) return reply(mess.only.group)
					if(checkId == undefined) return reply('Você nem se registrou ainda')
					if(args.length < 1) return reply('Diga o numero de xp que queira dar e marque pra quem queira dar')
					if(args.length < 2) return reply('*Marque a pessoa que queira dar xp*')
					if(isNaN(args[0])) return reply('Diga o xp em números')
					if(args[0] > 5000) return reply('*O limite de doação máximo é de 5000*')
					if(parseInt(args[0]) < 0) return reply('*O número deve ser positivo*')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque alguém')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if(mentioned.length < 1) return reply('Marque alguém')
					if(getLevelingXp(sender) < parseInt(args[0]) * mentioned.length) return reply('Você não tem xp sufiente para doar')
					for(let jid of mentioned) {
						if(!getLevelingId(jid)) return mentions(`O usuário @${jid.split('@')[0]} não está registrado, para doar todos os usuários tem que estar registrado`, [jid], true)
						rmLevelingXp(sender, parseInt(args[0]))
						addLevelingXp(jid, parseInt(args[0]))
						mentions(`*Doado ${args[0]} para @${jid.split('@')[0]}*`, [jid], true)
						if (requiredXp <= getLevelingXp(jid)) {
							addLevelingLevel(jid, 1)
							await mentions(`@${jid.split('@')[0]} subiu de nível com a doação de ${sender.split('@')[0]}`, [sender, jid], true)
						}
					}
					break
				case 'roletarandom':
					if(!isJogatina) return reply('*A jogatina não está disponível no momento, tente novamente mais tarde*')
					if(!isGroup) return reply(mess.only.group)
					if(!isGroupAdmins) return reply(mess.only.admin)
					reply('*🔫Girando o tambor...🔫, Aguarde 3 segundos*')
					setTimeout(async function() {
						r = Math.floor(Math.random() * _level.length + 0)
						rxp = Math.floor(Math.random() * 500 + 0)
						mem = _level[r].id
						if(mem.includes(OriginalOwner)) {
							r = Math.floor(Math.random() * _level.length + 0)
							mem = _level[r].id
						}
						is_add = Math.floor(Math.random() * 1 + 0)
						if(is_add == 1) {
							if(getLevelingXp(mem) <= rxp && getLevelingXp(mem) != 0) rxp = rmLevelingXp(mem, getLevelingXp(mem))
							else rmLevelingXp(mem, rxp)
							await client.sendMessage(from, `*💥 O @${mem.split('@')[0]} tomou um tiro da pistola do azar, perdeu ${rxp}xp 💥*`, text, {contextInfo: {"mentionedJid": [mem]}})
						} else {
							addLevelingXp(mem, rxp)
							if (requiredXp <= getLevelingXp(mem)) {
								addLevelingLevel(mem, 1)
								await mentions(`@${mem.split('@')[0]} ganhou ${rxp} de xp no roleta russa`, [mem], true)
							}
							await client.sendMessage(from, `*🥳 O @${mem.split('@')[0]} tomou um tiro da pistola da sorte, ganhou ${rxp}xp 🥳*`, text, {contextInfo: {"mentionedJid": [mem]}})
						}
					}, 3000)
					break
				case 'roletaneg':
					if(!isJogatina) return reply('*A jogatina não está disponível no momento, tente novamente mais tarde*')
					if(!isGroup) return reply(mess.only.group)
					if(!isGroupAdmins) return reply(mess.only.admin)
					reply('*🔫Girando o tambor...🔫, Aguarde 3 segundos*')
					setTimeout(async function() {
						r = Math.floor(Math.random() * _level.length + 0)
						rxp = Math.floor(Math.random() * 500 + 0)
						mem = _level[r].id
						if(mem.includes(OriginalOwner)) {
							r = Math.floor(Math.random() * _level.length + 0)
							mem = _level[r].id
						}
						if(getLevelingXp(mem) <= rxp && getLevelingXp(mem) != 0) rxp = rmLevelingXp(mem, getLevelingXp(mem))
						else rmLevelingXp(mem, rxp)
						await client.sendMessage(from, `*💥 O @${mem.split('@')[0]} tomou um tiro da pistola do azar, perdeu ${rxp}xp 💥*`, text, {contextInfo: {"mentionedJid": [mem]}})
					}, 3000)
					break
				case 'roletapos':
					if(!isJogatina) return reply('*A jogatina não está disponível no momento, tente novamente mais tarde*')
					if(!isGroup) return reply(mess.only.group)
					if(!isGroupAdmins) return reply(mess.only.admin)
					reply('*🔫Girando o tambor...🔫, Aguarde 3 segundos*')
					setTimeout(async function() {
						r = Math.floor(Math.random() * _level.length + 0)
						rxp = Math.floor(Math.random() * 1000 + 0)
						mem = _level[r].id
						if(mem.includes(OriginalOwner)) {
							r = Math.floor(Math.random() * _level.length + 0)
							mem = _level[r].id
						}
						addLevelingXp(mem, rxp)
						if (requiredXp <= getLevelingXp(mem)) {
							addLevelingLevel(mem, 1)
							await mentions(`@${mem.split('@')[0]} ganhou ${rxp} de xp no roleta russa`, [mem], true)
						}
						await client.sendMessage(from, `*🥳 O @${mem.split('@')[0]} tomou um tiro da pistola da sorte, ganhou ${rxp}xp 🥳*`, text, {contextInfo: {"mentionedJid": [mem]}})
					}, 3000)
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
				case 'ranklevel':
					if (!isGroup) return reply(mess.only.group)
					if(_level.length < 1) return reply('*Ninguém está registrado no momento*')
					_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
					mentioned_jid = []
					boardi = '*🔥Ranking dos maiores xp🔥*\n\n'
					try {
						for (let i = 0; i < _level.length; i++) {
							if (i == 0) boardi += `${i + 1}º 🥇 : @${_level[i].id.split('@')[0]}\n*Xp: ${_level[i].xp}*\n\n`
							else if (i == 1) boardi += `${i + 1}º 🥈 : @${_level[i].id.split('@')[0]}\n*Xp: ${_level[i].xp}*\n\n`
							else if (i == 2) boardi += `${i + 1}º 🥉 : @${_level[i].id.split('@')[0]}\n*Xp: ${_level[i].xp}*\n\n`
							else boardi += `${i + 1}º : @${_level[i].id.split('@')[0]}\n*Xp: ${_level[i].xp}*\n\n`
							mentioned_jid.push(_level[i].id)
						} 
						mentions(boardi, mentioned_jid, true)
					} catch (err) {
						console.log(err)
						await client.sendMessage(from, `*É necessário 3 jogadores para se construir um ranking*`, text, {quoted: mek})
					}
				break
				case 'rankativo':
					if (!isGroup) return reply(mess.only.group)
					if(groupIdscount.indexOf(from) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
					var ind = groupIdscount.indexOf(from)
					if(countMessage[ind].numbers.length < 15) return reply('*Necessita do registro mínimo de 15 usuarios*')
					countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
					mentioned_jid = []
					boardi = '*🔥Ranking dos membros mais ativos🔥*\n\n'
					try {
						for (let i = 0; i < 15; i++) {
							if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 3) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 4) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 5) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 6) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 7) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 8) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 9) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 10) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 11) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 12) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 13) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 14) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							mentioned_jid.push(countMessage[ind].numbers[i].jid)
						} 
						mentions(boardi, mentioned_jid, true)
					} catch (err) {
						console.log(err)
						await client.sendMessage(from, `*É necessário 3 jogadores para se construir um ranking*`, text, {quoted: mek})
					}
				break
				case 'rmlimituser':
					if(!isOwner) return reply(mess.only.ownerB)
					if(limitsids.indexOf(args[0]+'@s.whatsapp.net') < 0) return reply('*Não há dados sobre esse número nos limites*')
					var ind = limitsids.indexOf(args[0]+'@s.whatsapp.net')
					limitedlist.splice(ind, 1)
					fs.writeFileSync('./src/limitedlist.json', JSON.stringify(limitedlist, null, 2) + '\n')
					mentions(`@${args[0]} foi resetado os limites`, [args[0]+'@s.whatsapp.net'], true)
					break
				case 'mylimit':
					if(!isLimitActive) return reply('*O limitador de comandos não esta ativado*')
					if(limitsids.indexOf(sender) < 0) return reply('*Você deve ser uns dos proprietários ou e a primeira vez que usa o bot*')
					var ind = limitsids.indexOf(sender)
					reply(`*Olá ${pushname} o seu limite é de ${limitedlist[ind].limit} comandos restantes*`)
					break
				case 'resetlimit':
					if (!isOwner) return reply(mess.only.ownerB)
					fs.writeFileSync('./src/limitedlist.json', JSON.stringify([]))
					reply('Limite resetado com sucesso!! ✔️')
				break
				case 'limitcmd':
					try {
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isLimitActive) return reply('Ja esta ativo')
						limitactive.push('Ativado')
						fs.writeFileSync('./src/limitactive.json', JSON.stringify(limitactive))
						reply('Ativou com sucesso o recurso de limite no bot✔️')
					} else if (Number(args[0]) === 0) {
						fs.writeFileSync('./src/limitactive.json', JSON.stringify([]))
						reply('Desativou com sucesso o recurso de limite no bot✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Falha')
					}
                break
				case 'srcativo':
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque o contato*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if(groupIdscount.indexOf(from) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
					var ind = groupIdscount.indexOf(from)
					if(numbersIds.indexOf(mentioned[0]) < 0) return reply('*Esse n tem mensagens*')
					var indnum = numbersIds.indexOf(mentioned[0])
					mentions(`*Número @${mentioned[0].split('@')[0]}*\n*Mensagens: ${countMessage[ind].numbers[indnum].messages}*\n*Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}*`)
					break
				case 'filtroativo':
					if(!isGroupAdmins) return reply(mess.only.admin)
					if(!isGroup) return reply(mess.only.group)
					teks = `*Membros que só mandaram ${args[0]} mensagens:*\n`
					mem = []
					if(groupIdscount.indexOf(from) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
					var ind = groupIdscount.indexOf(from)
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
						var ind = groupIdscount.indexOf(from)
						for(let obj of groupMembers) {
							if(numbersIds.indexOf(obj.jid) >=0) { 
								var indnum = numbersIds.indexOf(obj.jid)
								if(countMessage[ind].numbers[indnum].messages <= args[0]) {
									if(groupAdmins.includes(obj.jid)) {
										mentions(`@${obj.jid} é admin, logo não será banido por mandar pouca msg`, [obj.jid], true)
									} else {
										client.groupRemove(from, [obj.jid])
									}
								}
							} else {
								if(groupAdmins.includes(obj.jid)) {
									mentions(`@${obj.jid} é admin, logo não será banido por mandar pouca msg`, [obj.jid], true)
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
				case 'deletelevel':
					const pos = getLevelingPosition(sender)
					_level.splice(pos, 1)
					fs.writeFileSync('./src/level.json', JSON.stringify(_level, null, 2) + '\n')
					reply('*Removido do sistema de níveis com sucesso!!!*')
				break 
				case 'level':
					if(args.length < 1) {
						const userLevel = getLevelingLevel(sender)
						const userXp = getLevelingXp(sender)
						if (userLevel === undefined && userXp === undefined) return reply(`*Você não esta registrado, para se registrar digite ${prefix}registerlevel*`)
						const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
						resul = `╭━━👾 𝙇𝙀𝙑𝙀𝙇 𝙎𝙏𝘼𝙏𝙐𝙎 👾━━╮\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Wa.me:* wa.me/${sender.split('@')[0]}\n┣⊱ *XP atual/requirido:* ${parseInt(userXp)}/${parseInt(requiredXp)}\n┣⊱ *Level:* ${userLevel}\n╰━━━━━━━━━━━━━━━━━━━╯`
						reply(resul)
					} else if(!isNaN(args[0])) {
						num = args[0]+'@s.whatsapp.net'
						const userLevel = getLevelingLevel(num)
						const userXp = getLevelingXp(num)
						if (userLevel === undefined && userXp === undefined) return reply(`*Você não esta registrado, para se registrar digite ${prefix}registerlevel*`)
						const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
						const pushname = client.contacts[num] != undefined ? client.contacts[num].vname || client.contacts[num].notify : undefined
						resul = `╭━━👾 𝙇𝙀𝙑𝙀𝙇 𝙎𝙏𝘼𝙏𝙐𝙎 👾━━╮\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Wa.me:* wa.me/${num.split('@')[0]}\n┣⊱ *XP atual/requirido:* ${parseInt(userXp)}/${parseInt(requiredXp)}\n┣⊱ *Level:* ${userLevel}\n╰━━━━━━━━━━━━━━━━━━━╯`
						reply(resul)
					} else return reply('*Diga o número sem +, - ou espaço*')
				break 
				case 'rmlevel':
					if(!isOwner) return reply(mess.only.ownerB)
					if(args.length < 1) return reply('*Diga o número sem -, + e espaço*')
					if(isNaN(args[0])) return reply('*Diga o número sem -, + e espaço*')
					if(!rmLevelingId(args[0]+'@s.whatsapp.net')) return reply('*Número não encontrado na lista de leveis*')
					mentions(`*O @${args[0]} foi removido do sistema de nível*`, [args[0]+'@s.whatsapp.net'], true)
					if(isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mREMOVIDO\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Usuário:', color(sender.split('@')[0]), 'grupo: ', color(groupName)+']')
					if(!isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mREMOVIDO\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Usuário:', color(sender.split('@')[0])+']')
				break
				case 'registerlevel':
					addLevelingId(sender)
					reply('*Agora você esta registrado no sistema de levels*')
					if(isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mREGISTRO\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Usuário:', color(sender.split('@')[0]), 'grupo: ', color(groupName)+']')
					if(!isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mREGISTRO\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Usuário:', color(sender.split('@')[0])+']')
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
				case 'dontback':
					if (!isGroup) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						var ind = dbids.indexOf(from)
						if(isDontBack) {
							dontback[ind].actived = true
						} else {
							dontback.push({
								groupId: from,
								actived: true,
								number: []
							})
						}
						fs.writeFileSync('./src/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
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
						fs.writeFileSync('./src/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
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
					fs.writeFileSync('./src/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
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
					fs.writeFileSync('./src/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
					reply(`*Número removido a lista de don't back*`)
				break
				case 'antinewchat':
					try {
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiNewchat) return reply('Ja esta ativo')
						antinewchat.push('Ativado')
						fs.writeFileSync('./src/antinewchat.json', JSON.stringify(antinewchat))
						reply('Ativou com sucesso o recurso de anti chat novo no bot✔️')
					} else if (Number(args[0]) === 0) {
						fs.writeFileSync('./src/antinewchat.json', JSON.stringify([]))
						reply('Desativou com sucesso o recurso de anti chat novo no bot✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Error')
					}
                break
				case 'antipv':
					try {
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiPv) return reply('Ja esta ativo')
						antipv.push('Ativado')
						fs.writeFileSync('./src/antipv.json', JSON.stringify(antipv))
						reply('Ativou com sucesso o recurso de antipv no bot✔️')
					} else if (Number(args[0]) === 0) {
						fs.writeFileSync('./src/antipv.json', JSON.stringify([]))
						reply('Desativou com sucesso o recurso de antipv no bot✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Error')
					}
                break
				case 'listblockcmd':
					try{
					teks = '*🚫 A lista de comandos bloqueado são: 🚫*\n'
					for(i = 0; i < blockcmd.length; i++) {
						teks += `❧ ${blockcmd[i]}\n`
					}
					reply(teks)
					} catch {
						reply('Erro')
					}
					break
				case 'blockcmd':
					try {
						
						if (args.length < 1) return reply('*Bloquear com que comando?*')
						if(isCmdBlocked(args[0])) return reply('*Já esta incluso essa palavra*')
						cmd = args[0]
						blockcmd.push(cmd)
						fs.writeFileSync('./src/blockcmd.json', JSON.stringify(blockcmd))
						reply('*✅ Comando bloqueado com sucesso ✅*')
					} catch {
						reply('Erro')
					}
					break
				case 'unblockcmd':
					try {
					if(!isOwner) return reply(mess.only.ownerB)
					if(args.length < 1) return reply('*Cade a palavra animal*')
					if(!isCmdBlocked(args[0])) return reply('*Não esta incluso essa palavra*')
					ind = blockcmd.indexOf(args[0])
					blockcmd.splice(ind, 1)
					fs.writeFileSync('./src/blockcmd.json', JSON.stringify(blockcmd))
					reply(`*✔️ Comando ${args[0]} desbloqueado com sucesso*`)
					} catch {
						reply('Erro')
					}
					break
				case 'attp':
					try{                 
			     	if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}stc Daddy*`)
                    	url = encodeURI(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
		    			attp2 = await getBuffer(url)
			    		client.sendMessage(from, attp2, sticker, {quoted: mek})
					} catch {
						reply('Erro')
					}
			     	break
				case 'block':
					try{
						if(!isOwner) return reply('Somente meu propietário e autorizados podem usar esse comando')
						if(args.length <1 ) return reply('Cade o número?')
						num1 = args[0]
						if(args[0].startsWith('@')){ num1 = num1.slice(1)}
						if(isNaN(num1)) return reply('Isso não é um numero de telefone')
						if(num1 == OriginalOwner) return reply('Não posso bloquear meu propietário')
						if(blockeds.includes(num1+'@s.whatsapp.net')) return reply('Ja está bloqueado')
						blockeds.push(num1+'@s.whatsapp.net')
						fs.writeFileSync('./src/blocklist.json', JSON.stringify(blockeds))
						client.blockUser([num1+'@s.whatsapp.net'], 'add')
						reply('*✅ Bloqueado com sucesso ✅*')
					} catch {
						reply('*ERROR*')
					}
					break
				case 'unblock':
					try{
						if(!isOwner) return reply('Somente meu propietário e autorizados podem usar esse comando')
						if(args.length <1 ) return reply('Cade o número?')
						num1 = args[0]
						if(num1.startsWith('@')){ num1 = num1.slice(1)}
						if(isNaN(num1)) return reply('Isso não é um numero de telefone')
						if(!blockeds.includes(num1+'@s.whatsapp.net')) return reply('Ja está desbloqueado')
						var indice = blockeds.indexOf(num1+'@s.whatsapp.net');
						blockeds.splice(indice, 1);
						fs.writeFileSync('./src/blocklist.json', JSON.stringify(blockeds))
						client.blockUser([num1+'@s.whatsapp.net'], 'remove')
						reply('*✅ Desbloqueado com sucesso ✅*')
					} catch {
						reply('*ERROR*')
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
					client.sendMessage(from, list, extendedText, {quoted: mek, contextInfo: { "mentionedJid": [mem_id]}})
				} catch {
					reply('*Error*')
				}
					break
				case 'autostickerimg':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAutoStickerImg) return reply('Ja esta ativo')
						autostickerimg.push(from)
						fs.writeFileSync('./src/autostickerimg.json', JSON.stringify(autostickerimg))
						reply('Ativou com sucesso o recurso de sticker automaticas de imagem neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						autostickerimg.splice(from, 1)
						fs.writeFileSync('./src/autostickerimg.json', JSON.stringify(autostickerimg))
						reply('Desativou com sucesso o recurso de sticker automaticas de imagem neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Falha')
					}
                break
				case 'listonline':
					try{
						if (!isGroup) return reply(mess.only.group)
						client.updatePresence(from, Presence.composing)
						client.requestPresenceUpdate(from, Presence.available)
						let online = [...Object.keys(client.chats.get(from).presences)]
						client.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, extendedText, {quoted: mek, contextInfo: {"mentionedJid": online}})
					} catch {
						reply('Falha')
					}
				break
				case 'mudarnome':
					try {
					if(!isGroup) return reply(mess.only.group)
					teks = body.slice(11)
					client.groupUpdateSubject(from, teks)
					} catch (e) {
						console.log(e)
						reply('Falha')
					}
					break
				case 'mudardesc':
					try {
					if(!isGroup) return reply(mess.only.group)
					teks = body.slice(11)
					client.groupUpdateDescription(from, teks)
					} catch (e) {
						console.log(e)
						reply('Falha')
					}
					break
				case 'antiporn':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiPorn) return reply('Ja esta ativo')
							antiporn.push(from)
							fs.writeFileSync('./src/antiporn.json', JSON.stringify(antiporn))
							reply('Ativou com sucesso o recurso de antipornô neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antiporn.splice(from, 1)
							fs.writeFileSync('./src/antiporn.json', JSON.stringify(antiporn))
							reply('Desativou com sucesso o recurso de antipornô neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Falha')
					}
					breaks
				case 'onmodgrupo':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					client.groupSettingChange(from, GroupSettingChange.settingsChange, true)
					reply('*✅ Todos podem modificar as configurções do grupo agora✅*')
					} catch {
						reply('Falha')
					}
					break
				case 'offmodgrupo':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					client.groupSettingChange(from, GroupSettingChange.settingsChange, false)
					reply('*✅ Somente admins podem modificar as configurções do grupo agora✅*')
					} catch {
						reply('Falha')
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
						reply('Falha')
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
						reply('Falha')
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
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Falha')
					}
                break
				case 'antidoc':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiDoc) return reply('Ja esta ativo')
							antidoc.push(from)
							fs.writeFileSync('./src/antidoc.json', JSON.stringify(antidoc))
							reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antidoc.splice(from, 1)
							fs.writeFileSync('./src/antidoc.json', JSON.stringify(antidoc))
							reply('Desativou com sucesso o recurso de anti documento neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Falha')
					}
					break
				case 'antiloc':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiLoc) return reply('Ja esta ativo')
							antiloc.push(from)
							fs.writeFileSync('./src/antiloc.json', JSON.stringify(antiloc))
							reply('Ativou com sucesso o recurso de anti localização neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antiloc.splice(from, 1)
							fs.writeFileSync('./src/antiloc.json', JSON.stringify(antiloc))
							reply('Desativou com sucesso o recurso de anti localização neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Falha')
					}
					break
				case 'antiimg':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiImg) return reply('Ja esta ativo')
							antiimg.push(from)
							fs.writeFileSync('./src/antiimg.json', JSON.stringify(antiimg))
							reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antiimg.splice(from, 1)
							fs.writeFileSync('./src/antiimg.json', JSON.stringify(antiimg))
							reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Falha')
					}
					break
				case 'antivideo':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiVid) return reply('Ja esta ativo')
							antivid.push(from)
							fs.writeFileSync('./src/antivid.json', JSON.stringify(antivid))
							reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antivid.splice(from, 1)
							fs.writeFileSync('./src/antivid.json', JSON.stringify(antivid))
							reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Falha')
					}
					break
				case 'antisticker':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiSticker) return reply('Ja esta ativo')
							antisticker.push(from)
							fs.writeFileSync('./src/antivid.json', JSON.stringify(antisticker))
							reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antisticker.splice(from, 1)
							fs.writeFileSync('./src/antivid.json', JSON.stringify(antisticker))
							reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Falha')
					}
					break
				case 'antictt':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiCtt) return reply('Ja esta ativo')
							antictt.push(from)
							fs.writeFileSync('./src/antictt.json', JSON.stringify(antictt))
							reply('Ativou com sucesso o recurso de anti contato neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antictt.splice(from, 1)
							fs.writeFileSync('./src/antictt.json', JSON.stringify(antictt))
							reply('Desativou com sucesso o recurso de anti contato neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Falha')
					}
					break
				case 'antiaudio':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiAudio) return reply('Ja esta ativo')
							antiaudio.push(from)
							fs.writeFileSync('./src/antictt.json', JSON.stringify(antiaudio))
							reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antiaudio.splice(from, 1)
							fs.writeFileSync('./src/antictt.json', JSON.stringify(antiaudio))
							reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Erro')
					}
					break
				case 'autoreply':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAutoReply) return reply('Ja esta ativo')
							autoreply.push(from)
							fs.writeFileSync('./src/autoreply.json', JSON.stringify(autoreply))
							reply('Ativou com sucesso o recurso de auto respostas neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							autoreply.splice(from, 1)
							fs.writeFileSync('./src/autoreply.json', JSON.stringify(autoreply))
							reply('Desativou com sucesso o recurso de auto respostas neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
				case 'ship':
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
						client.sendMessage(from, `✅ *RESULTADOS OBTIDOS* ✅\n*CHANCES DE NAMORO ENTRE @${num1.slice(0, -15)} E @${num2.slice(0, -15)}* \n*SÃO DE: ${r}%*`, extendedText, {quoted: mek, contextInfo: { "mentionedJid": [num1, num2]}})
					}, 3000)
					break
					case 'cep':
					try{
						teks = args[0]
						if(isNaN(teks)) return reply('Isso não é um cep')
						anu = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${teks}`, {method: 'get'})
						console.log(anu)
						reply(`*✅ Consulta realizada ✅*\n*CEP:${anu.cep}*\n*Estado:${anu.state}*\n*Cidade: ${anu.city}*\n*Bairro: ${anu.neighborhood}*\n*Rua: ${anu.street}*\n`)
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
							fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
							reply('Ativou com sucesso o recurso de antilink neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antilink.splice(from, 1)
							fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
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
							fs.writeFileSync('./src/antilinkhard.json', JSON.stringify(antilinkhard))
							reply('Ativou com sucesso o recurso de antilink hardcore neste grupo✔️')
						} else if (Number(args[0]) === 0) {
							antilinkhard.splice(from, 1)
							fs.writeFileSync('./src/antilinkhard.json', JSON.stringify(antilinkhard))
							reply('Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
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
					client.sendMessage(from, help(prefix), text)
					break
				case 'pack':
					buffer = await getBuffer(`https://i.imgur.com/5ksFWsr.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: pack(prefix)})
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
                 		 client.sendMessage(from, {displayname: "Ian", vcard: vcard}, MessageType.contact, { quoted: mek})
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
					var framerate = 12
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
						reply(mess.wait)
						execute(`ffmpeg -i ${media} -y -vcodec libwebp -filter_complex "[0:v] scale=512:512,fps=${framerate},pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${ran}`, function(err, res){
							if(err) return reply('Deu erro, tente novamente :/')
							client.sendMessage(from, fs.readFileSync(ran), sticker)
							client.sendMessage(from, `caso a sticker fique parada reduza o fps com ${prefix}stiker <fps>`, text, {quoted:mek})
							setTimeout( async function(){
								fs.unlinkSync(ran)
								fs.unlinkSync(media)
							}, 5000)
						})
					} else return reply(`Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração, caso queira coloque apenas o numero de fps`)
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
				try {
					
					if(args.length < 1) return reply('CADE A PRR DO TEXTO???')
					teks = `${body.slice(8)}`
					gis(teks, logResults);
					async function logResults(error, results) {
						if(error) {
							reply('Deu erro amigo 😓')
						} else {
							r = Math.floor(Math.random() * results.length + 0)
							buff = await getBuffer(results[r].url)
							client.sendMessage(from, buff, image, {quoted: mek, caption: teks})
							
						}
					}
				} catch {
					reply('Deu erro, tente novamente :/')
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
						num1 = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num1])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
				case 'b':
				case 'banir':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
						num1 = mek.message.extendedTextMessage.contextInfo.participant
						client.sendMessage(from, `Banindo ${num1.split('@')[0]}`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
						client.groupRemove(from, [num1])
					}
					else { 
						reply('Responda a mensagem da pessoa')
					}
					break
				case 'ban':
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
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
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
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Ativou com sucesso o recurso de boas-vindas neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
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
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
