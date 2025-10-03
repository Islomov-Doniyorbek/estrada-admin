import React, { useState } from "react";
import "./UserOwn.css";
import { FaRegTrashAlt } from "react-icons/fa";

const UserFile = () => {
  const [activeTab, setActiveTab] = useState(null);

  // Barcha fayllar
  const ilmiyData = [
    {
      id: 1,
      title: "Kafedira",
      text: "Yo'nalish",
      file: {
        name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
        url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      },
    },
  ];

  const talimData = [
    {
      id: 1,
      title: "Post sarlavhasi",
      text: "Post matni",
      file: {
        name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
        url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      },
    },
    {
      id: 2,
      title: "Post sarlavhasi",
      text: "Post matni",
      file: {
        name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
        url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      },
    },
  ];

  const darsJadvaliData = [
    {
      id: 1,
      title: "Dars jadvali 2024-2025",
      language: "Rus tili guruhlari uchun",
      file: {
        name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
        url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      },
    },
    {
      id: 2,
      title: "Dars jadvali 2024-2025",
      language: "Rus tili guruhlari uchun",
      file: {
        name: "1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
        url: "/files/1.Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      },
    },
  ];

  // Menyular ro'yxati
  const sections = [
    {
      title: "Ilmiy faoliyatga oid hujjatlar",
      buttons: [
        { key: "Ilmiy Taqiqot", label: "Ilmiy Taqiqot 📑" },
        { key: "Ilmiy Jurnal", label: "Ilmiy Jurnal 📚" },
        { key: "Ilmiy Loyiha", label: "Ilmiy Loyiha 📝" },
        { key: "Ilmiy Kengash", label: "Ilmiy Kengash 🏛" },
      ],
    },
    {
      title: "Ta'lim bo‘yicha fayllar",
      buttons: [
        { key: "Magistratura", label: "Magistratura 🎓" },
        { key: "Bakalavr", label: "Bakalavr 📖" },
        { key: "Dars Jadvali", label: "Dars Jadvali 📅" },
      ],
    },
    {
      title: "Qabul bo‘yicha fayllar",
      buttons: [
        { key: "Kvota", label: "Qabul kvotalari 🎓" },
        { key: "Dastur", label: "Qabul dasturlari 📖" },
      ],
    },
  ];

  // Dinamik render
  const renderContent = () => {
    if (!activeTab) return null;

    switch (activeTab) {
      case "Ilmiy Taqiqot":
      case "Ilmiy Jurnal":
      case "Ilmiy Loyiha":
      case "Ilmiy Kengash":
        return (
          <div className="content-box">
            📑 Bu yerda <b>{activeTab}</b> fayllari mavjud
            <div className="fayllar_bolimi">
              <div className="ilmiy-card-row">
                {ilmiyData.map((post) => (
                  <div key={post.id} className="ilmiy-taqiqot_card admin_ilmiy_card">
                    {post.file && (
                      <a href={post.file.url} target="_blank" rel="noopener noreferrer">
                        {post.file.name}
                      </a>
                    )}
                    <div className="ilmiy-taqiqot_button">
                      <button>
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "Magistratura":
      case "Bakalavr":
        return (
          <div className="content-box">
            🎓 Bu yerda <b>{activeTab}</b> fayllari mavjud
            <div className="fayllar_bolimi">
              <div className="talim_posts_row">
                {talimData.map((post) => (
                  <div key={post.id} className="talim_col">
                    <p>{post.title}</p>
                    <p>{post.text}</p>
                    <div className="ilmiy-taqiqot_card talim_card">
                      {post.file && (
                        <a href={post.file.url} target="_blank" rel="noopener noreferrer">
                          {post.file.name}
                        </a>
                      )}
                      <div className="ilmiy-taqiqot_button">
                        <button>
                          <FaRegTrashAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "Dars Jadvali":
        return (
          <div className="content-box">
            📅 Bu yerda <b>Dars Jadvali</b> mavjud
            <div className="fayllar_bolimi">
              <div className="talim_posts_row">
                {darsJadvaliData.map((post) => (
                  <div key={post.id} className="talim_col talim_table_col">
                    <p>{post.title}</p>
                    <p className="talim-language">{post.language}</p>
                    <div className="ilmiy-taqiqot_card talim_card talim_table_card">
                      {post.file && (
                        <a href={post.file.url} target="_blank" rel="noopener noreferrer">
                          {post.file.name}
                        </a>
                      )}
                      <div className="ilmiy-taqiqot_button">
                        <button>
                          <FaRegTrashAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "Kvota":
        return (
          <div className="content-box">
            🎓 Bu yerda <b>Qabul kvotalari</b> fayllari mavjud
            <div className="fayllar_bolimi">
              <div className="kvota_row">
                <div className="kvota_card">
                  <h3>2024-2025 o‘quv yili kvotasi.pdf</h3>
                  <div className="ilmiy-taqiqot_button qabul_button">
                    <button>
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Dastur":
        return (
          <div className="content-box">
            📖 Bu yerda <b>Qabul dasturlari</b> fayllari mavjud
            <div className="fayllar_bolimi">
              <div className="qabul_dastur_row">
                <div className="qabul_dastur_card">
                  <h3>Kompizatsiya san'ati.pdf</h3>
                  <div className="ilmiy-taqiqot_button qabul_button">
                    <button>
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="user_files">
      <h1>Barcha fayllar</h1>
      <div className="files_menu">
        {sections.map((section, i) => (
          <div key={i}>
            <h1>{section.title}</h1>
            {section.buttons.map((btn) => (
              <button
                key={btn.key}
                className={activeTab === btn.key ? "active" : ""}
                onClick={() => setActiveTab(btn.key)}
              >
                {btn.label}
              </button>
            ))}
          </div>
        ))}
      </div>

      {renderContent()}
    </div>
  );
};

export default UserFile;

