
const mongoose = require('mongoose') //require c'est importer  // mongoose est lintermidiaire entre le app(express) et le BD

//construire le modele a suivii
const userShema = mongoose.Schema({

    name:String,
    nbchaisse:String,
    
    

});
const user = mongoose.model('Salle',userShema); // envoyer a traver le mongoose le model userShema

module.exports = user; //on a exporter le user pour la reutilisation