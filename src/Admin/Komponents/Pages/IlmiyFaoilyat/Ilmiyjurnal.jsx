import React, { useState } from 'react';
import './Ilmiyfaoliat.css';
import { Modal } from 'antd';
import { FaRegTrashAlt } from 'react-icons/fa';

const Ilmiyjurnal = () => {
  const [fileName, setFileName] = useState('Fayl yuklash');
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
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : 'Fayl yuklash');
  };

  const handleSave = () => {
    if (fileName === 'Fayl yuklash') {
      alert("Iltimos, fayl yuklang!");
      return;
    }

    const newFile = {
      id: Date.now(),
      file: fileName,
      date: new Date().toLocaleDateString(),
    };

    const existing = JSON.parse(localStorage.getItem('userFiles')) || [];
    const updated = [...existing, newFile];
    localStorage.setItem('userFiles', JSON.stringify(updated));

    alert("Fayl ma'lumotlari saqlandi!");
    setFileName('Fayl yuklash');
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

  return (
    <div className='ilmiytaqiqot'>
      <h1>Ilmiy Jurnal qo'shish</h1>
<div className='ilmiytaqiqo_box'>
 <input type="text" value="IlmiyJurnal" readOnly />
     <div className='ilmiy-inputs'>
 <input className='ilmiy-inputsss' placeholder='file nomini kiriting'/>
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

      <button className='new_button' onClick={handleSave}>Saqlash</button>
      </div>

      
      <div className='ilmiy_taqiqot_post'>
      <h2>Ilmiy Jurnal uchun yuklangan hujjatlar</h2>
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

export default Ilmiyjurnal;
