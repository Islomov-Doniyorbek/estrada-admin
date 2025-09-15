import React, { useState } from 'react'

const Editing = () => {
    const [uploadedFileName, setUploadedFileName] = useState('');
    const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setUploadedFileName(file.name);
    console.log("Yuklangan fayl:", file);
  }
};
  return (
    <div className='edit_box'>
      <h1>Navbar , Header va Footerga o'zgartira olasiz</h1>
      
      <div className='edit_head'>
<h4>Headerga o'zgartirish kiritish</h4>
<div className='edit_head_row'>
<div className='edit_head_card'>
<h2>Headerdagi mavjud qism</h2>
<p> Toshkent 100027, Botir Zokirov ko'chasi 1 uy</p>
<h2>O'zgartirmoqchi bo'gan malumotni kiriting</h2>
<input type="text"/>
<button className='edit_btn'>Saqlash</button>
</div>
<div className='edit_head_card'>
<h2>Headerdagi mavjud qism</h2>
<p> +998 71 200 00 00 </p>
<h2>O'zgartirmoqchi bo'gan malumotni kiriting</h2>
<input type="text"/>
<button className='edit_btn'>Saqlash</button>
</div>
</div>
      </div>




<div className='edit_menu'>
<h3>Menu bilan logoga o'zgartirish kiritish</h3>
<div className='edit_menu_row'>
<div className='edit_menu_card'>
<p>Yangi logo yuklash</p>
<div className="upload_box media_gpg">
    <label className="media_label">
      {uploadedFileName ? `🖼️ ${uploadedFileName}` : '🖼️ Rasm yuklash'}
      <input className="file_input" type="file" accept="image/*" onChange={handleFileChange} />
    </label>
  </div>
    <button className='edit_btn'>Saqlash</button>
</div>
<div className='edit_menu_card edit_menu_card2'>
<p>Yangi menu yuklash.</p>
<h2>Menu nomini kiriting.</h2>
<input type='text' placeholder='Menu nomini kiriting...'/>
<h2>Menu bo'limlari nomini kiriting.</h2>
<input type='text' placeholder='Menu nomini kiriting...'/>
<button className='edit_btn'>Saqlash</button>
</div>
</div>
</div>






<div className='edit_fott'>
<h2>Footerga o'zgartirish kiritish</h2>
<div className='edit_fott_row'>
<div className='edit_fott_card'>
<p>Footer qism uchun text yuklang</p>
<textarea type='text' placeholder='Text yuklang...'/>
<button className='edit_btn'>Saqlash</button>
</div>
</div>
<div>

</div>
</div>



    </div>
  )
}

export default Editing
