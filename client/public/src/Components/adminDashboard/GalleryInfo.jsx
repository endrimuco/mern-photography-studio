import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const GalleryInfo = () => {
  const [photoss, setPhotoss] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("/photos");
        console.log(data)
        console.log(data.data.photosD)
        // photoss termi i perdorur tek router qe te behet kalimi i info
        setPhotoss(data.data.photosD);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {

    axios.get(`/delete/${id}`).then((res) => {
      if (res.data.code === 200) {
        var newPhotos = photoss.filter((ele) => ele._id !== id);
        setPhotoss(newPhotos);
        navigate("/loginsadmin/myadmin");
      } else {
        alert("Delete failed.");
      }
    });
  };
  return (
    <Container className="mt-5">
      <h1>GalleryInfo</h1>
      <Row>
        {/* shaqen vendet */}
        {photoss.map((photo, index) => {
          return (
            <Col xs={12} md={4} key={index}>
               <div class="photoCard" style={{backgroundImage: `url(${photo.imageUrl})`}}>
                           
                <div class="photoCardInfo">

                <div>
                    <button type="adminUpdateBtn"><Link to={`/update/${photo._id}`}><i class="ri-edit-box-line"></i></Link></button>
                    <button type="adminDeleteBtn" onClick={() => handleDelete(photo._id)}><i class="ri-close-circle-line"></i></button>
               </div>

                <div className="photoCardInfoTitle">{photo.title}</div>
                <div className="photoCardInfoDes">{photo.description}</div>
                </div>
                <div class="photoCardUtilityInfo">
                    <ul class="photoCardUtilityList">
                      <li><i class="ri-image-line photoCardIcons"></i>{photo.category}</li>
                      <li><i class="ri-calendar-event-line photoCardIcons"></i>{photo.dateofphoto}</li>
                      <li><i class="ri-map-pin-fill photoCardIcons"></i>{photo.locationphoto}</li>
                    </ul>
                  </div>
                <div class="photoCardGradientOverlay"></div>
                <div class="photoCardColorOverlay"></div>
              </div>
            </Col>

          );
        })}
      </Row>
    </Container>
  )
}

export default GalleryInfo