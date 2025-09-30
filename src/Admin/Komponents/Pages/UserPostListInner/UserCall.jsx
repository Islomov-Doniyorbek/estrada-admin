import React, { useState } from 'react'
import './UserOwn.css'
import { Modal } from 'antd';
import { FaRegTrashAlt } from 'react-icons/fa';
const UserCall = () => {
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
    <div className='admincall'>
      <h1>Call center a'zolari</h1>
<div className='admin-call-row'>
<div className='admin-call-card'>
<h2>Dilmurotov Mirzobek O‘tkir o‘g‘li</h2>
<p>O‘quv-uslubiy boshqarma boshlig‘i,
Qabul komissiyasi mas’ul kotibi</p>
<span>+998 91 003 36 55<b onClick={showModal}><FaRegTrashAlt /></b></span>
</div>
<div className='admin-call-card'>
<h2>Dilmurotov Mirzobek O‘tkir o‘g‘li</h2>
<p>O‘quv-uslubiy boshqarma boshlig‘i,
Qabul komissiyasi mas’ul kotibi</p>
<span>+998 91 003 36 55 <b onClick={showModal}><FaRegTrashAlt /></b></span>
</div>
<div className='admin-call-card'>
<h2>Dilmurotov Mirzobek O‘tkir o‘g‘li</h2>
<p>O‘quv-uslubiy boshqarma boshlig‘i,
Qabul komissiyasi mas’ul kotibi</p>
<span>+998 91 003 36 55 <b onClick={showModal}><FaRegTrashAlt /></b></span>
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

export default UserCall
