import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const CreatePhoto = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [category, setCategory] = useState("");
  const [dateofphoto, setDateOfPhoto] = useState("");
  const [locationphoto, setLocationPhoto] = useState("");

  // Img Configurations
  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();
      // Convert the file to base64 text
      reader.readAsDataURL(file);
      // on reader load something...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  // On file select (from the pop up)
  const onFileChange = (e) => {
    // Update the state
    let file = e.target.files[0];
    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        setSelectedFile(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function of creating a photo card.
  const handleSubmit = (e) => {
    e.preventDefault();
    var newPhoto = {
      title: photo,
      description: description,
      image: selectedFile,
      category: category,
      dateofphoto: dateofphoto,
      locationphoto: locationphoto,
    };
    axios.post("/photos", { newPhoto }).then((res) => {
      if (res.data.code === 200) {
        console.log('Posting..')
        navigate("/gallery")
      } else {
        alert("Photo hasn't been added to DataBase.");
      }
    });
  };

  return (
    <div className="createPhotoContainer">


      <form className="createPhotoForm ">

        <div className="createPhotoFormInputs ">

        <div className="createPhotoInputStyle ">
            <p className="createPhotoFormTitles">Photo Title</p>
            <input
              type="text"
              onChange={(e) => setPhoto(e.target.value)}
              value={photo}
              placeholder="Enter a title"
              className="createPhotoInput"
            />
          </div>

          <div className="createPhotoRow">

          <div className="createPhotoInputStyle createPhotoCol ">
            <p className="createPhotoFormTitles">Photo Location</p>
            <input
              type="text"
              onChange={(e) => setLocationPhoto(e.target.value)}
              value={locationphoto}
              placeholder="Enter a location"
              className="createPhotoInput"
            />
          </div>

          <div className="createPhotoInputStyle createPhotoCol ">
            <p className="createPhotoFormTitles">Photo Date</p>
            <input
              type="date"
              onChange={(e) => setDateOfPhoto(e.target.value)}
              value={dateofphoto}
              placeholder="Enter a date"
              className="createPhotoInput"
            />
          </div>

          <div className="createPhotoInputStyle createPhotoCol ">
            <p className="createPhotoFormTitles">Category</p>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="createPhotoInputCat"
            >
              <option value="">Select a category</option>
              <option value="wedding">Wedding</option>
              <option value="catalog">Catalog</option>
              <option value="season">Season</option>
            </select>
          </div>
            
          </div>

          <div className="createPhotoInputStyle">
            <p className="createPhotoFormTitles">Description</p>
            <textarea
              type="textarea" rows={6}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Enter a short description for the photo"
              className="createPhotoInputDes"
            />
          </div>

          <div className="createPhotoInputStyle" controlId="formFile">
            <p className="createPhotoFormTitles">Image</p>
            <input type="file" className="createPhotoInput" onChange={onFileChange} />
          </div>

          <button className="createPhotoAddBtn" onClick={handleSubmit}>Add</button>

        </div>

        <div className="createPhotoImageDiv ">

          {selectedFile && selectedFile !== "" && (
            <img
              className="createPhotoImage"
              src={selectedFile}
              alt=""
            />
          )}

        </div>

      </form>

    </div>
  );
};

export default CreatePhoto;
