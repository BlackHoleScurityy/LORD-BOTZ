// menu fitur bot
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `
	
\`\`\`FOLLOW IG SANG LORD\`\`\`
https://instagram.com/sanglord_

\`\`\`YOUTUBE SANG LORD\`\`\`
https://youtube.com/c/MikazuMZ

\`\`\`WA SANG LORD\`\`\`
wa.me/6283144780782


\`\`\`HARAP BACA NOTE DIBAWAH SEBELUM\`\`\`
\`\`\`MENGGUNAKAN BOT\`\`\`

╭──────「 *REGULATION ${name}* 」
┴
┣⊱  \`\`\`NAMA USER:\`\`\` *${pushname2}*
┣⊱  \`\`\`VERIVICATION:\`\`\` ✅
┣⊱  \`\`\`LIMIT:\`\`\` *${limitt} perhari*
┣⊱  \`\`\`AKTIF:\`\`\` ${kyun(uptime)}
┣⊱  \`\`\`JAM:\`\`\` *${jam} WIB*
┣⊱  \`\`\`TANGGAL:\`\`\` *${tanggal}*
┣⊱  \`\`\`VERSION:\`\`\` *6.5.0*
┣⊱  \`\`\`USER TERDAFTAR:\`\`\` *${user.length} User*
┣⊱  ❌ *SPAM*
┣⊱  ❌ *CALL & VC*
┣⊱  \`\`\`Melanggar??\`\`\` *Banned + Out Group*
┬
╰────────────────────────


╭──────「 *ABOUT* 」
┴
┃├♡ۜۜ͜͡✿➤ *${prefix}report lapor bug*
┃├♡ۜۜ͜͡✿➤ *${prefix}info*
┃├♡ۜۜ͜͡✿➤ *${prefix}donasi*
┃├♡ۜۜ͜͡✿➤ *${prefix}owner*
┃├♡ۜۜ͜͡✿➤ *${prefix}speed*
┃├♡ۜۜ͜͡✿➤ *${prefix}daftar*
┃├♡ۜۜ͜͡✿➤ *${prefix}limit*
┃├♡ۜۜ͜͡✿➤ *${prefix}totaluser*
┃├♡ۜۜ͜͡✿➤ *${prefix}blocklist*
┃├♡ۜۜ͜͡✿➤ *${prefix}banlist*
┃├♡ۜۜ͜͡✿➤ *${prefix}premiumlist*
┃├♡ۜۜ͜͡✿➤ *${prefix}bahasa*
┬
╰────────────────────────

╭───────────────────
┃╭─────────────────
┃├======={ *MENU* }=======
┃├♡ۜۜ͜͡✿➤ *${prefix}mediamenu*
┃├♡ۜۜ͜͡✿➤ *${prefix}premium*
┃├♡ۜۜ͜͡✿➤ *${prefix}allmenu*
┃├♡ۜۜ͜͡✿➤ *${prefix}vnmenu*
┃├♡ۜۜ͜͡✿➤ *${prefix}creatormenu*
┃├♡ۜۜ͜͡✿➤ *${prefix}groupmenu*
┃├♡ۜۜ͜͡✿➤ *${prefix}makermenu*
┃├♡ۜۜ͜͡✿➤ *${prefix}funmenu*
┃├♡ۜۜ͜͡✿➤ *${prefix}nsfwmenu*
┃├♡ۜۜ͜͡✿➤ *${prefix}onwermenu*
┃├======={ *MENU* }=======
┃╰─────────────────
╰────────────────────


╭─────「 *TQTO* 」
┴
│➲ *BLACK TEAM*
  [GITHUB] https://github.com/BlackHoleScurityy
│➲ *ZAKI GANS*
  [GITHUB] https://github.com/ZakiGans
│➲ *SANG LORD*
  [GITHUB] https://github.com/SangLord
│➲ *FARHAN (Fxc7)
  [GITHUB] https://github.com/Fxc7
│➲ *DAN SELURUH CREATOR BOT*
┬
╰────────────────────────`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// info bot 
const bottt = (prefix) => {
return `
\`\`\`Untuk Sekarang Bot Hanya Bisa Digunakan Di Group Karna\`\`\` *TERSERAH GUA ANJING*\n\n *Sedih Gua Liat Nya*
ayam so sad 

Jika Bot Ini Ada Di Grup Anda Owner  Suruh Aktifkan Bot Dengan Cara ${prefix}bott aktif [NO OWNER] wa.me/6283144780782
`
}
exports.bottt = bottt
// donasi menu
const donasi = (name) => { 
	return `       
╭─────「 *DONASI SEIKHLASNYA* 」
┴
│√ *PULSA: 083144780782*
│√ *OVO : 08311800241*
│
│\`\`\`Pulsa\`\`\`
│ *15k Invite Bot Ke Grup selama 1 bulan*
│
│\`\`\`OVO\`\`\`
│ *10k Invite Bot Ke Group Selama 1 Bulan*
┬
╰──────「 *BY ${name}* 」

Untuk Kelangsungan Hidup Bot Karna Kuota Mahal:'
`
}
exports.donasi = donasi

// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command *${prefix}tts*

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*maaf ${pushname2} limit hari ini habis*\n*limit di reset setiap jam 12:00 WIB TENGAH MALAM*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: ${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount