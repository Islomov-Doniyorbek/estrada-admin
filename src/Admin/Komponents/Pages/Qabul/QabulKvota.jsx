import { Modal } from "antd";
import React, { useState, useRef } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const QabulKvota = () => {
  const [selectedCategory, setSelectedCategory] = useState("Kategoriya tanlang");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fileName, setFileName] = useState("Fayl yuklash");
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

  const categories = ["Bakalavriat", "Magistratura", "PhD", "Doktorantura"];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "Fayl yuklash");
  };
    

  return (
    <div className="callcenter">
      <h1>Qabul kvota</h1>

      {/* qabul dasturlari va kvotalari */}
      <div className="qabul-box qabul-kvota-box">
        <div className="qabul-kvota">
          <h2>Qabul kvotalari yuklash uchun</h2>

          {/* custom select */}
          <div className="custom_select" ref={dropdownRef}>
            <div
              className="custom_select_box post_select qabul-select"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="adduser_selected">{selectedCategory}</span>
              <p>
                <IoIosArrowDown />
              </p>
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

          {/* file upload */}
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
                <button className="new_button">Saqlash</button>
        </div>

      </div>
     <div className="kvotalar">
       
       
       
        <div className="bakalavr_kvo">
<h2>Bakalavr kvotasi</h2>
<div className="kvota_row">

<div className="kvota_card">
<h3>2024-2025 oquv yillari qabul kvotasi.pdf</h3>
<div className='ilmiy-taqiqot_button qabul_button'>
<button onClick={showModal}><FaRegTrashAlt /></button>
</div>
</div>


<div className="kvota_card">
<h3>2024-2025 oquv yillari qabul kvotasi.pdf</h3>
<div className='ilmiy-taqiqot_button qabul_button'>
<button onClick={showModal}><FaRegTrashAlt /></button>
</div>
</div>


</div>
</div>


     <div className="bakalavr_kvo">
<h2>Magistratura kvotasi</h2>
<div className="kvota_row">
<div className="kvota_card">
<h3>2024-2025 oquv yillari qabul kvotasi.pdf</h3>
<div className='ilmiy-taqiqot_button qabul_button'>
<button onClick={showModal}><FaRegTrashAlt /></button>
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

export default QabulKvota;

