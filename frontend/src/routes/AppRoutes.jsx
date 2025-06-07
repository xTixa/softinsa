import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import AdminDashboard from '../pages/AdminDashboard';
import FormadorPage from '../pages/Formador';
import FormandoPage from '../pages/Formando';
import AdminGestaoFormandos from '../pages/AdminGestaoFormandos';
import AdicionarFormando from '../pages/AddFormando';
import EditarFormando from '../pages/EditarFormando';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/formandos" element={<AdminGestaoFormandos />} />
        <Route path="/admin/formandos/novo" element={<AdicionarFormando />} />
        <Route path="/admin/formandos/editar/:id_utilizador/:id_formando" element={<EditarFormando />} />
        <Route path="/formador" element={<FormadorPage />} />
        <Route path="/formando" element={<FormandoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
