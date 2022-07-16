
const mongoose = require('mongoose') //require c'est importer  // mongoose est lintermidiaire entre le app(express) et le BD

//construire le modele a suivii
const userShema = mongoose.Schema({
    //formateur
    firstName:String,
    //_id:String,
    lastName:String,
    age:String,
    email:String,
    password:String,
    confirmPwd:String,
    phone:String,
    adresse:String,
    CIN:String,
    Experience:String,
    speciality:String,
    cv:String,
    img:String,
    //formee
    level:String,
    dateDebutFormation:String,
    dateFinFormation:String,
    price:String,
    modePayment:String,
    Formation:String,
    //stagiere
    stage:String,
    role:String,
    Job:String,
});
const user = mongoose.model('User',userShema); // envoyer a traver le mongoose le model userShema

module.exports = user; //on a exporter le user pour la reutilisation