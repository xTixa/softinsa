import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import AdminDashboard from '../pages/AdminDashboard';
import FormadorPage from '../pages/Formador';
import FormandoPage from '../pages/Formando';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/formador" element={<FormadorPage />} />
        <Route path="/formando" element={<FormandoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
