const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require ('../models/User');
const sequelize = require('../utils/database');


// ENREGISTREMENT DE NOVUEAU UTILISATEUR

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            
            User.create({
            userid: req.body.userid,
            email: req.body.email,
            password: hash,
            name: req.body.name,
            age: req.body.age
            })
            .then(result => res.status(201).json({ message: 'utilisateur créé', _id: result.id}))
            .catch(error => res.status(400).json({ error }));
            
        }
        )
        .catch(error => res.status(400).json({ error : "meme pas hash" }));
        
};

exports.login = (req, res, next) => {
    // chercher un utilisateur dont l'addresse mail correspond dans la requete
  User.findOne({where:{ email: req.body.email }})
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }

      // comparé mdp dans req body avec user dans base de donnée
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          // on renvoie un objet json qui contient un user id et un token pour la connection
          res.status(200).json({
            userId: user.id,
            token: jwt.sign(
                { userId: user.id },
                 process.env.secretToken,
                { expiresIn: '24h' }
              )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.user = function(req, res) {
  var token = req.headers.authorization
  if (token) {
    // verifies secret and checks if the token is expired
    jwt.verify(token.replace(/^Bearer\s/, ''),  process.env.secretToken, function(err, decoded) {
      if (err) {
        return res.status(401).json({message: 'unauthorized'})
      } else {
        return res.json({ user: decoded })
      }
    });
  }
  else{
    return res.status(401).json({message: 'unauthorized'})
  }
}