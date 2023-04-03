const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
    title: String,
    description: String,
    locationphoto: String,
    dateofphoto: String,
    category: {
      type: String,
      enum: ['wedding', 'season', 'catalog',]
    },
    imageUrl: String,
    date: Date
  });
  
  const Photo = mongoose.model('Photo', photoSchema);

  module.exports = Photo;