const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({

  titre: String,

  contenu: String,

  estArchive: Boolean,

  nbreLecture: Number,

  categories: [String],

  featuredBlog: mongoose.Schema.Types.ObjectId,

  auteur: {
    nom: String,
    adresse: String,
  },

  datePublie: Date,

});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;