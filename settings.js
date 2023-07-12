const fs = require('fs')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU

global.namabot = "KOBBOY GEN-1" // UBAH JADI NAMA LU
global.namaowner = "ADITT" // NAMA OWNER
global.footer_text = "kOBBOY GEN-1 By ADITT" // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['62089506165150'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
global.packname = '© KOBBOY GEN-1' //sticker wm ubah
global.author = 'Di Buat Oleh ADITT' //sticker wm ganti nama kalian
// = \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.script = ("-") // JANGAN DI HAPUS NANTI ERROR KOAR²
global.fakelink = "https://chat.whatsapp.com/G1KgMa539334bkZeR9TIGx" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://chat.whatsapp.com/G1KgMa539334bkZeR9TIGx`) // GANTI LINK GRUB BOT LU \\
// - \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})
