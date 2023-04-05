import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios"
const Gallery = () => {
  const [photoss, setPhotoss] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("/photos");
        console.log(data)
        console.log(data.data.photosD)

        setPhotoss(data.data.photosD);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='galleryMainContainer'>

      <div className='galleryTitleContainer'>

        <div className='gallerySectionTitle'>
          <p className='gallerySectionTitleInfo'>Welcome to our gallery showroom!</p>
        </div>

      </div>

      <div className='gallerySection'>

        <div className='gallerySectionNavBar'>

        <div class="searchBox">
          <button class="searchBtn"><i class="ri-search-line"></i></button>
          <input type="text" class="searchInput" onChange={(e) => setSearch(e.target.value)} placeholder="Type to Search..."/>
        </div>
        
        </div>

        <div className='gallerySectionList'>

        <Row>
        
        {photoss.filter((photo) => {
          return search.toLowerCase() === '' 
          ? photo : 
          photo.category.toLowerCase().includes(search);
        }).map((photo, index) => {
          return (
            <Col xs={12} md={4} key={index}>
              <div className="photoCard" style={{backgroundImage: `url(${photo.imageUrl})`}}>
                <div className="photoCardInfo">
                <div className="photoCardInfoTitle">{photo.title}</div>
                <div className="photoCardInfoDes">{photo.description}</div>
                </div>
                <div className="photoCardUtilityInfo">
                    <ul className="photoCardUtilityList">
                      <li><i className="ri-image-line photoCardIcons"></i>{photo.category}</li>
                      <li><i className="ri-calendar-event-line photoCardIcons"></i>{photo.dateofphoto}</li>
                      <li><i className="ri-map-pin-fill photoCardIcons"></i>{photo.locationphoto}</li>
                    </ul>
                  </div>
                <div className="photoCardGradientOverlay"></div>
                <div className="photoCardColorOverlay"></div>
              </div>
            </Col>

          );
        })}
      </Row>

        </div>

      </div>

    </div>
  )
}

export default Gallery;