import React, { useState } from 'react'
import { GoPersonAdd } from 'react-icons/go'
import { RiFileAddLine } from 'react-icons/ri'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { TbCategory } from 'react-icons/tb'
import Adduser from './Pages/Adduser'
import AddPost from './Pages/AddPost'
import { IoPersonCircle } from 'react-icons/io5'
import { FaRegAddressCard } from 'react-icons/fa'
import UserPostList from './Pages/UserPostList'
import brand from '../images/Images/logo-removebg-preview.png'
import { GrDocumentUser, GrDomain } from 'react-icons/gr'
import { BsMenuButtonWide } from 'react-icons/bs'
import Editing from './Pages/Editing'
import AddPostSciene from './Pages/AddPostSciene'
import science from '../images/Images/science_791187.png'
import training from '../images/Images/classroom_10748263.png'
import accept from '../images/Images/transaction_18787427.png'
import AddPostClass from './Pages/AddPostClass'
import { PiStudentBold, PiTreeStructureLight } from 'react-icons/pi'
import AddPostCall from './Pages/AddPostCall'
import { TfiEmail } from 'react-icons/tfi'
import UserMessages from './Pages/UserMessages'
import Applications from './Pages/Applications'
import Tuzilmaqoshish from './Pages/Tuzilmaqoshish'
import './Admin.css'

const AdminBox = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="admin_container">
      {/* --- Menyu panel --- */}
      <div className={`admin_menu ${isOpen ? "open" : "closed"}`}>
        {/* Menyu tugmasi va logo */}
        <div className="media_tugma">
          <div className={`admin_jsx ${isOpen ? "open" : "closed"}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          <div className="admin_logo">
            <img src={brand} alt="Brand" />
            <h1>Admin Panel</h1>
          </div>
        </div>

        {/* Menyu list */}
        <div className="admin_menu_list">
          <div
            onClick={() => navigate("/Adminpanel/Adminqoshish")}
            className="admin_menu_card"
          >
            <span>
              <GoPersonAdd />
            </span>
            <div className="none_media">
              <h2>User qo'shish</h2>
              <p>Yangi adminlar qo‘shish</p>
            </div>
          </div>

          <div
            onClick={() => navigate("/Adminpanel/Postqoshish")}
            className="admin_menu_card"
          >
            <span>
              <RiFileAddLine />
            </span>
            <div className="none_media">
              <h2>Axborot uchun post qo'shish</h2>
              <p>Ma'lumot qo‘shish</p>
            </div>
          </div>

          <div
            onClick={() => navigate("/Adminpanel/Ilmiyfaoliyatqoshish")}
            className="admin_menu_card"
          >
            <span className="admin_science">
              <img src={science} alt="science" />
            </span>
            <div className="none_media">
              <h2>Ilmiy faoliyat uchun post</h2>
              <p>Ma'lumot qo‘shish</p>
            </div>
          </div>

          <div
            onClick={() => navigate("/Adminpanel/TalimQoshish")}
            className="admin_menu_card"
          >
            <span className="admin_science">
              <img src={training} alt="training" />
            </span>
            <div className="none_media">
              <h2>Ta'lim uchun post</h2>
              <p>Ma'lumot qo‘shish</p>
            </div>
          </div>

          <div
            onClick={() => navigate("/Adminpanel/Qabul")}
            className="admin_menu_card"
          >
            <span className="admin_science">
              <img src={accept} alt="accept" />
            </span>
            <div className="none_media">
              <h2>Qabul post</h2>
              <p>Ma'lumot qo‘shish</p>
            </div>
          </div>

          <div
            onClick={() => navigate("/Adminpanel/TalimQoshish")}
            className="admin_menu_card"
          >
            <span>
              <PiStudentBold />
            </span>
            <div className="none_media">
              <h2>Talabalar post</h2>
              <p>Ma'lumot qo‘shish</p>
            </div>
          </div>

          <div
            onClick={() => navigate("/Adminpanel/Sturture")}
            className="admin_menu_card"
          >
            <span>
              <PiTreeStructureLight />
            </span>
            <div className="none_media">
              <h2>Tuzilma bo'limiga ma'lumot qo'shish</h2>
              <p>Tuzilma bo'limiga ma'lumot qo'shish</p>
            </div>
          </div>

          <div
            onClick={() => navigate("/Adminpanel/UserPosts")}
            className="admin_menu_card"
          >
            <span>
              <TbCategory />
            </span>
            <div className="none_media">
              <h2>Qo‘shilgan Postlar</h2>
              <p>Barcha kategoriyadagi postlar</p>
            </div>
          </div>

          <div
            onClick={() => navigate("/Adminpanel/Alloffers")}
            className="admin_menu_card"
          >
            <span>
              <TfiEmail />
            </span>
            <div className="none_media">
              <h2>Takliflar va xabarlar</h2>
              <p>Talabalardan kelgan takliflar</p>
            </div>
          </div>

          <div
            onClick={() => navigate("/Adminpanel/Application")}
            className="admin_menu_card"
          >
            <span>
              <GrDocumentUser />
            </span>
            <div className="none_media">
              <h2>Xorijiy fuqorolardan kelgan arizalar</h2>
              <p>Arizalar</p>
            </div>
          </div>
        </div>
      </div>

<div className="admin_box">
  <Routes>
    {/* Default sahifa */}
    <Route
      index
      element={
        <div className="admin_placeholder">
          <img src={brand} alt="default" />
        </div>
      }
    />

    <Route path="Adminqoshish" element={<Adduser />} />
    <Route path="Postqoshish" element={<AddPost />} />
    <Route path="Ilmiyfaoliyatqoshish" element={<AddPostSciene />} />
    <Route path="TalimQoshish" element={<AddPostClass />} />
    <Route path="Qabul" element={<AddPostCall />} />
    <Route path="UserPosts" element={<UserPostList />} />
    <Route path="EditToNav" element={<Editing />} />
    <Route path="Alloffers" element={<UserMessages />} />
    <Route path="Application" element={<Applications />} />
    <Route path="Sturture" element={<Tuzilmaqoshish />} />
  </Routes>
</div>

    </div>
  );
};

export default AdminBox;