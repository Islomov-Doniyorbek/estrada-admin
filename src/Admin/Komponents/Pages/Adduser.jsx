import React, {useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import './Pages.css'
import { FaTrashAlt } from 'react-icons/fa';
import { Modal } from 'antd';
const Adduser = () => {





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
    <div className='adduser'>
      <div className='adduser_box'>
        <h1>Admin qo'shish</h1>
      
      <div className='head_admin'>
      <div className='ny-admin'>
      <h2>Ism</h2>
      <input type='text' placeholder='ism'/>

          <h2>Email</h2>
      <input type='text' placeholder='email'/>

          <h2>Familiya</h2>
      <input type='text' placeholder='familiya'/>

</div>

<div className='ny-admin'>
  <h2>Login</h2>
      <input type='text' placeholder='login'/>
</div>

    </div>

      <button>Saqlash</button>
</div>





<div className='admins_list'>
    <h1>Adminlar ro'yxati</h1>
<table class="table admin_table">
  <thead className="my-thead">
    <tr>
      <th scope="col">#</th>
      <th scope="col" >Ism Familiya</th>
      <th scope="col" >E-mail</th>
      <th scope="col" >Category</th>
      <th scope="col">O'chirish</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th  scope="row"><p className='user_name'>1</p></th>
      <td><p className='user_name'>Mark</p></td>
            <td><p className='user_name'>Admin@gmail.com</p></td>
      <td><p className='user_name user_category_name'>O'qtuvchi</p></td>
      <td  ><span className='user_deletes user_category_name'><button onClick={showModal}> <FaTrashAlt /></button></span></td>
    </tr>

 <tr>
      <th  scope="row"><p className='user_name'>1</p></th>
      <td><p className='user_name'>Mark</p></td>
            <td><p className='user_name'>Admin@gmail.com</p></td>
      <td><p className='user_name user_category_name'>O'qtuvchi</p></td>
      <td  ><span className='user_deletes user_category_name'><button onClick={showModal}> <FaTrashAlt /></button></span></td>
    </tr>

  </tbody>
</table>
</div>

   <>
      <Modal
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className='adduser_modal'
      >
        <div className='modal_box'>
      <h1>Admini o'chirishni xohlaysizmi!!!</h1>
      <div className='modal_button'>
      <button  onClick={handleCancel}>Ha</button>
      <button>Yo'q</button>
      </div>
      </div>
      </Modal>
    </>
    </div>
  )
}

export default Adduser
