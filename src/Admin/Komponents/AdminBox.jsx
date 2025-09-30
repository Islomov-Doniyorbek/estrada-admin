import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Adduser from './Pages/Adduser'
import { IoArrowDownCircleOutline, IoArrowForwardCircleOutline, IoPersonCircle, IoPersonCircleOutline } from 'react-icons/io5'


import brand from '../images/Images/logo-removebg-preview.png'

import Editing from './Pages/Editing'

import UserMessages from './Pages/UserMessages'
import Applications from './Pages/Applications'
import Tuzilmaqoshish from './Pages/Tuzilmaqoshish'
import './Admin.css'

import { FaRegFolderClosed } from 'react-icons/fa6'
import Magistratura from './Pages/OpenMenu/Magistratura'
import Bakalavr from './Pages/OpenMenu/Bakalavr'
import DarsJadvali from './Pages/OpenMenu/DarsJadvali'
import Yangillik from './Pages/Axborot/Yangillik'
import Tadbir from './Pages/Axborot/Tadbir'
import Elon from './Pages/Axborot/Elon'
import Media from './Pages/Axborot/Media'
import Ilmiyjurnal from './Pages/IlmiyFaoilyat/Ilmiyjurnal'
import Ilmiytaqiqot from './Pages/IlmiyFaoilyat/Ilmiytaqiqot'
import Ilmiykengash from './Pages/IlmiyFaoilyat/Ilmiykengash'
import Ilmiyloyiha from './Pages/IlmiyFaoilyat/Ilmiyloyiha'
import { ImNewspaper } from 'react-icons/im'
import { MdOutlinePermMedia, MdOutlineScreenSearchDesktop } from 'react-icons/md'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { PiProjectorScreenChartLight, PiStudentDuotone } from 'react-icons/pi'
import Callcenter from './Pages/Qabul/Callcenter'
import QabulKvota from './Pages/Qabul/QabulKvota'
import QabulDastur from './Pages/Qabul/QabulDastur'
import Zoomlink from './Pages/Qabul/Zoomlink'
import Ekotalabalar from './Pages/Talabalar/Ekotalabalar'
import { IoMdPersonAdd } from 'react-icons/io'
import { LiaSmsSolid } from 'react-icons/lia'
import { RiMailSendLine } from 'react-icons/ri'
import Yutuqlar from './Pages/Talabalar/Yutuqlar'
import { GrAchievement } from 'react-icons/gr'
import UserOwnNews from './Pages/UserPostListInner/UserOwnNews'
import UserOwnEvents from './Pages/UserPostListInner/UserOwnEvents'
import UserOwnAnnouncement from './Pages/UserPostListInner/UserOwnAnnouncement'
import UserOwnStudent from './Pages/UserPostListInner/UserOwnStudent'
import UserCall from './Pages/UserPostListInner/UserCall'
import UserMedia from './Pages/UserPostListInner/UserMedia'
import kvota from '../images/Images/photo_2025-09-30_10-34-48-removebg-preview.png'
import UserFile from './Pages/UserPostListInner/UserFile'
import { TbFileTypePdf } from 'react-icons/tb'

const AdminBox = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
        const [opens, setOpens] = useState(false);
     const [change, setChange] = useState(false);
       const [zoom, setZoom] = useState(false);
            const [foradmin, setForadmin] = useState(false);
              const [messages, setMessages] = useState(false);
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
    
            <div className="none_media">
              <h2>User qo'shish</h2>
              <p>Yangi adminlar qo‘shish</p>
            </div>
          </div>


<div className={`menu_sections ${opens ? "open" : "closed"}`}>
  {/* Card */}
  <div
    onClick={() => setOpens(!opens)}
    className="admin_menu_card"
    style={{ cursor: "pointer" }}
  >
    <div className="none_media">
      <h2>Axborot uchun post qo'shish</h2>
      <p>Ma'lumot qo‘shish</p>
    </div>
    <div className='open_arrow'>
      <span>
        {opens ? <IoArrowDownCircleOutline /> : <IoArrowForwardCircleOutline />}
      </span>
    </div>
  </div>

  {/* Tugmalar */}
  <div className="open_axborot">
    <p onClick={() => navigate("/Adminpanel/Yangillik")}>
      Yangillik <span><ImNewspaper /></span>
    </p>
    <p onClick={() => navigate("/Adminpanel/Tadbir")}>
      Tadbir <span><ImNewspaper /></span>
    </p>
    <p onClick={() => navigate("/Adminpanel/Elon")}>
      E'lon <span><ImNewspaper /></span>
    </p>
    <p onClick={() => navigate("/Adminpanel/Media")}>
      Media <span><MdOutlinePermMedia /></span>
    </p>
  </div>
</div>


 <div className={`menu_sections ${change ? "open" : "closed"}`}>
  {/* Card */}
  <div
    onClick={() => setChange(!change)}
    className="admin_menu_card"
    style={{ cursor: "pointer" }}
  >
    <div className="none_media">
      <h2>Ilmiy faoliyat uchun post</h2>
      <p>Ma'lumot qo‘shish</p>
    </div>
    <div className='open_arrow'>
      <span>
        {change ? <IoArrowDownCircleOutline /> : <IoArrowForwardCircleOutline />}
      </span>
    </div>
  </div>

  {/* Tugmalar */}
  <div className="open_talim">
    <p onClick={() => navigate("/Adminpanel/IlmiyTaqiqot")}>
      Ilmiy Taqiqot <span><MdOutlineScreenSearchDesktop /></span>
    </p>
    <p onClick={() => navigate("/Adminpanel/IlmiyJurnal")}>
      Ilmiy Jurnal <span><BsFillJournalBookmarkFill /></span>
    </p>
    <p onClick={() => navigate("/Adminpanel/IlmiyLoyiha")}>
      Ilmiy Loyiha <span><PiProjectorScreenChartLight /></span>
    </p>
        <p onClick={() => navigate("/Adminpanel/IlmiyKengash")}>
      Ilmiy Kengash <span><FaRegFolderClosed /></span>
    </p>
  </div>
</div>


<div className={`menu_sections ${open ? "open" : "closed"}`}>
  {/* Card */}
  <div
    onClick={() => setOpen(!open)}
    className="admin_menu_card"
    style={{ cursor: "pointer" }}
  >
    <div className="none_media">
      <h2>Ta'lim uchun post</h2>
      <p>Ma'lumot qo‘shish</p>
    </div>
    <div className='open_arrow'>
      <span>
        {open ? <IoArrowDownCircleOutline /> : <IoArrowForwardCircleOutline />}
      </span>
    </div>
  </div>

  {/* Tugmalar */}
  <div className="open_talim">
    <p onClick={() => navigate("/Adminpanel/Magistratura")}>
      Magistratura <span><FaRegFolderClosed /></span>
    </p>
    <p onClick={() => navigate("/Adminpanel/Bakalavr")}>
      Bakalavr <span><FaRegFolderClosed /></span>
    </p>
    <p onClick={() => navigate("/Adminpanel/DarsJadvali")}>
      Dars Jadvali <span><FaRegFolderClosed /></span>
    </p>
  </div>
</div>


   
<div className={`menu_sections ${zoom ? "open" : "closed"}`}>
  {/* Card */}
  <div
    onClick={() => setZoom(!zoom)}
    className="admin_menu_card"
    style={{ cursor: "pointer" }}
  >
    <div className="none_media">
      <h2>Qabul post</h2>
      <p>Ma'lumot qo‘shish</p>
    </div>
    <div className='open_arrow'>
      <span>
        {zoom ? <IoArrowDownCircleOutline /> : <IoArrowForwardCircleOutline />}
      </span>
    </div>
  </div>

  {/* Tugmalar */}
  <div className="open_talim">
    <p onClick={() => navigate("/Adminpanel/CallCenter")}>
      Call center azosi <span><IoMdPersonAdd /></span>
    </p>
    <p onClick={() => navigate("/Adminpanel/QabulKvota")}>
      Qabul kvotalari <span><img src={kvota}/></span>
    </p>
    <p onClick={() => navigate("/Adminpanel/QabulDastur")}>
    Qabul dasturlari <span><img src={kvota}/></span>
    </p>
     <p onClick={() => navigate("/Adminpanel/ZoomLink")}>
    Zoom link yuklash <span><FaRegFolderClosed /></span>
    </p>
  </div>
</div>

          <div
            onClick={() => navigate("/Adminpanel/Talabaqoshish")}
            className="admin_menu_card"
          >

            <div className="none_media">
              <h2>Talabalar post</h2>
              <p>Ma'lumot qo‘shish</p>
            </div>
          </div>

          <div
            onClick={() => navigate("/Adminpanel/Sturture")}
            className="admin_menu_card"
          >

            <div className="none_media">
              <h2>Tuzilma bo'limiga ma'lumot qo'shish</h2>
              <p>Tuzilma bo'limiga ma'lumot qo'shish</p>
            </div>
          </div>



         

    <div className={`menu_sections ${messages ? "open" : "closed"}`}>
  {/* Card */}
  <div
    onClick={() => setMessages(!messages)}
    className="admin_menu_card"
    style={{ cursor: "pointer" }}
  >
    <div className="none_media">
      <h2>Kelgan xabarlar va arizalar</h2>
      <p>Kelgan ma'lumotlarni ko'rish</p>
    </div>
    <div className='open_arrow'>
      <span>
        {messages ? <IoArrowDownCircleOutline /> : <IoArrowForwardCircleOutline />}
      </span>
    </div>
  </div>

  {/* Tugmalar */}
  <div className="open_talim">
    <p onClick={() => navigate("/Adminpanel/Alloffers")}>
      Takliflar va xabarlar <span><LiaSmsSolid /></span>
    </p>

       <p onClick={() => navigate("/Adminpanel/Application")}>
      Xorijiy fuqorolardan kelgan arizalar <span><RiMailSendLine /></span>
    </p>

    
       <p onClick={() => navigate("/Adminpanel/Talabayutuqlari")}>
      Talaba Yutuqlari <span><GrAchievement /></span>
    </p>
    
  </div>
</div>

    <div className={`menu_sections ${foradmin ? "open" : "closed"}`}>
  {/* Card */}
  <div
    onClick={() => setForadmin(!foradmin)}
    className="admin_menu_card"
    style={{ cursor: "pointer" }}
  >
    <div className="none_media">
      <h2>Qo'shilgan postlar</h2>
      <p>Kelgan ma'lumotlarni ko'rish</p>
    </div>
    <div className='open_arrow'>
      <span>
        {foradmin ? <IoArrowDownCircleOutline /> : <IoArrowForwardCircleOutline />}
      </span>
    </div>
  </div>

  {/* Tugmalar */}
  <div className="open_talim">
    <p onClick={() => navigate("/Adminpanel/AdminYangilliklar")}>
     Yangilliklar <span><ImNewspaper /></span>
    </p>

       <p onClick={() => navigate("/Adminpanel/AdminTadbirlar")}>
      Tadbirlar <span><ImNewspaper /></span>
    </p>

    
       <p onClick={() => navigate("/Adminpanel/AdminElon")}>
      E'lonlar <span><ImNewspaper /></span>
    </p>

        <p onClick={() => navigate("/Adminpanel/AdminCall")}>
     Call center a'zosi <span><IoMdPersonAdd /></span>
    </p>
      <p onClick={() => navigate("/Adminpanel/AdminStudent")}>
    Eko faol talabalar <span><PiStudentDuotone /></span>
    </p>
        <p onClick={() => navigate("/Adminpanel/AdminMedia")}>
    Media <span><MdOutlinePermMedia /></span>
    </p>

     <p onClick={() => navigate("/Adminpanel/AdminFile")}>
    Fayllar <span><FaRegFolderClosed /></span>
    </p>
    
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
    <Route path="Yangillik" element={<Yangillik/>} />
    <Route path="Tadbir" element={<Tadbir />} />
                <Route path="Elon" element={<Elon/>} />
                    <Route path="Media" element={<Media />} />
       <Route path="IlmiyJurnal" element={<Ilmiyjurnal />} />
          <Route path="IlmiyTaqiqot" element={<Ilmiytaqiqot />} />
             <Route path="IlmiyKengash" element={<Ilmiykengash />} />
                <Route path="IlmiyLoyiha" element={<Ilmiyloyiha />} />
<Route path="Magistratura" element={<Magistratura />} />
        <Route path="Bakalavr" element={<Bakalavr />} />
          <Route path="DarsJadvali" element={<DarsJadvali />} />
  <Route path="Talabaqoshish" element={<Ekotalabalar />} />
        <Route path="CallCenter" element={<Callcenter />} />
            <Route path="QabulKvota" element={<QabulKvota />} />
                <Route path="QabulDastur" element={<QabulDastur/>} />
                    <Route path="ZoomLink" element={<Zoomlink />} />
<Route path="Talabayutuqlari" element={<Yutuqlar />} />
    <Route path="EditToNav" element={<Editing />} />
    <Route path="Alloffers" element={<UserMessages />} />
    <Route path="Application" element={<Applications />} />
    <Route path="Sturture" element={<Tuzilmaqoshish />} />



        <Route path="AdminYangilliklar" element={<UserOwnNews />} />
         <Route path="AdminTadbirlar" element={<UserOwnEvents />} />
          <Route path="AdminElon" element={<UserOwnAnnouncement />} />
  <Route path="AdminCall" element={<UserCall />} />
               <Route path="AdminStudent" element={<UserOwnStudent />} />
                <Route path="AdminMedia" element={<UserMedia />} />
                   <Route path="AdminFile" element={<UserFile />} />
  </Routes>
</div>

    </div>
  );
};

export default AdminBox;