import React, { useState } from 'react'
import './Qabul.css'
import { FaRegTrashAlt } from 'react-icons/fa';
import { Modal } from 'antd';
const Callcenter = () => {
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
    <div className='callcenter'>
      <h1>Call center a'zosini yuklang</h1>
      <div>
           <div className='qabul-box'>
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
      </div>

      <div className='qabul-post-box'>
<h1>Qabul bo'limi uchun yuklangan postlar</h1>
<div className='qabul-post-person'>
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
  )
}

export default Callcenter
