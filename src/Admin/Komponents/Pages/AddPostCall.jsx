import { Modal, Table } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const AddPostCall = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tanlang !!!');
  const [fileName, setFileName] = useState('Fayl yuklash');
  const dropdownRef = useRef(null);

  const [isDropdownOpenProgram, setIsDropdownOpenProgram] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('Tanlang !!!');
  const [fileNameProgram, setFileNameProgram] = useState('Fayl yuklash');
  const programDropdownRef = useRef(null);

  const categories = ['Magistratura', 'Bakalavr'];
  const programCategories = ['Dastur 1', 'Dastur 2'];

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
  

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
      if (programDropdownRef.current && !programDropdownRef.current.contains(e.target)) {
        setIsDropdownOpenProgram(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : 'Fayl yuklash');
  };

  const handleFileChangeProgram = (e) => {
    const file = e.target.files[0];
    setFileNameProgram(file ? file.name : 'Fayl yuklash');
  };


  const data = [
  {
    id: 1,
    title: "Bakalavr kvotasi",

    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
   {
    id: 2,
   title: "Bakalavr kvotasi",

    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
  
];
const dataSource = [
    {
      direction: ' Cholg’u ijrochiligi: estrada cholg’ulari',
      science: '	1-fan',
      link: 'Havola',
      roomnumber: '220-xona',
      description:"Qo'shimcha Izoh",
      delete:"Qo'shimcha Izoh"
    },  {
      direction: '  Cholg’u ijrochiligi: estrada cholg’ulari (fortepiano)',
      science: '	1-fan',
      link: 'Havola',
      roomnumber: '	108-xona',
      description:"	Imtihon",
         delete:"Qo'shimcha Izoh"
    }
    
    
  ];

  const columns = [
    {
      title: "Yo'nalish",
      dataIndex: 'direction',
      key: 'direction',
    },
    {
      title: 'Fan',
      dataIndex: 'science',
      key: 'science',
    },
    {
      title: 'Online Havola',
      dataIndex: 'link',
      key: 'link',
    },
      {
      title: "Xona Raqami",
      dataIndex: 'roomnumber',
      key: 'roomnumber',
    },
    {
      title: "Qo'shimcha Izoh",
      dataIndex: 'description',
      key: 'description',
    },
      {
      title: "O'chirish",
      dataIndex: 'delete',
    render: (_, record) => (
      <span onClick={() => handleDelete(record)} className='call-delete'>
        <FaRegTrashAlt  />
      </span>
    ),
    },
  ];


const handleDelete = (record) => {
  console.log("O'chirilayotgan element:", record);
};

  return (
    <div className='qabul'>
      <h1>Qabul bo'limi uchun post qo'shish</h1>
{/*Rahbar qoshish*/}
      <div className='qabul-box'>
        <h2>Call center a'zolarini yuklang</h2>
        <div className='qabul-input'>
          <h3>Rahbar nomi</h3>
          <input type='text' placeholder='ism' />

          <h3>Rahbarning vazifasi</h3>
          <textarea type='text' placeholder='vazifa' />

          <h3>Rahbarning telefon raqami</h3>
          <input type='text' placeholder='raqam' />
        </div>
        <button>Saqlash</button>
      </div>


{/*qabul dasturlari va kvotalari*/}
      <div className='qabul-box qabul-kvota-box'>
        <div className='qabul-kvota'>
        <h2>Qabul kvotalari yuklash uchun</h2>
        <div className="custom_select" ref={dropdownRef}>
          <div
            className="custom_select_box post_select qabul-select"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className='adduser_selected'>{selectedCategory}</span>
            <p><IoIosArrowDown /></p>
          </div>

          {isDropdownOpen && (
            <div className="custom_select_list adduser_selected qabul-selected">
              {categories.map((cat, idx) => (
                <p
                  key={idx}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsDropdownOpen(false);
                  }}
                >
                  {cat}
                </p>
              ))}
            </div>
          )}
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

        <button>Saqlash</button>
      </div>
         <div className='qabul-dastur'>
        <h2>Qabul dasturlari yuklash uchun</h2>
        <div className="custom_select" ref={programDropdownRef}>
          <div
            className="custom_select_box post_select qabul-select"
            onClick={() => setIsDropdownOpenProgram(!isDropdownOpenProgram)}
          >
            <span className='adduser_selected'>{selectedProgram}</span>
            <p><IoIosArrowDown /></p>
          </div>

          {isDropdownOpenProgram && (
            <div className="custom_select_list adduser_selected qabul-selected">
              {programCategories.map((prog, idx) => (
                <p
                  key={idx}
                  onClick={() => {
                    setSelectedProgram(prog);
                    setIsDropdownOpenProgram(false);
                  }}
                >
                  {prog}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="file_gpg">
          <label htmlFor="fileUploadProgram" className="file_upload_label">
            <span className="upload_icon">📁</span>
            <span className="upload_text">{fileNameProgram}</span>
            <input
              type="file"
              id="fileUploadProgram"
              className="file_input"
              onChange={handleFileChangeProgram}
            />
          </label>
        </div>

        <button>Saqlash</button>
      </div>




</div>

{/*Zoom link yuklash*/}
   <div className='qabul-box'>
<h2>Zoom linkini yuklang</h2>
<div className='zoom-link'>
  <div className='zoom-link-card'>
<h2>Yo'nalish</h2>
<input type='text' placeholder='Yonalish'/>
</div>

 <div className='zoom-link-card'>
<h2>Fan</h2>
<input type='text' placeholder='Fan'/>
</div>

 <div className='zoom-link-card'>
<h2>Online Havola</h2>
<input type='text' placeholder='Havola'/>
</div>


 <div className='zoom-link-card'>
<h2>Xona Raqami</h2>
<input type='text' placeholder='Xona raqami'/>
</div>

<div className='zoom-link-card'>
<h2>Qo'shimcha Izoh</h2>
<input type='text' placeholder='Izoh'/>
</div>
</div>
<button>Saqlash</button>
      </div>



{/*Qabul boyicha postlar*/}
<div className='qabul-post-box'>
<h1>Qabul bo'limi uchun yuklangan postlar</h1>
<div className='qabul-post-person'>
  <h2>Rahbariyat a'zolari</h2>
<div className='qabul-post_row'>
<div className='qabul-post_card'>
<h2>Dilmurotov Mirzobek O‘tkir o‘g‘li</h2>
<p>O‘quv-uslubiy boshqarma boshlig‘i,
Qabul komissiyasi mas’ul kotibi</p>
<span>+998 91 003 36 55<b onClick={showModal}><FaRegTrashAlt /></b></span>
</div>
<div className='qabul-post_card'>
<h2>Dilmurotov Mirzobek O‘tkir o‘g‘li</h2>
<p>O‘quv-uslubiy boshqarma boshlig‘i,
Qabul komissiyasi mas’ul kotibi</p>
<span>+998 91 003 36 55 <b onClick={showModal}><FaRegTrashAlt /></b></span>
</div>
<div className='qabul-post_card'>
<h2>Dilmurotov Mirzobek O‘tkir o‘g‘li</h2>
<p>O‘quv-uslubiy boshqarma boshlig‘i,
Qabul komissiyasi mas’ul kotibi</p>
<span>+998 91 003 36 55 <b onClick={showModal}><FaRegTrashAlt /></b></span>
</div>
<div className='qabul-post_card'>
<h2>Dilmurotov Mirzobek O‘tkir o‘g‘li</h2>
<p>O‘quv-uslubiy boshqarma boshlig‘i,
Qabul komissiyasi mas’ul kotibi</p>
<span>+998 91 003 36 55 <b onClick={showModal}><FaRegTrashAlt /></b></span>
</div>
</div>
</div>
</div>



<div className='talim_posts_box bakalavr_box'>
<h2>Bakalavr kvotasi</h2>
<div className='talim_posts_row'>
{data.map((post) => (<div className='talim_col'>
    <p>{post.title}</p>
<div className='ilmiy-taqiqot_card talim_card'>
   {post.file && (
          <a href={post.file.url} target="_blank" rel="noopener noreferrer">
            {post.file.name}
          </a>
        )}
<div className='ilmiy-taqiqot_button'>
<button onClick={showModal}><FaRegTrashAlt /></button>
</div>
</div>
</div>
    ))}
</div>
</div>


<div className='talim_posts_box bakalavr_box'>
<h2>Magister kvotasi</h2>
<div className='talim_posts_row'>
{data.map((post) => (<div className='talim_col'>
    <p>{post.title}</p>
<div className='ilmiy-taqiqot_card talim_card'>
   {post.file && (
          <a href={post.file.url} target="_blank" rel="noopener noreferrer">
            {post.file.name}
          </a>
        )}
<div className='ilmiy-taqiqot_button'>
<button onClick={showModal}><FaRegTrashAlt /></button>
</div>
</div>
</div>
    ))}
</div>
</div>


<div className='talim_posts_box bakalavr_box'>
<h2>Qabul dasturlari.</h2>
<div className='talim_posts_row'>
{data.map((post) => (<div className='talim_col'>
    <p>{post.title}</p>
<div className='ilmiy-taqiqot_card talim_card'>
   {post.file && (
          <a href={post.file.url} target="_blank" rel="noopener noreferrer">
            {post.file.name}
          </a>
        )}
<div className='ilmiy-taqiqot_button'>
<button onClick={showModal}><FaRegTrashAlt /></button>
</div>
</div>
</div>
    ))}
</div>
</div>


<div className='zoom-link-post'>
<h2>Zoom orqali joylangan linklar</h2>
<div className='zoom-post-row'>
    <Table  className='student_table follow_table' dataSource={dataSource} columns={columns} />
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
   <h1>Bu ma'lumotni o'chirishni xohlaysizmi!!!</h1>
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

export default AddPostCall;



