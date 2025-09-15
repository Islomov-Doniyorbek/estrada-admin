import { Table } from 'antd';
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const UserOwnStudent = () => {
const handleDelete = (key) => {
  console.log('O‘chirilayotgan element:', key);
};


    const dataSource = [
    {
      key: '1',
      name: 'Abdusamatov Azamat',
      faculty: 'Professional ta’lim: vokal, 4-kurs talabasi',
      phone: '90 674 83 53',
    },
    {
      key: '2',
      name: 'Abdusamatov Azamat',
      faculty: 'Professional ta’lim: vokal, 4-kurs talabasi',
      phone: '90 674 83 53',
    },
    {
      key: '3',
      name: 'Abdusamatov Azamat',
      faculty: 'Professional ta’lim: vokal, 4-kurs talabasi',
      phone: '90 674 83 53',
    }, {
      key: '4',
      name: 'Abdusamatov Azamat',
      faculty: 'Professional ta’lim: vokal, 4-kurs talabasi',
      phone: '90 674 83 53',
    }, {
      key: '5',
      name: 'Abdusamatov Azamat',
      faculty: 'Professional ta’lim: vokal, 4-kurs talabasi',
      phone: '90 674 83 53',
    },

    {
      key: '5',
      name: 'Abdusamatov Azamat',
      faculty: 'Professional ta’lim: vokal, 4-kurs talabasi',
      phone: '90 674 83 53',
    },
    
  ];

  const columns = [
    {
      title: '№',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Ismi va Familiyasi',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Fakulteti va Kursi',
      dataIndex: 'faculty',
      key: 'faculty',
    },
    {
      title: 'Telefon raqami',
      dataIndex: 'phone',
      key: 'phone',
    },    {
    title: "O'chirish",
    key: 'delete',
    render: (_, record) => (
        <p className='own-delete-box'>
      <FaTrashAlt
        style={{ color: 'red', cursor: 'pointer',}}
        onClick={() => handleDelete(record.key)}
        className='own-student-delete'
      />
      </p>
    ),
  },
  ];
  return (
    <div className='own-student'>
         <div className='own_media_top'>
<h2>Talabalar bo'limi</h2>
  </div>
  
        <Table className='student_table' dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default UserOwnStudent
