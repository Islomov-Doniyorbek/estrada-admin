import { Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import { FaPencilAlt, FaRegClock, FaTrashAlt } from 'react-icons/fa';
import { MdNewspaper } from 'react-icons/md';
import './UserOwn.css'
const UserOwnNews = () => {
     const [userPosts, setUserPosts] = useState([]);

      useEffect(() => {
        const storedPosts = localStorage.getItem("userPosts");
        if (storedPosts) {
          setUserPosts(JSON.parse(storedPosts));
        }
      }, []);


    
      const handleDelete = (id) => {
        const filtered = userPosts.filter(post => post.id !== id);
        setUserPosts(filtered);
        localStorage.setItem("userPosts", JSON.stringify(filtered));
      };
  return (
    <div>
        <div className='user-video-post'>
       <div className='own_media_top'>
<h2>Yangiliklar bo'limi</h2>
  </div>
  
      <div className='userpost_row'>
              {userPosts.map((post) => (
                <div key={post.id} className='userpost_card'>
          
                     <div
  className="news_img userpost_card_img"
  style={{ backgroundImage: `url(${post.images?.[0]})` }}
>
</div>
                      <div className='news_text'>
                        <h2>{post.title}</h2>
                      </div>
                      <div className='news_icons_box'>
                        <div className='news_icons'>
                          <p><span><MdNewspaper /></span>{post.category}</p>
                          <p><span><FaRegClock /></span>{post.date}</p>
                        </div>
                        <div className='new_delete_icon'>
                          <span onClick={() => handleDelete(post.id)}>
                            <FaTrashAlt />
                          </span>
                        </div>
                      </div>
                    </div>
              ))}
            </div>
      </div>
      
      
      
      
    </div>
  )
}

export default UserOwnNews
