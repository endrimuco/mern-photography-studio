const express = require("express");
const app = express();
const photoModel = require("../models/photo");


// Creating a photo card.
app.post("/", async (req, res) => {

  // Informations from input.
  const photoTitle = req.body.newPhoto.title;
  const photoDes = req.body.newPhoto.description;
  const photoLoc = req.body.newPhoto.locationphoto;
  const photoDate = req.body.newPhoto.dateofphoto;
  const photoCat = req.body.newPhoto.category;
  const photoImg = req.body.newPhoto.image;
  var photo = new photoModel(
    {
      title: photoTitle,
      description: photoDes,
      locationphoto: photoLoc,
      dateofphoto: photoDate,
      category: photoCat,
      imageUrl: photoImg
    });
  photo.save().then(() => {
    // res.render("secrets");
    res.send({ code: 200 });
  }).catch((err) => {
    console.log(err);
    res.status(500).send(err);
  })
  
});


// Taking infos from database and shows them in gallery.
app.get("/", async (req, res) => {

  const photos = await photoModel.find({});
  try {

    res.send({ code: 200, photosD: photos });

  } catch (error) {

    res.status(500).send(error);

  }
});


function handleError(error) {
  console.error(error);
}

app.post("/update", async (req, res) => {
  const photoTitle = req.body.newPhoto.title;
  const photoDes = req.body.newPhoto.description;
  const photoLoc = req.body.newPhoto.locationphoto;
  const photoDate = req.body.newPhoto.dateofphoto;
  const photoCat = req.body.newPhoto.category;
  const photoImg = req.body.newPhoto.image;
  photoModel.updateOne(
    { _id: req.body.newPhoto.id },
    { title: photoTitle, description: photoDes, locationphoto: photoLoc, dateofphoto: photoDate, category: photoCat, image: photoImg },
    function (err, photo) {
      if (err) return handleError(err);
      res.send({ code: 200, photo: photo });
    }
  );
});

// Updation of vehicle card.
app.get("/update/:id", async (req, res) => {

  // Takes the specific id to update a card.
  const id = req.params.id;

  const photo = await photoModel.findOne({ _id: id });
  try {
    res.send({
      code: 200,
      photo: photo
    });

  } catch (error) {

    res.status(500).send(error);

  }
});

// Deletion of photo card.
app.get("/delete/:id", async (req, res) => {
  //  Takes the specific id to delete a card.
  const id = req.params.id;
  photoModel.remove({ _id: id }, function (error, data) {
    if (error) res.send({ code: 400, message: "User not found" });
    else
      res.send({
        code: 200,
        message: "Photo has been removed successfully",
      });
  });
});

module.exports = app;
