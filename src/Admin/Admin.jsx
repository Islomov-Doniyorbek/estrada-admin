import { Routes, Route } from 'react-router-dom';
import AdminLog from './Komponents/AdminLog';
import AdminBox from './Komponents/AdminBox';

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLog />} />
      <Route path="Adminpanel/*" element={<AdminBox />} />
    </Routes>
  );
};

export default Admin;