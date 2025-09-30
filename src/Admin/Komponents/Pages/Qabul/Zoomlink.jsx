import React, { useState } from "react";
import { Table, Modal } from "antd";
import { FaRegTrashAlt } from "react-icons/fa";

const Zoomlink = () => {
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

  const dataSource = [
    {
      key: "1",
      direction: "Cholg’u ijrochiligi: estrada cholg’ulari",
      science: "1-fan",
      link: "Havola",
      roomnumber: "220-xona",
      description: "Qo'shimcha Izoh",
    },
    {
      key: "2",
      direction: "Cholg’u ijrochiligi: estrada cholg’ulari (fortepiano)",
      science: "1-fan",
      link: "Havola",
      roomnumber: "108-xona",
      description: "Imtihon",
    },
  ];

  const columns = [
    {
      title: "Yo'nalish",
      dataIndex: "direction",
      key: "direction",
    },
    {
      title: "Fan",
      dataIndex: "science",
      key: "science",
    },
    {
      title: "Online Havola",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "Xona Raqami",
      dataIndex: "roomnumber",
      key: "roomnumber",
    },
    {
      title: "Qo'shimcha Izoh",
      dataIndex: "description",
      key: "description",
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
    <div className="callcenter">
      <h1>Zoom link</h1>

      {/* Zoom link yuklash */}
      <div className="qabul-box">
        <h2>Zoom linkini yuklang</h2>
        <div className="zoom-link">
          <div className="zoom-link-card">
            <h2>Yo'nalish</h2>
            <input type="text" placeholder="Yonalish" />
          </div>

          <div className="zoom-link-card">
            <h2>Fan</h2>
            <input type="text" placeholder="Fan" />
          </div>

          <div className="zoom-link-card">
            <h2>Online Havola</h2>
            <input type="text" placeholder="Havola" />
          </div>

          <div className="zoom-link-card">
            <h2>Xona Raqami</h2>
            <input type="text" placeholder="Xona raqami" />
          </div>

          <div className="zoom-link-card">
            <h2>Qo'shimcha Izoh</h2>
            <input type="text" placeholder="Izoh" />
          </div>
        </div>
        <button>Saqlash</button>
      </div>

      {/* Joylangan linklar */}
      <div className="zoom-link-post">
        <h2>Zoom orqali joylangan linklar</h2>
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

export default Zoomlink;
