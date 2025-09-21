import React, { useState } from 'react'
import rahbar from '../../images/Images/rahvar.jpg'
import { FaRegTrashCan } from 'react-icons/fa6'
import { Modal } from 'antd';
const Tuzilmaqoshish = () => {
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
    <div className='tuzilma'>
      <h1>Rahbar kiriting</h1>
      <div className='tuzilma_rahbariyat'>
<div className='rahbariyat_card'>
<h2>Rahbarning ism familiyasi:</h2>
<input type='text' placeholder='Ism va familiya'/>
</div>

<div className='rahbariyat_card'>
<h2>Rahbarning lavozimi:</h2>
<input type='text' placeholder='Lavozim'/>
</div>


<div className='rahbariyat_card'>
<h2>Rahbarning unvonlari:</h2>
<input type='text' placeholder='unvoni: professor, dotsent.....'/>
</div>


<div className='rahbariyat_card'>
<h2>Rahbarning qaysi vaqtda qabul qilishi :</h2>
<input type='text' placeholder='9:00 da 17:00gacha dushanba seshanba kunlari'/>
</div>

<div className='rahbariyat_card'>
<h2>Rahbarning nomeri :</h2>
<input type='text' placeholder='+998767676767'/>
</div>


<div className='rahbariyat_card'>
<h2>Rahbarning emaili :</h2>
<input type='text' placeholder='admin@gmail.com'/>
</div>

<button className='tuzilma_button'>Saqlash</button>
      </div>


<div className='delete_boss'>
<h3>Rahbarni o'chirish</h3>
<div className='delete_bos_row'>
<div className='delete_bos_card'>
    <div className='boss_delete_icon'>
<span onClick={()=>showModal()}><FaRegTrashCan /></span>
  </div>
  <div className='delete_bos_img'>
  <img src={rahbar}/>
  </div>
  <h3>Mirzayev Akbarjon Abdurahimovich</h3>
  <p>O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti rektori</p>
  <p>O‘zbekiston Respublikasida xizmat koʻrsatgan madaniyat xodimi, professor</p>
<div className='rahbar_vaxifasi'>
  <span> Dushanba 9:00 dan 18:00 gacha</span>
  <span> +998 71 200 00 00</span>
  <span> info@estrada-art.uz</span>
  </div>
</div>


<div className='delete_bos_card'>
  <div className='boss_delete_icon'>
<span  onClick={()=>showModal()}><FaRegTrashCan /></span>
  </div>
  <div className='delete_bos_img'>
  <img src={rahbar}/>
  </div>
  <h3>Mirzayev Akbarjon Abdurahimovich</h3>
  <p>O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti rektori</p>
  <p>O‘zbekiston Respublikasida xizmat koʻrsatgan madaniyat xodimi, professor</p>
<div className='rahbar_vaxifasi'>
  <span> Dushanba 9:00 dan 18:00 gacha</span>
  <span> +998 71 200 00 00</span>
  <span> info@estrada-art.uz</span>
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
   <h1>Bu rahbarni o'chirishni xohlaysizmi!!!</h1>
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

export default Tuzilmaqoshish






