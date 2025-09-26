import React, { useState } from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom';
import log_admin from '../images/Images/logo-removebg-preview.png'
const AdminLog = () => {
    const [forgotPassword, setForgotPassword] = useState(false);

  const navigate = useNavigate(); 
  const handleChange = () => {
    navigate('Adminpanel'); // ✅ not '/Adminpanel'
  };

    return (
  <div className="adminpanel">
      {!forgotPassword ? (
        <div className="adminpanel_box">
          <div className="adminpanel_box_top">
            <img src={log_admin} alt="logo" />
            <h1>Email va parolingizni kiriting !!!</h1>
          </div>
          <h2>Email</h2>
          <input type="email" placeholder="Email kiriting" />
          <h2>Parol</h2>
          <input type="text" placeholder="Parol kiriting" />
          <p onClick={() => setForgotPassword(true)} style={{cursor:"pointer"}}>
            Parol esingizdan chiqdimi ?
          </p>
          <button onClick={handleChange} className="admin_button">
            Tizimga kirish
          </button>
        </div>
      ) : (
        <div className="admin_sms">
<h2>Emailingizga kelgan kodni kiriting!</h2>
<input placeholder='kodni kiriting' type='text'/>
<button>Yuborish</button>
        </div>
      )}
    </div>
  )
}

export default AdminLog;
