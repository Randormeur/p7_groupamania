const Post = require ('../models/Post');

exports.createPost = (req, res, next) => {
    console.log(req.auth)
    return  Post.create({
        
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        image_desc: req.body.image_desc
    })
    .then(() => res.status(201).json({ message: 'Post créé !' }))
    .catch(error => res.status(400).json({ error }));
       
};

exports.getAllPost = (req, res, next ) => {
    Post.findAll()
    .then(
      (posts) => {
        res.status(200).json(posts);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};

exports.getOnePost = (req, res, next) => {
    Post.findAll({where: {
        id: req.params.id
    }}).then( 
      (post) => {
        res.status(200).json(post);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
};

exports.modifyPost = (req, res, next) => {
    // test si il y a une nouvelle image
    /*const sauceObject = req.file ?
      {
        // si fichier existe, on recup la nouvelle image
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        
      } : { ...req.body }; // sinon on reprend body*/
    Post.update({
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        image_desc: req.body.image_desc 
        },
        { where: {id: req.params.id} }) // modification de la sauce
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
    Post.findAll({where: {
        id: req.params.id
    }})
    .then(
        (post) => {
          // Si pas une sauce existance
          if (!post) {
            res.status(404).json({
              error: new Error('No such Post!')
            });
          } else if (post.userid !== req.auth.userId) { // si id créateur sauce n'est pas id utilisateur
            res.status(400).json({
              error: new Error('Unauthorized request!')
            });
          } else {
            Post.destroy({
                where: {
                    id: req.params.id
                }
            }).then( // supression de la sauce 
              () => {
                res.status(200).json({
                  message: 'Deleted!'
                });
              }
            ).catch(
              (error) => {
                res.status(400).json({
                  error: error
                });
              }
            );
          }
          
        }
      )
    .catch(error => res.status(400).json({ error }));
}