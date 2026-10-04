const mongoose = require('mongoose');
const Blog = require('./blog');

(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/testMongoose");
    console.log("Connexion réussie avec la base de données");

    const result = await Blog.create(
     {
        titre: "Mon titre 1",
        contenu: "Mon contenu 2",
        estArchive: "yes",
        nbreLecture: 43,
        categories: ["voyage", "sport"],
        featuredBlog: "507f1f77bcf86cd89d449998",
        auteur: {
            nom: "Souleymane",
            adresse: "Dakar",
        },

      }
    );

    console.log(result);
  } catch (error) {
    console.log(error.mess age);
  }
})();
