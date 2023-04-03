import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";


const UpdatePhoto = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [category, setCategory] = useState("");
  const [dateofphoto, setDateOfPhoto] = useState("");
  const [locationphoto, setLocationPhoto] = useState("");


  useEffect(() => {
    // alert will pop up!
    if (!localStorage.getItem("loggedIn")) {
      alert("Please enter your credentials!");
      navigate("/");
    }
    const fetchData = async () => {
        try {
          const data = await axios.get(`/update/${id}`);
          if (data) {
            setPhoto(data.data.photo.title);
            setDescription(data.data.photo.description);
            setCategory(data.data.photo.category);
            setDateOfPhoto(data.data.photo.dateofphoto);
            setLocationPhoto(data.data.photo.km);
            setSelectedFile(data.data.photo.img)
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
  }, [navigate, id]);

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
      id: id,
      title: photo,
      description: description,
      image: selectedFile,
      category: category,
      dateofphoto: dateofphoto,
      locationphoto: locationphoto,
    };
    axios.post("/update", { newPhoto }).then((res) => {
      if (res.data.code === 200) {
        console.log('Updating..')
        // navigate("/gallery");
      } else {
        alert("Photo hasn't been updated yet to DataBase.");
      }
    });
  };

  return (
    <div className="createPhotoContainer">


      <form className="createPhotoForm BBred">

        <div className="createPhotoFormInputs BBred">

        <div className="createPhotoInputStyle BBred">
            <p className="createPhotoFormTitles">Update Title</p>
            <input
              type="text"
              onChange={(e) => setPhoto(e.target.value)}
              value={photo}
              placeholder="Update title"
              className="createPhotoInput"
            />
          </div>

          <div className="createPhotoRow">

          <div className="createPhotoInputStyle createPhotoCol BBred">
            <p className="createPhotoFormTitles">Photo Location</p>
            <input
              type="text"
              onChange={(e) => setLocationPhoto(e.target.value)}
              value={locationphoto}
              placeholder="Update location"
              className="createPhotoInput"
            />
          </div>

          <div className="createPhotoInputStyle createPhotoCol BBred">
            <p className="createPhotoFormTitles">Photo Date</p>
            <input
              type="date"
              onChange={(e) => setDateOfPhoto(e.target.value)}
              value={dateofphoto}
              placeholder="Update date"
              className="createPhotoInput"
            />
          </div>

          <div className="createPhotoInputStyle createPhotoCol BBred">
            <p className="createPhotoFormTitles">Update Category</p>
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
            <p className="createPhotoFormTitles">Update Description</p>
            <textarea
              type="textarea" rows={6}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Update description"
              className="createPhotoInputDes"
            />
          </div>

          <div className="createPhotoInputStyle" controlId="formFile">
            <p className="createPhotoFormTitles">Image</p>
            <input type="file" className="createPhotoInput" onChange={onFileChange} />
          </div>

          <button className="createPhotoAddBtn" onClick={handleSubmit}>Add</button>

        </div>

        <div className="createPhotoImageDiv BBred">

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

export default UpdatePhoto;
