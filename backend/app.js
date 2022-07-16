const express = require('express') //importation du module express
const mongoose = require('mongoose'); //importer  mongoose
const User = require('./models/user'); //on a importer le user
const Formation = require('./models/formation'); //on a importer le Formation
const Salle = require('./models/salle'); //on a importer le Salle
const path = require('path');
const multer = require('multer');

const bodyParser = require('body-parser'); // on a importer le body parser quin permet de separer chaque attribut ** firstName/lastName/email .. chaque attribut ou input a par comme le standaleone:true dans le ng tdf
//const user = require('./models/user');
const bcrypt = require('bcrypt');
const app = express(); // on faite l'appellet de tout ce qui est dans lexpress dans le app
const Super = require('./models/superadmin');



mongoose.connect('mongodb://localhost:27017/gestionAcademie', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//configuration du body parser
app.use(bodyParser.json()); //format json
app.use(bodyParser.urlencoded({ extended: true }))

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
// const storage = multer.diskStorage({
//     // destination
//     destination: (req, file, cb) => {
//         const isValid = MIME_TYPE[file.mimetype];
//         let error = new Error("Mime type is invalid");
//         if (isValid) {
//             error = null;
//         }
//         //Affecter la destination
//         cb(null, 'backend/images')
//     },
//     //file name
//     filename: (req, file, cb) => {
//         const name = file.originalname.toLowerCase().split('').join('-');
//         const extension = MIME_TYPE[file.mimetype];
//         const imgName = name + '-' + Date.now() + '-crococoder-' +
//             '.' + extension;
//         //Affecter file name
//         cb(null, imgName);
//     }
// });
app.get('/superAdmin', (req, res) => {
    let superAdmin = new Super({
        FirstName: 'Abderahmen',
        role: 'supperAdmin',
        LastName: 'Massmoudi',
        password: '123456789',
        email: 'superAdmin@gmail.com',
        Job: 'engineer Developpement web',
    })
    superAdmin.save();
    console.log('here into add super admin');
})
//login user

// app.post('/superAdmin', (req, res) => {
//     console.log('here frome login');
//     console.log(req.body);

//     Super.findOne({ email: req.body.email }).then(
//       (findedUser) => {
//         if (!findedUser) {
//           res.status(200).json({
//             message: '0'
//           })

//         }
//         return bcrypt.compare(req.body.password, findedUser.password)
//       })
//       .then(
//         (correctUserPwd) => {
//           if (!correctUserPwd) {
//             res.status(200).json({
//               message: '1'
//             });
//           }
//           //email et pwd correct
//           Super.findOne({ email: req.body.email }).then(
//             (finalUser) => {
//               const user = new Super({

//                 id:finalUser._id,
//                 FirstName: finalUser.FirstName,
//                 role: finalUser.role,
//                 LastName: finalUser.LastName,
//                 password: finalUser.password,
//                 email: finalUser.email,
//                 Job: finalUser.Job,
//               });
//               res.status(200).json({
//                 message:'2',
//                 user:user
//               })
//             }
//           )

//         })




//   })
// app.post('/superAdmin', (req, res) => {
//     Super.find((err, docs) => {
//         if (err) {
//             console.log('probléme de connexion avec le BD')
//         } else {
//             res.status(200).json({
//                 superAdmin: docs ,//recuperation de all formateurs
//                 message:'ok'
//             });
//         }
//         })
//     console.log(req.body);

    
  
// });

app.post('/login', (req,res)=>{
    console.log(req.body)
    Super.findOne({ email: req.body.email }).then(
        (findedUser) => {
            if (!findedUser) {
                res.status(200).json({
                    message: '0'
                })
            }
            console.log(req.body.password);
            console.log(findedUser.password);
           
            return bcrypt.compare(req.body.password, findedUser.password);
        })
        .then(
            (correctUserPwd) => {
                console.log(correctUserPwd)
                if (!correctUserPwd) {
                    res.status(200).json({
                        message: '1'
                    });
                }
                //email et pwd correct
                Super.findOne({ email: req.body.email }).then(
                   
                    (finalUser) => {
                        const user = new Super({

                            id: finalUser._id,
                            FirstName: finalUser.FirstName,
                            role: finalUser.role,
                            LastName: finalUser.LastName,
                            password: finalUser.password,
                            email: finalUser.email,
                            Job: finalUser.Job,
                        });
                        res.status(200).json({
                            message: '2',
                            user: user
                        });
                        console.log(finalUser);
                    });

            });
});
//CRUD Formateur
//traitement logique && CRUD   //request/response
app.get('/formateur', (req, res) => {
    console.log('here into Get All formateur');
    User.find((err, docs) => {
        if (err) {
            console.log('probléme de connexion avec le BD')
        } else {
            res.status(200).json({
                formateurs: docs //recuperation de all formateurs
            });

        }
    }

    )
});
app.get('/formateur/:id', (req, res) => {
    console.log('here into get formateur by id');
    console.log(req.params.id);
    User.findOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    finded: result
                })
            }
        }
    );
});
app.delete('/formateur/:id', (req, res) => {
    console.log('here into delete admins');
    console.log(req.params.id);
    User.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'delete from BD with Sucess'
            })
        }
    )
});
app.post('/formateur', multer({
   // storage: storage
}).single('img'), (req, res) => {
    console.log('here into add formateur');
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
    bcrypt.hash(req.body.password, 8).then(//hashage => tofrom tdakhlou baadhou
        (cryptedPwd) => {
            //utiliser le moDele crée user
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age,
                email: req.body.email,
                password: cryptedPwd,
                // confirmPwd: req.body.confirmPwd,
                phone: req.body.phone,//back end : partie front end
                adresse: req.body.adresse,
                CIN: req.body.CIN,
                Experience: req.body.Experience,
                speciality: req.body.speciality,
                cv: req.body.cv,
                role: req.body.role,
               // img: url + '/images/' + req.file.filename
            })
            console.log(req.body) // pour voir le front end
            user.save().then(
                (result) => {
                    res.status(200).json({
                        message: 'formateur added successfully'
                    });
                }
            ); // pour save a la base de donnee puis le retour 
        }
    )


});
app.put('/formateur/:id', (req, res) => {
    console.log('here into edit formateur');
    console.log(req.body);
    const user = new User({
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password,
        // confirmPwd: req.body.confirmPwd,
        phone: req.body.phone,//back end : partie front end
        adresse: req.body.adresse,
        CIN: req.body.CIN,
        Experience: req.body.Experience,
        speciality: req.body.speciality,
        cv: req.body.cv,
        //img: url + '/images/' + req.file.filename
        //role: req.body.role,
    })
    User.updateOne({ _id: req.params.id }, user).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'update with success'
                })
            }

        });
    console.log(req.body);

});

////////////////////////////////
app.get('/formateur/generateFile/pdf',(req,res)=>{
    console.log('get your pdf');
}
)
//CRUD formee
//traitement logique && CRUD   //request/response
app.get('/formee', (req, res) => {
    console.log('here into Get All formee');
    User.find((err, docs) => {
        if (err) {
            console.log('probléme de connexion avec le BD')
        } else {
            res.status(200).json({
                formees: docs //recuperation de all formateurs
            });

        }
    }

    )
});
app.get('/formee/:id', (req, res) => {
    console.log('here into get formee by id');
    console.log(req.params.id);
    User.findOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    finded: result
                })
            }
        }
    );
});
app.delete('/formee/:id', (req, res) => {
    console.log('here into delete formee');
    console.log(req.params.id);
    User.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'delete from BD with Sucess'
            })
        }
    )

});
app.post('/formee', (req, res) => {
    console.log('here into add formee');
    //utiliser le moDele crée user
    bcrypt.hash(req.body.password, 8).then(
        (cryptedPwd) => {
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age,
                email: req.body.email,
                password: cryptedPwd,
                confirmPwd: req.body.confirmPwd,
                phone: req.body.phone,//back end : partie front end
                adresse: req.body.adresse,
                CIN: req.body.CIN,
                level: req.body.level,
                dateDebutFormation: req.body.dateDebutFormation,
                dateFinFormation: req.body.dateFinFormation,
                price: req.body.price,
                modePayment: req.body.modePayment,
                Formation: req.body.Formation,
                role: req.body.role,
            })
            console.log(req.body) // pour voir le front end
            user.save().then(
                (result) => {
                    res.status(200).json({
                        message: 'formee added successfully'
                    });
                }
            );; //retour aprés sauvgarde
        });
});
app.put('/formee/:id', (req, res) => {
    console.log('here into edit formee');
    console.log(req.body);
    console.log(req.body._id);
    const user = new User({
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password,
        confirmPwd: req.body.confirmPwd,
        phone: req.body.phone,//back end : partie front end
        adresse: req.body.adresse,
        CIN: req.body.CIN,
        level: req.body.level,
        dateDebutFormation: req.body.dateDebutFormation,
        dateFinFormation: req.body.dateFinFormation,
        price: req.body.price,
        modePayment: req.body.modePayment,
        Formation: req.body.Formation,
        // role: req.body.role,
    });
    User.updateOne({ _id: req.params.id }, user).then(
        (result) => {

            if (result) {
                res.status(200).json({
                    message: 'result'
                });

            } else {
                console.log('err de connexion a la bd');
            }
        });
    console.log(req.body);
});

//CRUD formation
//traitement logique && CRUD   //request/response
app.get('/formation', (req, res) => {
    console.log('here into Get All formation');
    Formation.find((err, docs) => {
        if (err) {
            console.log('probléme de connexion avec le BD')
        } else {
            res.status(200).json({
                formations: docs //recuperation de all formations
            });

        }
    }

    )
});
app.get('/formation/:id', (req, res) => {
    console.log('here into get formation by id');
    console.log(req.params.id);
    Formation.findOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    finded: result
                })
            }
        }
    );
});
app.delete('/formation/:id', (req, res) => {
    console.log('here into delete formation');
    console.log(req.params.id);
    Formation.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'delete from BD with Sucess'
            })
        }
    )
});
app.post('/formation', (req, res) => {
    console.log('here into add formation');
    //utiliser le moDele crée user
    const formation = new Formation({
        nameFormation: req.body.nameFormation,
        nameFormateur: req.body.nameFormateur,
        dateDebutFormation: req.body.dateDebutFormation,
        dateEndFormation: req.body.dateEndFormation,
        programme: req.body.programme,
        nbHeur: req.body.nbHeur,
        price: req.body.price,//back end : partie front end
        nbFormee: req.body.nbFormee
    })
    console.log(req.body) // pour voir le front end
    formation.save().then(
        (result) => {
            res.status(200).json({
                message: 'formation added successfully'
            });
        }
    );; // pour save a la base de donnee
});
app.put('/formation/:id', (req, res) => {
    console.log('here into edit formation');
    console.log(req.body.dateDebutFormation);
    console.log(req.body.dateEndFormation);
    const user = new Formation({
        _id: req.body._id,
        nameFormation: req.body.nameFormation,
        nameFormateur: req.body.nameFormateur,
        dateDebutFormation: req.body.dateDebutFormation,
        dateEndFormation: req.body.dateEndFormation,
        programme: req.body.programme,
        nbHeur: req.body.nbHeur,
        price: req.body.price,
        nbFormee: req.body.nbFormee,
    })
    Formation.updateOne({ _id: req.params.id }, user).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'update with success'
                })
            }

        }
    );
});


//CRUD salles
//traitement logique && CRUD   //request/response
app.get('/salles', (req, res) => {
    console.log('here into Get All salles');
    Salle.find((err, docs) => {
        if (err) {
            console.log('probléme de connexion avec le BD')
        } else {
            res.status(200).json({
                salles: docs //recuperation de all salles
            });

        }
    }

    )
});
app.get('/salles/:id', (req, res) => {
    console.log('here into get salles by id');
    console.log(req.params.id);
    Salle.findOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    finded: result
                })
            }
        }
    );
});
app.delete('/salles/:id', (req, res) => {
    console.log('here into delete salles');
    console.log(req.params.id);
    Salle.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'delete from BD with Sucess'
            })
        }
    )
});
app.post('/salles', (req, res) => {
    console.log('here into add salles');
    //utiliser le moDele crée user
    const salle = new Salle({
        name: req.body.name,
        nbchaisse: req.body.nbchaisse,

    })
    console.log(req.body) // pour voir le front end
    salle.save().then(
        (result) => {
            res.status(200).json({
                message: 'salle added successfully'
            });
        }
    );; // pour save a la base de donnee
});
app.put('/salles/:id', (req, res) => {
    console.log('here into edit salles');
    const salle = new Salle({
        _id: req.body._id,
        name: req.body.name,
        nbchaisse: req.body.nbchaisse,

    })
    Salle.updateOne({ _id: req.params.id }, salle).then(
        (result) => {

            if (result) {
                res.status(200).json({
                    message: 'result'
                });

            } else {
                console.log('err de connexion a la bd');
            }
        });
});

//CRUD stagiere
//traitement logique && CRUD   //request/response
app.get('/stagiere', (req, res) => {
    console.log('here into Get All stagiere');
    User.find((err, docs) => {
        if (err) {
            console.log('probléme de connexion avec le BD')
        } else {
            res.status(200).json({
                stagieres: docs //recuperation de all stagieres
            });

        }
    }

    )
});
app.get('/stagiere/:id', (req, res) => {
    console.log('here into get stagiere by id');
    User.findOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    finded: result
                })
            }
        }
    );
});
app.delete('/stagiere/:id', (req, res) => {
    console.log('here into delete stagiere');
    console.log(req.params.id);
    User.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'delete from BD with Sucess'
            })
        }
    )

});
app.post('/stagiere', (req, res) => {
    console.log('here into add stagiere');
    bcrypt.hash(req.body.password, 8).then(
        (cryptedPwd) => {
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age,
                email: req.body.email,
                password: cryptedPwd,
                confirmPwd: req.body.confirmPwd,
                phone: req.body.phone,//back end : partie front end
                adresse: req.body.adresse,
                CIN: req.body.CIN,
                stage: req.body.stage,
                cv: req.body.cv,
                image: req.body.image,

                role: req.body.role,
            })
            console.log(req.body) // pour voir le front end
            user.save().then(
                (result) => {
                    res.status(200).json({
                        message: 'stagiere added successfully'
                    });
                }
            );
        });
});
app.put('/stagiere/:id', (req, res) => {
    console.log('here into edit stagiere');
    const user = new User({
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password,
        confirmPwd: req.body.confirmPwd,
        phone: req.body.phone,//back end : partie front end
        adresse: req.body.adresse,
        CIN: req.body.CIN,
        stage: req.body.stage,
        cv: req.body.cv,
        image: req.body.image,

        role: req.body.role,
    })
    User.updateOne({ _id: req.params.id }, user).then(
        (result) => {

            if (result) {
                res.status(200).json({
                    message: 'result'
                });

            } else {
                console.log('err de connexion a la bd');
            }
        });
    console.log(req.body);
});
app.post('/users/signup',  (req, res) => {
    console.log('Here into signup', req.body);
    bcrypt.hash(req.body.pwd, 10).then(
        (cryptedPwd) => {

            const superAd = new Super({

                email: req.body.email,
                fname: req.body.fname,
                lname: req.body.lname,
                pwd: cryptedPwd,
            });
            superAd.save((err, result) => {
                console.log('Error', err);
                console.log('Result', result);
                if (result) {
                    res.status(200).json({
                        message: 'Added with success'
                    });

                }
            });
        }
    )
});
app.post('/users/login', (req, res) => {
    console.log('Here into Login', req.body);
    Super.findOne({ email: req.body.email }).then(
        (emailResult) => {
            console.log('Email Result', emailResult);
            if (!emailResult) {
                res.status(200).json({
                    message: '0'
                })
            }
            return bcrypt.compare(req.body.pwd, emailResult.pwd)
        }).then(
            (pwdResult) => {
                console.log('pwdResult', pwdResult);
                if (!pwdResult) {
                    res.status(200).json({
                        message: '1'
                    })
                }
                Super.findOne({ email: req.body.email }).then(
                    (finalResult) => {
                        let userToSend = {
                            fName: finalResult.fname,
                            id: finalResult._id,
                        }
                        console.log('User to send', userToSend);
                        res.status(200).json({
                            message: '2',
                            userToSend: userToSend
                        })
                    }
                )
            }
        )
});
app.get('/users/profile/:id', (req, res) => {
    console.log('here into get admin by ID', req.params.id);
    Super.findOne({ _id: req.params.id }).then(
        (result) => {
            console.log('Result after get by ID', result);
            if (result) {
                res.status(200).json({
                    finded: result,
 
                })

            }
        }
    )
})

module.exports = app; //on a exporter le app pour la réutiliser