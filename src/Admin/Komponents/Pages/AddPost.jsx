import React, {  useEffect, useRef, useState } from 'react';
import { FaPencilAlt, FaRegClock, FaTrashAlt } from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import { MdNewspaper, MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { TiNews } from 'react-icons/ti';
import AddVideo from './AddInner/AddVideo';
import AddStudent from './AddInner/AddStudent';
import { Input, Modal } from 'antd';

const AddPost = () => {
  const [images, setImages] = useState([]);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
const [selectedCategory, setSelectedCategory] = useState('Tanlang !!!');
const [isCategoryOpen, setIsCategoryOpen] = useState(false);
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


  const dropdownRef1 = useRef(null);

  const postCategories = ['Yangilik', 'Tadbir', 'Elon'];
 
           useEffect(() => {
    const handleClickOutside = (event) => {
       if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


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
    reader.readAsDataURL(file); // ✅ base64 formatga o‘giradi
  });
};

  const handleDeleteImage = (indexToDelete) => {
    setImages(images.filter((_, index) => index !== indexToDelete));
  };



  const handleSavePost = () => {
    if (!title || !text || selectedCategory === 'Tanlang !!!' || images.length === 0) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      text,
      images,
      category: selectedCategory,
      date: new Date().toLocaleDateString(),
    };

    const storedPosts = JSON.parse(localStorage.getItem('userPosts')) || [];
    const updatedPosts = [...storedPosts, newPost];
    localStorage.setItem('userPosts', JSON.stringify(updatedPosts));

    alert("Ma'lumot saqlandi!");
    handleClearForm();
  };

  const handleClearForm = () => {
    setTitle('');
    setText('');
    setImages([]);
    setSelectedCategory('Tanlang !!!');
  };





       const [userPosts, setUserPosts] = useState([])
      
        useEffect(() => {
          const storedPosts = localStorage.getItem("userPosts");
          if (storedPosts) {
            setUserPosts(JSON.parse(storedPosts));
          }
        }, []);

      

  return (
    <div className='addpost'>
      <h1 className='main-text-h1'>Axborot sahifasi uchun ma'lumotlar yuklashingiz mumkin!!!</h1>
      <div className='addpost_box'>
        <h1>Yangilik, tadbirlar, e'lonlar</h1>
        <div className='forign_photo'>
          <h3>
            <span><TiNews /></span>Yangilik va tadbirlar ma'lumotini yuklash uchun kategoriyadan tanlang !!!
          </h3>

          <div className="custom_select" ref={dropdownRef1}>
            <div className="custom_select_box post_select" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
              <span className='adduser_selected'>{selectedCategory}</span>
              <p><IoIosArrowDown /></p>
            </div>

            {isCategoryOpen && (
              <div className="custom_select_list adduser_selected post_selected">
                {postCategories.map((option, index) => (
                  <p key={index} onClick={() => {
                    setSelectedCategory(option);
                    setIsCategoryOpen(false);
                  }}>{option}</p>
                ))}
              </div>
            )}
          </div>
        </div>

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
                <span className="delete-icon" onClick={() => handleDeleteImage(index)}><FaTrashAlt /></span>
              </div>
            ))}
          </div>
        </div>

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

        <div className='add_btn_box'>
          <button className='btn_add' onClick={handleSavePost}>Ma'lumotlarni Saqlash</button>
          <button className='btn_add btn_add2' onClick={handleClearForm}>Ma'lumotlarni Tozalash</button>
        </div>
      </div>

  <AddVideo/>


<div className="axborot_postlar">
<h1>Axborot bo'limiga qo'shilgan postlar</h1>
  <div className='userpost_row'>
              {userPosts.map((post) => (
                <div key={post.id} className='userpost_card'>
          
                     <div
  className="news_img userpost_card_img"
  style={{ backgroundImage: `url(${post.images?.[0]})` }}
>
</div>
                      <div className='news_text'>
                        <h2>{post.title}</h2>
                      </div>
                      <div className='news_icons_box'>
                        <div className='news_icons'>
                          <p><span><MdNewspaper /></span>{post.category}</p>
                          <p><span><FaRegClock /></span>{post.date}</p>
                        </div>
                        <div className='new_delete_icon'>
                          <span onClick={showModal}>
                            <FaTrashAlt />
                          </span>
                        </div>
                      </div>
                    </div>
              ))}
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

export default AddPost;
