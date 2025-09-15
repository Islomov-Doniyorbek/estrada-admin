import React from 'react'
import { MdPermMedia } from 'react-icons/md'
import { PiStudentDuotone } from 'react-icons/pi'

const AddStudent = () => {
  return (
    <div className='addpost_box add_student'>
      <h1>Eko faol talabalar qo'shish</h1>
         <h3><span><PiStudentDuotone /></span>Eko faol talabani yuklang !!!</h3>
<div className='stud_add'>
<h4>O'quvchining ismi.</h4>
<input type='text' placeholder='Ism va familiya kiriting'/>

<h4>Familiya.</h4>
<input type='text' placeholder='Ism va familiya kiriting'/>

<h4>Fakultet.</h4>
<input type='text' placeholder='Fakultet'/>

<h4>Kurs.</h4>
<input type='text' placeholder='Kurs'/>

<h4>O'quvchining telefon raqami</h4>
<input type='text' placeholder="Telefon raqam "/>

<button>Saqlash</button>
</div>

    </div>
  )
}

export default AddStudent
