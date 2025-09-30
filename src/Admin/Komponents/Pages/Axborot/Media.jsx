import React, { useRef, useState } from 'react';
import { GrDocumentPdf } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import { MdPermMedia } from 'react-icons/md';
import rasm from '../../../images/Images/photo1.jpg'
import './Axborot.css'
import { FaRegTrashAlt } from 'react-icons/fa';
import { Modal } from 'antd';
const Media = () => {
  const dropdownRef1 = useRef(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Fayl turini tanlang');

  const fileCategories = ['Audio', 'Video', 'Rasm'];

const [uploadedFileName, setUploadedFileName] = useState('');

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setUploadedFileName(file.name);
    console.log("Yuklangan fayl:", file);
  }
};
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




  return (
    <div className='media_box'>
        <h1>Rasm, galeriya, video yuklashingiz mumkin</h1>
    <div className='add_media addpost_box'>
        <h1>Rasm, galeriya, video yuklang !!!</h1>
      {/* Custom Select */}
             <h3><span><MdPermMedia /></span>Kategoriya tanlang !!!</h3>
      <div className="custom_select" ref={dropdownRef1}>
        <div
          className="custom_select_box post_select"
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        >
          <span className="adduser_selected">{selectedCategory}</span>
          <p><IoIosArrowDown /></p>
        </div>

        {isCategoryOpen && (
          <div className="custom_select_list adduser_selected post_selected">
            {fileCategories.map((option, index) => (
              <p
                key={index}
                onClick={() => {
                  setSelectedCategory(option);
                  setIsCategoryOpen(false);
                }}
              >
                {option}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Dynamic Upload Input */}
     {selectedCategory === 'Audio' && (
  <div className="upload_box media_gpg">
    <label className="media_label">
      {uploadedFileName ? `🎵 ${uploadedFileName}` : '🎵 Audio yuklash'}
      <input className="file_input" type="file" accept="audio/*" onChange={handleFileChange} />
    </label>
  </div>
)}

{selectedCategory === 'Video' && (
  <div className="upload_box media_gpg">
<input placeholder='linkni kiriting'/>
  </div>
)}

{selectedCategory === 'Rasm' && (
  <div className="upload_box media_gpg">
    <label className="media_label">
      {uploadedFileName ? `🖼️ ${uploadedFileName}` : '🖼️ Rasm yuklash'}
      <input className="file_input" type="file" accept="image/*" onChange={handleFileChange} />
    </label>
  </div>
)}


  <button className='upload_button'>Saqlash</button>

    </div>


    <div className='all_media'>
<h1>Yuklangan postlar</h1>
<div className='all_media_box'>
<h2>Rasm</h2>
<div className='image_row'>
<div className='image_card'>
    <div className='media_button'>
    <button onClick={()=>showModal()}><FaRegTrashAlt /></button>
    </div>
<img src={rasm}/>
</div>
<div className='image_card'>
    <div className='media_button'>
    <button onClick={()=>showModal()}><FaRegTrashAlt /></button>
    </div>
<img src={rasm}/>
</div>
<div className='image_card'>
    <div className='media_button'>
    <button onClick={()=>showModal()}><FaRegTrashAlt /></button>
    </div>
<img src={rasm}/>
</div>
<div className='image_card'>
    <div className='media_button'>
    <button onClick={()=>showModal()}><FaRegTrashAlt /></button>
    </div>
<img src={rasm}/>
</div>
</div>
</div>

<div className='all_media_box'>
<h2>Audio</h2>
<div className='image_row'>
<div className='image_card  audio_card'>
  <div className='media_audio '>
   <h2> Botir zokirov Rano</h2>
    <button onClick={() => showModal()}>
      <FaRegTrashAlt />
    </button>
  </div>

  <audio controls>
    <source  type="audio/mpeg" />
    Sizning brauzeringiz audio pleerni qo‘llab-quvvatlamaydi.
  </audio>
</div>

</div>
</div>


<div className='all_media_box'>
  <h2>Video</h2>
  <div className='image_row'>
    <div className='image_card video_card'>
      <div className='media_video'>
        <h2>Botir Zokirov - Rano</h2>
        <button onClick={() => showModal()}>
          <FaRegTrashAlt />
        </button>
      </div>

      {/* YouTube video */}
      <div className="video_wrapper">
         <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/1xDIzlDksKA"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
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
   <h1>Bu hujjatni o'chirishni xohlaysizmi</h1>
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

export default Media;
