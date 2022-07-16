
const mongoose = require('mongoose') //require c'est importer  // mongoose est lintermidiaire entre le app(express) et le BD

//construire le modele a suivii
const userShema = mongoose.Schema({

    nameFormation:String,
    nameFormateur:String,
    dateDebutFormation:String,
    dateEndFormation:String,
    programme:String,
    nbHeur:String,
    price:String,
    nbFormee:String,

});
const user = mongoose.model('Formation',userShema); // envoyer a traver le mongoose le model userShema

module.exports = user; //on a exporter le user pour la reutilisation