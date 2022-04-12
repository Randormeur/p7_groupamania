const express = require('express');

// iMPORTE ROUTES
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/posts');
const path = require('path');


// INSTALLATION EXPRESS
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
 // SOLUTIONNER PROBLEME CROSS ORIGIN CORS
//d'accéder à notre API depuis n'importe quelle origine 
    res.setHeader('Access-Control-Allow-Origin', '*');
//d'ajouter les headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
// d'envoyer des requêtes avec les méthodes mentionnées 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    // NEXT POUR PASSER AU PROCHAIN MIDDLEWARE
    next();
});

// ENREGISTRE ROUTER POUR TOUTE DEMANDE API 
app.use('/auth', userRoutes);
app.use("/posts", postRoutes);
// app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = {
    path: '/api',
    handler: app
  }