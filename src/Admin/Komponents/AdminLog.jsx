import React from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom';
import log_admin from '../images/Images/logo-removebg-preview.png'
const AdminLog = () => {
  const navigate = useNavigate(); 
  const handleChange = () => {
    navigate('Adminpanel'); // ✅ not '/Adminpanel'
  };

    return (
    <div className='adminpanel'>
      <div className='adminpanel_box'>
           <div className='adminpanel_box_top'>
       <img src={log_admin}/>
        <h1>Email va parolingizni kiriting !!!</h1>
        </div>
<h2>Email</h2>
<input type='email' placeholder='Email kiriting'/>

<h2>Parol</h2>
<input type='text' placeholder='Parol kiriting'/>

<button onClick={handleChange} className='admin_button'>Tizimga kirish</button>
      </div>
    </div>
  )
}

export default AdminLog;
