import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import FormadorPage from '../pages/Formador/Formador';
import FormandoPage from '../pages/Formando/Formando';
import AdminGestaoFormandos from '../pages/Admin/OpFormando/AdminGestaoFormandos';
import AdicionarFormando from '../pages/Admin/OpFormando/AddFormando';
import EditarFormando from '../pages/Admin/OpFormando/EditarFormando';
import GestaoCursos from '../pages/Admin/OpCursos/GestaoCursos';
import AdicionarCurso from '../pages/Admin/OpCursos/AddCurso';
import AdminGestaoFormadores from '../pages/Admin/OpFormador/AdminGestaoFormador';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/formandos" element={<AdminGestaoFormandos />} />
        <Route path="/admin/formandos/novo" element={<AdicionarFormando />} />
        <Route path="/admin/formandos/editar/:id_utilizador/:id_formando" element={<EditarFormando />} />
        <Route path="/admin/cursos" element={<GestaoCursos />} />
        <Route path="/admin/cursos/adicionar" element={<AdicionarCurso />} />
        <Route path="/admin/formadores" element={<AdminGestaoFormadores />} />
        <Route path="/formador" element={<FormadorPage />} />
        <Route path="/formando" element={<FormandoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
