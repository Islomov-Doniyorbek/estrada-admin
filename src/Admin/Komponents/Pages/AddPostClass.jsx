import { Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';

const AddPostClass = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false); // 🔴 2-chi select uchun
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false); // 🔴 3-chi select uchun
  const [fileName, setFileName] = useState('Fayl yuklash');
  const [selectedCategory, setSelectedCategory] = useState('Tanlang !!!');
  const [selectedSubCategory, setSelectedSubCategory] = useState('Tanlang !!!'); // 🔴
  const [selectedSubCategory3, setSelectedSubCategory3] = useState('Tanlang !!!'); // 🔴
  const categories = ['Magistratura', 'Bakalavr', 'Dars Jadvali'];
  const subCategories = []; // 🔴 Siz bu massivga ma'lumotlarni keyin qo‘shasiz

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null); // 🔴
  const dropdownRef3 = useRef(null); // 🔴
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

const data = [
  {
    id: 1,
    title: "Kafedira",
    text: "Yo'nalish",

    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
   {
    id: 2,
   title: "Kafedira",
    text: "Yo'nalish",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
  {
    id: 2,
     title: "Kafedira",
    text: "Yo'nalish",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
   {
    id: 2,
    title: "Kafedira",
    text: "Yo'nalish",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
   {
    id: 2,
   title: "Kafedira",
    text: "Yo'nalish",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  }, 
   {
    id: 2,
    title: "Kafedira",
    text: "Yo'nalish",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  }
];


const database = [
  {
    id: 1,
    title: "Dars jadvali 2024-2025",
language:"Rus tili guruhlari uchun",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
   {
    id: 2,
title: "Dars jadvali 2024-2025",
language:"Rus tili guruhlari uchun",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
  {
    id: 2,
    title: "Dars jadvali 2024-2025",
language:"Rus tili guruhlari uchun",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
   {
    id: 2,
  title: "Dars jadvali 2024-2025",
 language:"O'zbek tili guruhlari uchun",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
   {
    id: 2,
  title: "O'zbek jadvali 2024-2025",
  
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  }, 
   {
    id: 2,
  title: "O'zbek jadvali 2024-2025",
  
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  }
];


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
      if (dropdownRef2.current && !dropdownRef2.current.contains(e.target)) {
        setIsDropdownOpen2(false);
      }
       if (dropdownRef3.current && !dropdownRef2.current.contains(e.target)) {
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

  const handleSave = () => {
    if (
      fileName === 'Fayl yuklash' ||
      selectedCategory === 'Tanlang !!!' ||
      selectedSubCategory === 'Tanlang !!!'||
      selectedSubCategory3 ==='Tanlang !!!'
    ) {
      alert("Fayl, kategoriya va fan turini tanlang!");
      return;
    }

    const newFile = {
      id: Date.now(),
      file: fileName,
      category: selectedCategory,
      subCategory: selectedSubCategory,
      date: new Date().toLocaleDateString(),
    };

    const existing = JSON.parse(localStorage.getItem('userFiles')) || [];
    const updated = [...existing, newFile];
    localStorage.setItem('userFiles', JSON.stringify(updated));

    alert("Fayl ma'lumotlari saqlandi!");
    setFileName('Fayl yuklash');
    setSelectedCategory('Tanlang !!!');
    selectedSubCategory3('Tanlang !!!');
 setSelectedSubCategory3('Tanlang !!!');
    setSelectedSubCategory('Tanlang !!!');
  };

  return (
    <div>
      <div className='talim'>
        <h1 className='main-text-h1'>Ta'lim sahifasi uchun ma'lumot yuklang !!!</h1>
        <div className='add_files addpost_box'>
          <h1>Dars jadvali magistratura va bakalavrga oid hujjatlar uchun !!!</h1>
          <h3>
            <span><GrDocumentPdf /></span>
            Kategoriya tanlab faylni yuklang !!!
          </h3>

          <div className='upload_file'>
            <div className='hujjat-bolimlar'>

            {/* ✅ 1. Kategoriya */}
            <div className="custom_select " ref={dropdownRef}>
            <h2 className='talim_list_h2'>Katgoriya</h2>
              <div className="custom_select_box post_select talim-selected" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span className='adduser_selected'>{selectedCategory}</span>
                <p><IoIosArrowDown /></p>
              </div>
              {isDropdownOpen && (
                <div className="custom_select_list  post_selected talim_select_list">
                  {categories.map((cat, idx) => (
                    <p key={idx} onClick={() => {
                      setSelectedCategory(cat);
                      setIsDropdownOpen(false);
                    }}>{cat}</p>
                  ))}
                </div>
              )}
            </div>

            {/* ✅ 2. Fan turi (bo‘sh dropdown) */}
            <div className="custom_select" ref={dropdownRef2}>
<h2 className='talim_list_h2'>Kafedira</h2>
              <div className="custom_select_box post_select talim-selected" onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}>
                <span className='adduser_selected'>{selectedSubCategory}</span>
                <p><IoIosArrowDown /></p>
              </div>
              {isDropdownOpen2 && (
                <div className="custom_select_list  post_selected talim_select_list">
                  {subCategories.length > 0 ? subCategories.map((sub, idx) => (
                    <p key={idx} onClick={() => {
                      setSelectedSubCategory(sub);
                      setIsDropdownOpen2(false);
                    }}>{sub}</p>
                  )) : <p>Ma'lumot yo‘q</p>}
                </div>
              )}
            </div>


      {/* ✅ 3. Fan turi (bo‘sh dropdown) */}
<div className="custom_select" ref={dropdownRef3}>
  <h2 className='talim_list_h2'>Yo'nalish</h2>
  <div className="custom_select_box post_select talim-selected" onClick={() => setIsDropdownOpen3(!isDropdownOpen3)}>
    <span className='adduser_selected'>{selectedSubCategory3}</span>
    <p><IoIosArrowDown /></p>
  </div>
  {isDropdownOpen3 && (
    <div className="custom_select_list  post_selected talim_select_list">
      {subCategories.length > 0 ? subCategories.map((sub, idx) => (
        <p key={idx} onClick={() => {
          setSelectedSubCategory3(sub);
          setIsDropdownOpen3(false);
        }}>{sub}</p>
      )) : <p>Ma'lumot yo‘q</p>}
    </div>
  )}
</div>
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

            <button onClick={handleSave}>Saqlash</button>

          </div>
        </div>
        
        
        
        <div className='talim_posts'>
<h1>Ta'lim sahifasiga yuklangan postlar</h1>
<div className='talim_posts_box bakalavr_box'>
<h2>Bakalavr</h2>
<div className='talim_posts_row'>
{data.map((post) => (<div className='talim_col'>
    <p>{post.title}</p>
   <p>{post.text}</p>
<div className='ilmiy-taqiqot_card talim_card'>
   {post.file && (
          <a href={post.file.url} target="_blank" rel="noopener noreferrer">
            {post.file.name}
          </a>
        )}
<div className='ilmiy-taqiqot_button'>
<button onClick={()=>{showModal()}}><FaRegTrashAlt /></button>
</div>
</div>
</div>
    ))}
</div>
</div>


<div className='talim_posts_box magister_box'>
<h2>Magistratura</h2>
<div className='talim_posts_row'>
{data.map((post) => (<div className='talim_col'>
    <p>{post.title}</p>
   <p>{post.text}</p>
<div className='ilmiy-taqiqot_card talim_card'>
   {post.file && (
          <a href={post.file.url} target="_blank" rel="noopener noreferrer">
            {post.file.name}
          </a>
        )}
<div className='ilmiy-taqiqot_button'>
<button onClick={()=>{showModal()}}><FaRegTrashAlt /></button>
</div>
</div>
</div>
    ))}
</div>
</div>



<div className='talim_posts_box classtable_box'>
<h2>Dars jadvali</h2>
<div className='talim_posts_row'>
{database.map((post) => (<div className='talim_col talim_table_col'>
   <p>{post.title}</p>
      <p className='talim-language'>{post.language}</p>
<div className='ilmiy-taqiqot_card talim_card talim_table_card'>
   {post.file && (
          <a href={post.file.url} target="_blank" rel="noopener noreferrer">
            {post.file.name}
          </a>
        )}
<div className='ilmiy-taqiqot_button'>
<button onClick={() => {showModal()}}><FaRegTrashAlt /></button>
</div>
</div>
</div>
    ))}
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
   <h1>Bu hujjatni o'chirishni xohlaysizmi!!!</h1>
   <div className='axborot_modal_button'>
    <button className='axborot_red'>Ha</button>
    <button onClick={handleCancel}>Yo'q</button>
   </div>
   </div>
      </Modal>
    </>

    </div>
  )
}

export default AddPostClass;
