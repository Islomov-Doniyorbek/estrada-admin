import React, { useRef, useState } from 'react';
import { GrDocumentPdf } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import { MdPermMedia } from 'react-icons/md';

const AddVideo = () => {
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

  return (
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
    <label className="media_label">
      {uploadedFileName ? `🎬 ${uploadedFileName}` : '🎬 Video yuklash'}
      <input className="file_input" type="file" accept="video/*" onChange={handleFileChange} />
    </label>
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
  );
};

export default AddVideo;
