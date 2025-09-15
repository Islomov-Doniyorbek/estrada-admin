import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import audio from '../../../images/Images/audio.jpg'
import RanoMp3 from "../../../images/Audio/Botir Zokirov - Ra'no.mp3"
import { FaRegTrashCan } from 'react-icons/fa6'
const UserOwnMedia = () => {
  return (
    <div className='own_media'>
  
  <div className='own_media_top'>
<h2>Media bo'limi</h2>
  </div>
  
  <div className='own_media_images'>
    <h1>Rasmlar</h1>
   <div className='own-img-row'>

<div className='own-img-col'>
<div className='own-img-card'>
</div>
<span><FaTrashAlt /></span>
</div>

<div className='own-img-col'>
<div className='own-img-card'>
</div>
<span><FaTrashAlt /></span>
</div>


<div className='own-img-col'>
<div className='own-img-card'>
</div>
<span><FaTrashAlt /></span>
</div>

<div className='own-img-col'>
<div className='own-img-card'>
</div>
<span><FaTrashAlt /></span>
</div>
</div>
</div>



<div className='own_media_audio'>
    <h1>Audiolar</h1>
    <div className='own_audio_row'>


<div className='own_audio'>
  <div className='audios_box own_audio_box'>
<div className='audio_img'>
     <img src={audio}/>
          </div>
   <div className="audio_item">
    <p>Botir Zokirov - Ra'no</p>
    <audio controls>
   <source src={RanoMp3} type="audio/mpeg" />
      Sizning brauzeringiz audio elementni qo‘llab-quvvatlamaydi.
    </audio>
  </div>
      <div className='boss_delete_icon'>
    <span><FaRegTrashCan /></span>
      </div>
</div>
</div>



<div className='own_audio'>
  <div className='audios_box own_audio_box'>
<div className='audio_img'>
     <img src={audio}/>
          </div>
   <div className="audio_item">
    <p>Botir Zokirov - Ra'no</p>
    <audio controls>
   <source src={RanoMp3} type="audio/mpeg" />
      Sizning brauzeringiz audio elementni qo‘llab-quvvatlamaydi.
    </audio>
 
  </div>
        <div className='boss_delete_icon'>
    <span><FaRegTrashCan /></span>
      </div>
</div>

</div>


<div className='own_audio'>
  <div className='audios_box own_audio_box'>

<div className='audio_img'>
     <img src={audio}/>
          </div>
   <div className="audio_item">
    <p>Botir Zokirov - Ra'no</p>
    <audio controls>
   <source src={RanoMp3} type="audio/mpeg" />
      Sizning brauzeringiz audio elementni qo‘llab-quvvatlamaydi.
    </audio>
  
  </div>
      <div className='boss_delete_icon'>
    <span><FaRegTrashCan /></span>
      </div>
</div>
</div>
</div>
</div>



<div className='own-video'>
<h1>Videolar</h1>
<div className='own-video_row'>

<div className='own-video_col'>
<div className='own-video_card'>
  <div className="video_wrapper">
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/1xDIzlDksKA"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
</div>

<div className='own-video_col'>
<div className='own-video_card'>
  <div className="video_wrapper">
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/1xDIzlDksKA"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
</div>


<div className='own-video_col'>
<div className='own-video_card'>
  <div className="video_wrapper">
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/1xDIzlDksKA"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

</div>

<div className='own-video_col'>
<div className='own-video_card'>
  <div className="video_wrapper">
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/1xDIzlDksKA"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
</div>

</div>
</div>



    </div>
  )
}

export default UserOwnMedia
