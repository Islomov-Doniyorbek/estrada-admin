import React, { useState } from 'react'
import './UserOwn.css'
import { FaRegTrashAlt } from 'react-icons/fa';

const UserFile = () => {
  const [activeTab, setActiveTab] = useState(null)
  const database = [
  {
    id: 1,
    title: "Post sarlavhasi",
    text: "Post matni",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
   {
    id: 2,
    title: "Post sarlavhasi",
    text: "Post matni",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },

];

 const data = [
    {
      id: 1,
      title: "Kafedira",
      text: "Yo'nalish",
      file: {
        name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
        url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
      }
    }
  ];



  const databases = [
  {
    id: 1,
    title: "Dars jadvali 2024-2025",
language:"Rus tili guruhlari uchun",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  },
   {
    id: 2,
title: "Dars jadvali 2024-2025",
language:"Rus tili guruhlari uchun",
    file: {
      name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf"
    }
  }
  
];


  const renderContent = () => {
    switch (activeTab) {
//Ilmiy faoliyat boyicha filelar

      case 'Ilmiy Taqiqot':
        return <div className="content-box">📑 Bu yerda <b>Ilmiy Tadqiqot</b> fayllari mavjud
        <div className='fayllar_bolimi'>     <div className='ilmiy-card-row'>
      {data.map((post) => (
      <div className='ilmiy-taqiqot_card admin_ilmiy_card'>
         {post.file && (
                <a href={post.file.url} target="_blank" rel="noopener noreferrer">
                  {post.file.name}
                </a>
              )}
      <div className='ilmiy-taqiqot_button'>
      <button ><FaRegTrashAlt /></button>
      </div>
      </div>
          ))}
      </div></div></div>
      case 'Ilmiy Jurnal':
        return <div className="content-box">📚 Bu yerda <b>Ilmiy Jurnallar</b> fayllari mavjud
             <div className='fayllar_bolimi'>     <div className='ilmiy-card-row'>
      {data.map((post) => (
      <div className='ilmiy-taqiqot_card admin_ilmiy_card'>
         {post.file && (
                <a href={post.file.url} target="_blank" rel="noopener noreferrer">
                  {post.file.name}
                </a>
              )}
      <div className='ilmiy-taqiqot_button'>
      <button ><FaRegTrashAlt /></button>
      </div>
      </div>
          ))}
      </div></div>
        </div>
      case 'Ilmiy Loyiha':
        return <div className="content-box">📝 Bu yerda <b>Ilmiy Loyiha</b> fayllari mavjud
             <div className='fayllar_bolimi'>     <div className='ilmiy-card-row'>
      {data.map((post) => (
      <div className='ilmiy-taqiqot_card admin_ilmiy_card'>
         {post.file && (
                <a href={post.file.url} target="_blank" rel="noopener noreferrer">
                  {post.file.name}
                </a>
              )}
      <div className='ilmiy-taqiqot_button'>
      <button ><FaRegTrashAlt /></button>
      </div>
      </div>
          ))}
      </div></div>
        </div>


      case 'Ilmiy Kengash':
        return <div className="content-box">🏛 Bu yerda <b>Ilmiy Kengash</b> fayllari mavjud
             <div className='fayllar_bolimi'>     <div className='ilmiy-card-row'>
      {data.map((post) => (
      <div className='ilmiy-taqiqot_card admin_ilmiy_card'>
         {post.file && (
                <a href={post.file.url} target="_blank" rel="noopener noreferrer">
                  {post.file.name}
                </a>
              )}
      <div className='ilmiy-taqiqot_button'>
      <button ><FaRegTrashAlt /></button>
      </div>
      </div>
          ))}
      </div></div>
        </div>


//Ta'lim boyicha qabul qilgan fayllar

      case 'Magistratura':
        return <div className="content-box">🎓 Bu yerda <b>Magistratura</b> fayllari mavjud
        <div className='fayllar_bolimi'>
                    <div className='talim_posts_row'>
          {database.map((post) => (
            <div className='talim_col' key={post.id}>
              <p>{post.title}</p>
              <p>{post.text}</p>
              <div className='ilmiy-taqiqot_card talim_card '>
                {post.file && (
                  <a href={post.file.url} target="_blank" rel="noopener noreferrer">
                    {post.file.name}
                  </a>
                )}
                <div className='ilmiy-taqiqot_button'>
                  <button  ><FaRegTrashAlt /></button>
                </div>
              </div>
            </div>
          ))}
        </div></div></div>
      case 'Bakalavr':
        return <div className="content-box">📖 Bu yerda <b>Bakalavr</b> fayllari mavjud
         <div className='fayllar_bolimi'>
                    <div className='talim_posts_row'>
          {database.map((post) => (
            <div className='talim_col' key={post.id}>
              <p>{post.title}</p>
              <p>{post.text}</p>
              <div className='ilmiy-taqiqot_card talim_card'>
                {post.file && (
                  <a href={post.file.url} target="_blank" rel="noopener noreferrer">
                    {post.file.name}
                  </a>
                )}
                <div className='ilmiy-taqiqot_button'>
                  <button  ><FaRegTrashAlt /></button>
                </div>
              </div>
            </div>
          ))}
        </div></div>
        </div>
      case 'Dars Jadvali':
        return <div className="content-box">📅 Bu yerda <b>Dars Jadvali</b> mavjud
         <div className='fayllar_bolimi'>
                      <div className='talim_posts_row'>
                      {databases.map((post) => (<div className='talim_col talim_table_col'>
                         <p>{post.title}</p>
                            <p className='talim-language'>{post.language}</p>
                      <div className='ilmiy-taqiqot_card talim_card talim_table_card'>
                         {post.file && (
                                <a href={post.file.url} target="_blank" rel="noopener noreferrer">
                                  {post.file.name}
                                </a>
                              )}
                      <div className='ilmiy-taqiqot_button'>
                      <button ><FaRegTrashAlt /></button>
                      </div>
                      </div>
                      </div>
                          ))}
                      </div></div>
        </div>


//Qabul boyicha kvota va daturlar
      case 'Kvota':
        return <div className="content-box">🎓 Bu yerda <b>Qabul kvotalari</b> fayllari mavjud
        <div className='fayllar_bolimi'>
             <div className="kvotalar">
                   
                   
                   
                    <div className="bakalavr_kvo">
            <h2>Bakalavr kvotasi</h2>
            <div className="kvota_row">
            
            <div className="kvota_card">
            <h3>2024-2025 oquv yillari qabul kvotasi.pdf</h3>
            <div className='ilmiy-taqiqot_button qabul_button'>
            <button ><FaRegTrashAlt /></button>
            </div>
            </div>
            
            
            <div className="kvota_card">
            <h3>2024-2025 oquv yillari qabul kvotasi.pdf</h3>
            <div className='ilmiy-taqiqot_button qabul_button'>
            <button><FaRegTrashAlt /></button>
            </div>
            </div>
            
            
            </div>
            </div>
            
            
                 <div className="bakalavr_kvo">
            <h2>Magistratura kvotasi</h2>
            <div className="kvota_row">
            <div className="kvota_card">
            <h3>2024-2025 oquv yillari qabul kvotasi.pdf</h3>
            <div className='ilmiy-taqiqot_button qabul_button'>
            <button><FaRegTrashAlt /></button>
            </div>
            </div>
            </div>
            </div>
            
            
            
                 </div>
                    </div></div>


      case 'Dastur':
        return <div className="content-box">🎓 Bu yerda <b>Qabul dasturlari</b> fayllari mavjud
        <div className='fayllar_bolimi'>
            <div className="qabul_dastur_row">
            
            <div className="qabul_dastur_card">
            <h3>Kompizatsiya san'ati.pdf</h3>
            <div className='ilmiy-taqiqot_button qabul_button'>
            <button ><FaRegTrashAlt /></button>
            </div>
            </div>
            
            <div className="qabul_dastur_card">
            <h3>Kompizatsiya san'ati.pdf</h3>
            <div className='ilmiy-taqiqot_button qabul_button'>
            <button ><FaRegTrashAlt /></button>
            </div>
            </div>
            
            
            </div>
                  </div></div>





      default:
        return null
    }
  }

  return (
    <div className="user_files">
      <h1>Barcha fayllar</h1>
      <div className="files_menu">
        <div>
          <h1>Ilmiy faoliyatga oid hujjatlar</h1>
          <button
            className={activeTab === 'Ilmiy Taqiqot' ? 'active' : ''}
            onClick={() => setActiveTab('Ilmiy Taqiqot')}
          > 
            Ilmiy Taqiqot 📑
          </button>
          <button
            className={activeTab === 'Ilmiy Jurnal' ? 'active' : ''}
            onClick={() => setActiveTab('Ilmiy Jurnal')}
          >
            Ilmiy Jurnal 📚
          </button>
          <button
            className={activeTab === 'Ilmiy Loyiha' ? 'active' : ''}
            onClick={() => setActiveTab('Ilmiy Loyiha')}
          >
            Ilmiy Loyiha 📝
          </button>
          <button
            className={activeTab === 'Ilmiy Kengash' ? 'active' : ''}
            onClick={() => setActiveTab('Ilmiy Kengash')}
          >
            Ilmiy Kengash 🏛
          </button>
        </div>

        <div>
          <h1>Ta'lim bo‘yicha fayllar</h1>
          <button
            className={activeTab === 'Magistratura' ? 'active' : ''}
            onClick={() => setActiveTab('Magistratura')}
          >
            Magistratura 🎓
          </button>
          <button
            className={activeTab === 'Bakalavr' ? 'active' : ''}
            onClick={() => setActiveTab('Bakalavr')}
          >
            Bakalavr 📖
          </button>
          <button
            className={activeTab === 'Dars Jadvali' ? 'active' : ''}
            onClick={() => setActiveTab('Dars Jadvali')}
          >
            Dars Jadvali 📅
          </button>
        </div>



         <div>
          <h1>Qabul bo‘yicha fayllar</h1>
          <button
            className={activeTab === 'Kvota' ? 'active' : ''}
            onClick={() => setActiveTab('Kvota')}
          >
            Qabul kvotalari 🎓
          </button>
          <button
            className={activeTab === 'Dastur' ? 'active' : ''}
            onClick={() => setActiveTab('Dastur')}
          >
            Qabul dasturlari 📖
          </button>
        </div>
      </div>

      {renderContent()}
    </div>
  )
}

export default UserFile
