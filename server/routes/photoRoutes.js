const express = require("express");
const app = express();
const photoModel = require("../models/photo");
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;
app.use(express.json());

// Creating a photo card.
app.post("/", async (req, res) => {

  // Informations from input.
  const photoTitle = req.body.newPhoto.title;
  const photoDes = req.body.newPhoto.description;
  const photoCat = req.body.newPhoto.category;
  const photoImg = req.body.newPhoto.image;
  var photo = new photoModel(
    {
      title: photoTitle,
      description: photoDes,
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
  // photo.save(function (error, photoCreated) {
  //   if (error) return console.error(error);
  //   try {

  //     res.send({ code: 200, photo: photoCreated });

  //   } catch (error) {

  //     res.status(500).send(error);

  //   }
  // });
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

// Update
app.get('/update/:id', async (req, res) => {
  try {
    const myModel = await photoModel.findById(new ObjectId(req.params.id));
    res.json(myModel);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.put('/update/:id', async (req, res) => {
  try {
    const updatedMyModel = await photoModel.findByIdAndUpdate(new ObjectId(req.params.id), req.body, { new: true });
    res.json(updatedMyModel);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// app.post("/update", async (req, res) => {
// photoTitle = req.body.newPhoto.title;
// photoDes = req.body.newPhoto.description;
// photoCat = req.body.newPhoto.category;
// photoImg = req.body.newPhoto.image;
// photoModel.updateOne(
//   { _id: req.body.newPhoto.id },
//   { title: photoTitle, description: photoDes, category: photoCat, image: photoImg },
//   function (err, vehicle) {
//     if (err) return handleError(err);
//     res.send({ code: 200, photo: photo });
//   }
// );
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// Updation of vehicle card.
app.post("/update", async (req, res) => {
  const photoTitle = req.body.newPhoto.title;
  const photoDes = req.body.newPhoto.description;
  const photoLoc = req.body.newPhoto.locationphoto;
  const photoDate = req.body.newPhoto.dateofphoto;
  const photoCat = req.body.newPhoto.category;
  const photoImg = req.body.newPhoto.image;

  try {
    const updatedPhoto = await photoModel.findByIdAndUpdate(new ObjectId(req.body.newPhoto.id), {
      title: photoTitle,
      description: photoDes,
      locationphoto: photoLoc,
      dateofphoto: photoDate,
      category: photoCat,
      img: photoImg
    }, { new: true });

    res.send({ code: 200, photo: updatedPhoto });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Updation of photo card.
app.get("/update/:id", async (req, res) => {
  // Takes the specific id to update a card.
  const id = new ObjectId(req.params.id);

  try {
    const photo = await photoModel.findById(id);
    res.send({ code: 200, photo: photo });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Deletion of photo card.
app.get("/delete/:id", async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await photoModel.deleteOne({ _id: id })
    if (result.deletedCount === 1) {
      res.send({
        code: 200,
        message: "Photo has been removed successfully",
      });
    } else {
      res.send({
        code: 404,
        message: "Photo not found",
      });
    }

  } catch (err) {
    console.log(err);
    res.status(500).send({
      code: 500,
      message: "An error occurred while deleting the photo",
    });
  }
});
module.exports = app;
