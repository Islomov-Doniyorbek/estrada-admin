import React, { useEffect } from "react";

const UserMessages = () => {
  const data = [
    {
      id: "msg_001",
      name: "Ibrohim",
      email: "ibrohimismoilov@gmail.com",
      subject: "Institut ekologiyasi",
      message:
        "Aholi jon boshiga daromad ko‘rsatkichlari bo‘yicha mintaqaviy taqqoslashda barqaror o‘sish sur’atlari muhim. Institut huzurida yashil texnologiyalar laboratoriyasini yo‘lga qo‘yish bo‘yicha takliflar bor.",
      createdAt: "2025-08-15T10:05:00+05:00",
    },
    {
      id: "msg_002",
      name: "Dilnoza",
      email: "dilnoza.qodirova@example.com",
      subject: "Talabalar turar joyi",
      message:
        "Yangi TTJ binosida energiya tejovchi yoritish va suvni qayta ishlatish tizimlarini joriy etish bo‘yicha savollarim bor. Mas’ul bo‘lim bilan uchrashuv belgilab bera olasizmi?",
      createdAt: "2025-08-14T18:22:00+05:00",
    },
    {
      id: "msg_003",
      name: "Javlon",
      email: "javlon_n@mail.ru",
      subject: "Qabul 2025",
      message:
        "Ekologiya yo‘nalishidagi bakalavriat uchun grant o‘rinlari va ingliz tili sertifikati talablariga aniqlik kiritmoqchiman. Rasmiy yo‘riqnoma qachon e’lon qilinadi?",
      createdAt: "2025-08-13T09:10:00+05:00",
    },
    {
      id: "msg_004",
      name: "Malika",
      email: "malika.saidova@edu.uz",
      subject: "Kutubxona va ma’lumot bazalari",
      message:
        "Scopus va Web of Science’ga masofadan kirish bo‘yicha qo‘llanma kerak. Shuningdek, ekologik monitoring bo‘yicha o‘zbekcha manbalar ro‘yxatini ulashasizmi?",
      createdAt: "2025-08-12T14:37:00+05:00",
    },
  ];


  useEffect(() => {
    localStorage.setItem("xabarlar", JSON.stringify(data));
  }, []);

  return (
    <div className="xabarlar">
      <div className="xabarlar_box">
        <h2>Barcha takliflar va e'tirozlar</h2>
        <div className="xabarlar_row">
          {data.map((item) => (
            <div className="xabarlar_card" key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.email}</p>
              <p className="xabarlar_p">Xabar nima haqida: {item.subject}</p>
              <span>{item.message}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserMessages;










