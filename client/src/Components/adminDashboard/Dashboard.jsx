import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './admin.css';
import CreatePhoto from './createPhoto';
import GalleryInfo from './GalleryInfo';
import { Link } from 'react-router-dom';
import UpdatePhoto from "./updatePhoto";

const AdminDashboard = () => {
  const [showCreatePhoto, setShowCreatePhoto] = useState(false);
  const [showUpdatePhoto, setShowUpdatePhoto] = useState(false);
  const [showGalleryInfo, setGalleryInfo] = useState(false);
  const navigate = useNavigate();

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(localStorage.getItem("loggedIn"));

  useEffect(() => {
    setIsAdminLoggedIn(localStorage.getItem("loggedIn"));

  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsAdminLoggedIn(false);
  }

  const handleCreatePhotoClick = () => {
    setGalleryInfo(false);
    setShowCreatePhoto(true);
  };

  const handleGalleryInfoClick = () => {
    setShowCreatePhoto(false);
    setGalleryInfo(true);
  };

  const handleUpdatePhotoClick = () => {
    setShowCreatePhoto(false);
    setGalleryInfo(false);
    setShowUpdatePhoto(true);
  };

  return (
    <div className='adminContainer'>
      <div className='adminLeftSideBar'>
        <div className='adminAccountStats'>
          <i className="ri-shield-user-line adminIconUser"></i>
          <p className='adminAccountTitle'>Administrator</p>
          <p className='adminAccount'>adminuser</p>
        </div>

        <div className='adminButtons'>
          <Link className="adminBtn" onClick={handleCreatePhotoClick}>Create Photo</Link>
        </div>

        <div className='adminButtons'>
          <Link className="adminBtn" onClick={handleGalleryInfoClick}>Gallery</Link>
        </div>

               {isAdminLoggedIn &&
                  <div className='adminButtons'>
                  <Link className="adminBtn" to="/loginasadmin" onClick={handleLogout}>Logout</Link>
                </div>
                }

      </div>

      <div className='adminMainBar'>
        <div className='adminTopSideBar'>
          <p className='adminWelcomeTitle'>Welcome to your admin dashboard!</p>
        </div>

        <div className='adminScreenShow'>
          {showCreatePhoto && <CreatePhoto />}
          {showGalleryInfo && <GalleryInfo />}
          {showUpdatePhoto && <UpdatePhoto />}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
