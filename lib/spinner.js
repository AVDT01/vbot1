var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
    "",
    "ℂ",
    "ℂ𝕣",
    "ℂ𝕣𝕖",
    "ℂ𝕣𝕖𝕒",
    "ℂ𝕣𝕖𝕒𝕥",
    "ℂ𝕣𝕖𝕒𝕥𝕖",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 ",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 ",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝𝟘",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝𝟘𝟙",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝𝟘𝟙𝕕",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝𝟘𝟙𝕕",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝𝟘𝟙𝕕",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝𝟘𝟙𝕕",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝𝟘𝟙𝕕",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝𝟘𝟙𝕕",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝𝟘𝟙𝕕",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝𝟘𝟙𝕕",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝𝟘𝟙𝕕",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝𝟘𝟙",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝𝟘",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘𝕝",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩𝕘",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕩",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 ",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕 ",
    "ℂ𝕣𝕖𝕒𝕥𝕖𝕕",
    "ℂ𝕣𝕖𝕒𝕥𝕖",
    "ℂ𝕣𝕖𝕒𝕥",
    "ℂ𝕣𝕖𝕒",
    "ℂ𝕣𝕖",
    "ℂ𝕣",
    "ℂ",
    ""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}