import React, { useState } from 'react';
import './Eko.css';
import { Modal, Table } from 'antd';
import { FaRegTrashAlt } from 'react-icons/fa';

const Ekotalabalar = () => {

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedRecord, setSelectedRecord] = useState(null);
    
      const showModal = (record) => {
        setSelectedRecord(record);
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        console.log("O‘chirilgan element:", selectedRecord);
        setIsModalOpen(false);
        setSelectedRecord(null);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedRecord(null);
      };
  const [formData, setFormData] = useState({
    fullname: '',
    faculty: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.fullname || !formData.faculty || !formData.phone) {
      alert("Barcha maydonlarni to'ldiring!");
      return;
    }
    alert(`Yuborildi:\nIsm: ${formData.fullname}\nFakultet: ${formData.faculty}\nTelefon: ${formData.phone}`);
    setFormData({ fullname: '', faculty: '', phone: '' });
  };

  const dataSource = [
    {
      key: "1",
      name: "Amonov Negmurod",
      faculty: "	Professional ta’lim: vokal, 4-kurs talabasi",
     number: "90 674 83 53",
    }, {
      key: "1",
      name: "Amonov Negmurod",
      faculty: "	Professional ta’lim: vokal, 4-kurs talabasi",
     number: "90 674 83 53",
    },

  ];

  const columns = [
    {
      title: "Ism Familiya",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Fakultet",
      dataIndex: "faculty",
      key: "faculty",
    },
    {
      title: "Telefon raqam",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "O'chirish",
      key: "delete",
      render: (_, record) => (
        <span onClick={() => showModal(record)} className="call-delete">
          <FaRegTrashAlt />
        </span>
      ),
    },
  ];

  return (
    <div className='callcenter'>
      <h1>Eko faol talabalar</h1>
      <div className="eko-form">
        <input
          type="text"
          name="fullname"
          placeholder="Ism Familiya"
          value={formData.fullname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="faculty"
          placeholder="Fakultet"
          value={formData.faculty}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefon raqami"
          value={formData.phone}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Yuborish</button>
      </div>

           {/* Joylangan linklar */}
      <div className="zoom-link-post">
        <h2>Eko talabalar</h2>
        <div className="zoom-post-row">
          <Table
            className="student_table follow_table"
            dataSource={dataSource}
            columns={columns}
          />
        </div>
      </div>
            {/* Modal */}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="axborot_modal">
          <h1>Bu ma'lumotni o'chirishni xohlaysizmi?</h1>
          <div className="axborot_modal_button">
            <button className="axborot_red" onClick={handleOk}>
              Ha
            </button>
            <button onClick={handleCancel}>Yo'q</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Ekotalabalar;
