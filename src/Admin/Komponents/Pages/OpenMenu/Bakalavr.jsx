import React, { useState, useEffect, useRef } from 'react';
import './Talim.css';
import { IoIosArrowDown } from "react-icons/io";
import { FaRegTrashAlt } from 'react-icons/fa';
import { Modal } from 'antd';

const Bakalavr = () => {
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
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  const [fileName, setFileName] = useState('Fayl yuklash');
  const [selectedSubCategory, setSelectedSubCategory] = useState('Tanlang !!!');
  const [selectedSubCategory3, setSelectedSubCategory3] = useState('Tanlang !!!');

  const subCategories = []; // 🔴 Siz keyin to‘ldirasiz

  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);

  const data = [
    {
      id: 1,
      title: "Kafedira",
      text: "Yo'nalish",
      file: {
        name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
        url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
      }
    }
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef2.current && !dropdownRef2.current.contains(e.target)) {
        setIsDropdownOpen2(false);
      }
      if (dropdownRef3.current && !dropdownRef3.current.contains(e.target)) {
        setIsDropdownOpen3(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : 'Fayl yuklash');
  };

  return (
    <div className='magistr'>
      <h1>Bakalavr hujjatlar</h1>
      <div className='mag_container'>
        {/* ✅ 2. Fan turi (dropdown) */}
        <div className="custom_select" ref={dropdownRef2}>
          <h2 className='talim_list_h2'>Kafedira</h2>
          <div
            className="open_input"
            onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
          >
            <span className='adduser_selected'>{selectedSubCategory}</span>
            <p><IoIosArrowDown /></p>
          </div>
          {isDropdownOpen2 && (
            <div className="slect_magister">
              {subCategories.length > 0 ? (
                subCategories.map((sub, idx) => (
                  <p key={idx} onClick={() => {
                    setSelectedSubCategory(sub);
                    setIsDropdownOpen2(false);
                  }}>{sub}</p>
                ))
              ) : <p>Ma'lumot yo‘q</p>}
            </div>
          )}
        </div>

        {/* ✅ 3. Fan turi (dropdown) */}
        <div className="custom_select" ref={dropdownRef3}>
          <h2 className='talim_list_h2'>Yo'nalish</h2>
          <div
            className="open_input"
            onClick={() => setIsDropdownOpen3(!isDropdownOpen3)}
          >
            <span className='adduser_selected'>{selectedSubCategory3}</span>
            <p><IoIosArrowDown /></p>
          </div>s
          {isDropdownOpen3 && (
            <div className="slect_magister2">
              {subCategories.length > 0 ? (
                subCategories.map((sub, idx) => (
                  <p key={idx} onClick={() => {
                    setSelectedSubCategory3(sub);
                    setIsDropdownOpen3(false);
                  }}>{sub}</p>
                ))
              ) : <p>Ma'lumot yo‘q</p>}
            </div>
          )}
        </div>

      {/* Fayl tanlash */}
      <div className="file_gpg">
        <label htmlFor="fileUpload" className="file_upload_label">
          <span className="upload_icon">📁</span>
          <span className="upload_text">{fileName}</span>
          <input
            type="file"
            id="fileUpload"
            className="file_input"
            onChange={handleFileChange}
          />
        </label>
      </div>
            <button className='new_button'>Saqlash</button>
    </div>
      {/* Magistratura postlari */}
      <div className='talim_posts_box magister_box'>
        <h2>Bakalavr</h2>
        <div className='talim_posts_row'>
          {data.map((post) => (
            <div className='talim_col' key={post.id}>
              <p>{post.title}</p>
              <p>{post.text}</p>
              <div className='ilmiy-taqiqot_card talim_card'>
                {post.file && (
                  <a href={post.file.url} target="_blank" rel="noopener noreferrer">
                    {post.file.name}
                  </a>
                )}
                <div className='ilmiy-taqiqot_button'>
                  <button  onClick={()=>{showModal()}}><FaRegTrashAlt /></button>
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
   <h1>Bu hujjatni o'chirishni xohlaysizmi!!!</h1>
   <div className='axborot_modal_button'>
    <button className='axborot_red'>Ha</button>
    <button onClick={handleCancel}>Yo'q</button>
   </div>
   </div>
      </Modal>
    </>

    </div>
  );
}

export default Bakalavr;

