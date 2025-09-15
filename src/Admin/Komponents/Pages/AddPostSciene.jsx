import { Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';


const AddPostSciene = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tanlang !!!');
    const [fileName, setFileName] = useState('Fayl yuklash');
    const categories = ['Ilmiy Taqiqot faoliyati', 'Ilmiy Jurnall', 'Ilmiy Kengash', 'Ilmiy Loyiha'];
    const dropdownRef = useRef(null);
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
    title: "Post sarlavhasi",
    text: "Post matni",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
   {
    id: 2,
    title: "Post sarlavhasi",
    text: "Post matni",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
  {
    id: 2,
    title: "Post sarlavhasi",
    text: "Post matni",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
   {
    id: 2,
    title: "Post sarlavhasi",
    text: "Post matni",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
   {
    id: 2,
    title: "Post sarlavhasi",
    text: "Post matni",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  }, 
   {
    id: 2,
    title: "Post sarlavhasi",
    text: "Post matni",
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
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : 'Fayl yuklash');
  };
     const handleSave = () => {
    if (fileName === 'Fayl yuklash' || selectedCategory === 'Tanlang !!!') {
      alert("Fayl va kategoriya tanlang!");
      return;
    }

    const newFile = {
      id: Date.now(),
      file: fileName,
      category: selectedCategory,
      date: new Date().toLocaleDateString(),
    };

    const existing = JSON.parse(localStorage.getItem('userFiles')) || [];
    const updated = [...existing, newFile];
    localStorage.setItem('userFiles', JSON.stringify(updated));

    alert("Fayl ma'lumotlari saqlandi!");
    setFileName('Fayl yuklash');
    setSelectedCategory('Tanlang !!!');
  };
  
  return (
   <div className='ilmiy'>
<h1 className='main-text-h1'>Ilmiy faoliyat sahifasi uchun ma'lumot yuklashingiz mumkin!!!</h1>
<div className='ilmiy-box'>
  <h2>Ilmiy faoliyat sahifasida qaysi pagega ma'lumot yuklashni tanlang</h2>
 <div className="custom_select " ref={dropdownRef}>
            <div className="custom_select_box post_select ilmiy-select" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span className='adduser_selected'>{selectedCategory}</span>
              <p><IoIosArrowDown /></p>
            </div>
            {isDropdownOpen && (
              <div className="custom_select_list adduser_selected post_selected">
                {categories.map((cat, idx) => (
                  <p key={idx} onClick={() => {
                        setSelectedCategory(cat);
                    setIsDropdownOpen(false);
                  }}>{cat}</p>
                ))}
              </div>
            )}
          </div>

<div className='ilmiy-input'>
<input type='text' placeholder='File nomini kiriting'/>
</div>
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




<div className='ilmiy_posts_box'>


<div className='ilmiy_taqiqot_post'>
<h2>Ilmiy taqiqot uchun yuklangan hujjatlar</h2>
<div className='ilmiy-card-row'>
{data.map((post) => (
<div className='ilmiy-taqiqot_card'>
   {post.file && (
          <a href={post.file.url} target="_blank" rel="noopener noreferrer">
            {post.file.name}
          </a>
        )}
<div className='ilmiy-taqiqot_button'>
<button onClick={()=>showModal()}><FaRegTrashAlt /></button>
</div>
</div>
    ))}
</div>
</div>


<div className='ilmiy_taqiqot_post ilmiy_jurnal_post'>
<h2>Ilmiy Jurnallar</h2>
<div className='ilmiy-card-row'>
{data.map((post) => (
<div className='ilmiy-taqiqot_card'>
   {post.file && (
          <a href={post.file.url} target="_blank" rel="noopener noreferrer">
            {post.file.name}
          </a>
        )}
<div className='ilmiy-taqiqot_button'>
<button onClick={()=>showModal()}><FaRegTrashAlt /></button>
</div>
</div>
    ))}
</div>
</div>




<div className='ilmiy_taqiqot_post ilmiy_jurnal_post'>
<h2>Ilmiy Loyihalar</h2>
<div className='ilmiy-card-row'>
{data.map((post) => (
<div className='ilmiy-taqiqot_card'>
   {post.file && (
          <a href={post.file.url} target="_blank" rel="noopener noreferrer">
            {post.file.name}
          </a>
        )}
<div className='ilmiy-taqiqot_button'>
<button onClick={()=>showModal()}><FaRegTrashAlt /></button>
</div>
</div>
    ))}
</div>
</div>



<div className='ilmiy_taqiqot_post ilmiy_jurnal_post'>
<h2>Ilmiy Kengashlar</h2>
<div className='ilmiy-card-row'>
{data.map((post) => (
<div className='ilmiy-taqiqot_card'>
   {post.file && (
          <a href={post.file.url} target="_blank" rel="noopener noreferrer">
            {post.file.name}
          </a>
        )}
<div className='ilmiy-taqiqot_button'>
<button onClick={()=>showModal()}><FaRegTrashAlt /></button>
</div>
</div>
    ))}
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
  )
};

export default AddPostSciene;
