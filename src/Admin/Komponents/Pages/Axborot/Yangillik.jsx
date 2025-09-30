import React, { useState } from 'react';
import './Axborot.css';
import { MdNewspaper, MdOutlineAddPhotoAlternate } from "react-icons/md";
import { FaRegClock, FaTrashAlt } from "react-icons/fa";
import { Modal } from 'antd';

const Yangillik = () => {
  const [images, setImages] = useState([]);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  

  // 📌 Fayl tanlash
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push(reader.result);
        if (newImages.length === files.length) {
          setImages((prevImages) => [...prevImages, ...newImages]);
        }
      };
      reader.readAsDataURL(file); // base64 format
    });
  };

  // 📌 Rasmni o‘chirish
  const handleDeleteImage = (indexToDelete) => {
    setImages(images.filter((_, index) => index !== indexToDelete));
  };

  // 📌 Postni saqlash
  const handleSavePost = () => {
    if (!title || !text || images.length === 0) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      text,
      images,
      date: new Date().toLocaleDateString(),
    };

    const storedPosts = JSON.parse(localStorage.getItem('userPosts')) || [];
    const updatedPosts = [...storedPosts, newPost];
    localStorage.setItem('userPosts', JSON.stringify(updatedPosts));

    alert("Ma'lumot saqlandi!");
    handleClearForm();
  };

  // 📌 Formani tozalash
  const handleClearForm = () => {
    setTitle('');
    setText('');
    setImages([]);
  };

  return (
    <div className='new'>
      <h1>Yangilik qo'shish</h1>
      <div className='addpost_box'>
        <div className='ststik_section'>
<input type="text" value="Yangillik" readOnly />
</div>
        {/* 📌 Rasm yuklash */}
        <div className='addpost_cont'>
          <div className='ad_post_img'>
            <input
              type="file"
              id="imageUpload1"
              accept="image/*"
              onChange={handleImageChange}
              multiple
              style={{ display: 'none' }}
            />
            <label htmlFor="imageUpload1" className="forign_photo_box add_post_boxx">
              <span><MdOutlineAddPhotoAlternate /></span>
            </label>
          </div>

          <div className='addpost_img'>
            {images.map((img, index) => (
              <div key={index} className="image-container">
                <img src={img} alt={`rasm-${index}`} className="preview-img2" />
                <span
                  className="delete-icon"
                  onClick={() => handleDeleteImage(index)}
                >
                  <FaTrashAlt />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 📌 Sarlavha va matn */}
        <div className='addpost_textarea'>
          <h1>Sarlavha</h1>
          <textarea
            className='my_textarea first_textarea'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Matn sarlavhasini kiriting!!!"
            rows={5}
            cols={50}
          />
          <h1>Ma'lumotlar</h1>
          <textarea
            className='my_textarea'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Yangilik yoki tadbiringizga oid ma'lumotlarni kiriting !!!"
            rows={5}
            cols={50}
          />
        </div>

        {/* 📌 Tugmalar */}
        <div className='add_btn_box'>
          <button className='btn_add' onClick={handleSavePost}>
            Ma'lumotlarni Saqlash
          </button>
          <button className='btn_add btn_add2' onClick={handleClearForm}>
            Ma'lumotlarni Tozalash
          </button>
        </div>
      </div>


<div className='delete_news'>
<h1>Yuklangan yangiliklar</h1>
<div className="axborot_postlar">
  <div className='userpost_row'>
             
                <div  className='userpost_card'>
          
                     <div
  className="news_img userpost_card_img"
>
</div>
                      <div className='news_text'>
                        <h2>thfghfghfghfgh</h2>
                      </div>
                      <div className='news_icons_box'>
                        <div className='news_icons'>
                          <p><span><MdNewspaper /></span>fhfghfgh</p>
                          <p><span><FaRegClock /></span>fghfghfgh</p>
                        </div>
                        <div className='new_delete_icon'>
                          <span onClick={showModal}>
                            <FaTrashAlt />
                          </span>
                        </div>
                      </div>
                    </div>

            </div>
</div>
</div>
   <>
      <Modal
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className='axborot_modal'>
   <h1>Bu yangilikni o'chirishni xohlaysizmi</h1>
   <div className='axborot_modal_button'>
    <button className='axborot_red'>Ha</button>
    <button onClick={handleCancel}>Yo'q</button>
   </div>
   </div>
      </Modal>
    </>
      
    </div>
  );
};

export default Yangillik;
