import React from 'react'
import rasm from '../../../images/Images/photo1.jpg'
import { FaRegTrashAlt } from 'react-icons/fa'
const UserMedia = () => {
  return (
    <div className='usermedia'>
      <h1>Media fayllar</h1>
      <div className='image_media'>
        <h2>Rasmlar</h2>
    <div className='image_media_row'>
 <div className='image_card'>
     <div className='media_button'>
     <button ><FaRegTrashAlt /></button>
     </div>
 <img src={rasm}/>
 </div>
        <div className='image_card'>
     <div className='media_button'>
     <button ><FaRegTrashAlt /></button>
     </div>
 <img src={rasm}/>
 </div>

  <div className='image_card'>
     <div className='media_button'>
     <button ><FaRegTrashAlt /></button>
     </div>
 <img src={rasm}/>
 </div>
      </div>
      </div>

          <div className='image_media'>
        <h2>Audiolar</h2>
    <div className='image_media_row'>
  <div className='audio_media_card '>
   <h3> Botir zokirov Rano</h3>
    <button >
      <FaRegTrashAlt />
    </button>
  </div>
  <div className='audio_media_card'>
   <h3> Botir zokirov Rano</h3>
    <button >
      <FaRegTrashAlt />
    </button>
  </div>

  <div className='audio_media_card'>
   <h3> Botir zokirov Rano</h3>
    <button >
      <FaRegTrashAlt />
    </button>
  </div>
      </div>
      </div>

    </div>
  )
}

export default UserMedia
