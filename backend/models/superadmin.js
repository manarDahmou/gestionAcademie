
const mongoose = require('mongoose') //require c'est importer  // mongoose est lintermidiaire entre le app(express) et le BD

//construire le modele a suivii
const superAdminShema = mongoose.Schema({
    email: String,
    fname: String,
    pwd: String,
});
const superadmin = mongoose.model('Super',superAdminShema); // envoyer a traver le mongoose le model userShema

module.exports = superadmin; //on a exporter le user pour la reutilisation