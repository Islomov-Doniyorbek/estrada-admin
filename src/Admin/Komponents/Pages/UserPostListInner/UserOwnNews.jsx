import { Input, Modal } from 'antd';
import React from 'react'
import { FaPencilAlt, FaRegClock, FaTrashAlt } from 'react-icons/fa';
import { MdNewspaper } from 'react-icons/md';
import './UserOwn.css'
import images from '../../../images/Images/photo1.jpg'
const UserOwnNews = () => {



  
  return (
    <div>
        <div className='user-video-post'>
       <div className='own_media_top'>
<h2>Yangiliklar bo'limi</h2>
  </div>
  
      <div className='userpost_row'>
          
                <div  className='userpost_card'>
          <div className="news_img userpost_card_img">
            <img src={images}/>
</div>
                      <div className='news_text'>
                        <h2>hSHavdgsavdsgjavdgsa</h2>
                      </div>
                      <div className='news_icons_box'>
                        <div className='news_icons'>
                          <p><span><MdNewspaper /></span>Yangillik</p>
                          <p><span><FaRegClock /></span>12.17.16161</p>
                        </div>
                        <div className='new_delete_icon'>
                          <span >
                            <FaTrashAlt />
                          </span>
                        </div>
                      </div>
                    </div>


                               <div  className='userpost_card'>
          <div className="news_img userpost_card_img">
            <img src={images}/>
</div>
                      <div className='news_text'>
                        <h2>hSHavdgsavdsgjavdgsa</h2>
                      </div>
                      <div className='news_icons_box'>
                        <div className='news_icons'>
                          <p><span><MdNewspaper /></span>Yangillik</p>
                          <p><span><FaRegClock /></span>12.17.16161</p>
                        </div>
                        <div className='new_delete_icon'>
                          <span >
                            <FaTrashAlt />
                          </span>
                        </div>
                      </div>
                    </div>


                               <div  className='userpost_card'>
          <div className="news_img userpost_card_img">
            <img src={images}/>
</div>
                      <div className='news_text'>
                        <h2>hSHavdgsavdsgjavdgsa</h2>
                      </div>
                      <div className='news_icons_box'>
                        <div className='news_icons'>
                          <p><span><MdNewspaper /></span>Yangillik</p>
                          <p><span><FaRegClock /></span>12.17.16161</p>
                        </div>
                        <div className='new_delete_icon'>
                          <span >
                            <FaTrashAlt />
                          </span>
                        </div>
                      </div>
                    </div>

                    
     
            </div>
      </div>
      
      
      
      
    </div>
  )
}

export default UserOwnNews
