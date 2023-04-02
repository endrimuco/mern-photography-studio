import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios"
const Gallery = () => {
  const [photoss, setPhotoss] = useState([]);

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
  return (
    <div className='galleryMainContainer'>

      <div className='galleryTitleContainer'>

        <div className='gallerySectionTitle'>
          <p className='gallerySectionTitleInfo'>Welcome to our gallery showroom!</p>
        </div>

      </div>

      <div className='gallerySection'>

        <div className='gallerySectionNavBar'>
          <Link className="navBtn" to="/">All
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
          </Link>
          <span className='gallerySpanDot'>.</span>
          <Link className="navBtn" to="/about">Wedding
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
          </Link>
          <span className='gallerySpanDot'>.</span>
          <Link className="navBtn" to="/gallery">Seasons
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
          </Link>
          <span className='gallerySpanDot'>.</span>
          <Link className="navBtn" to="/contact">Our Workshop
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
            <span className='navBtnSpan'></span>
          </Link>
        </div>

        <div className='gallerySectionList'>

        <Row>
        {/* shaqen vendet */}
        {photoss.map((photo, index) => {
          return (
            <Col xs={12} md={4} key={index}>
              <div class="photoCard" style={{backgroundImage: `url(${photo.imageUrl})`}}>
                <div class="photoCardInfo">
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

        </div>

      </div>

    </div>
  )
}

export default Gallery;