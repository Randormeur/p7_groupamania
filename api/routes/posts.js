// ROUTER 
const express = require('express');
// CREATION D UN ROUTER
const router = express.Router();

// middleware pour proteger la route
const auth = require('../middleware/auth');
//middleware pour l'image
//const multer = require('../middleware/multer-config');
//middleware pour verifier input du formulaire
//const validateInput = require('../middleware/validateInput');


// appel du model mongoose dans ce fichier
const postCtrl = require ('../controllers/post');
//const likeCtrl = require ('../controllers/like')

// Route Affichage de toutes les sauces
router.get('/', auth, postCtrl.getAllPost);
// Route Creation d'une sauce
router.post('/', auth, postCtrl.createPost);
// Route Affichage d'une sauce
router.get('/:id', auth, postCtrl.getOnePost);
// Route Modification d'une sauce
router.put('/:id', auth, postCtrl.modifyPost);
// Route Supression d'une sauce
router.delete('/:id', auth, postCtrl.deletePost);
// Route  Modification des likes/dislikes d'une sauce
//router.post('/:id/like', auth, likeCtrl.modifyLike);

module.exports = router;