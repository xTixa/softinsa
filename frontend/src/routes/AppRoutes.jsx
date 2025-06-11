import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import FormadorPage from '../pages/Formador/DashboardFormador';
import FormandoPage from '../pages/Formando/DashboardFormando';
import AdminGestaoFormandos from '../pages/Admin/OpFormando/AdminGestaoFormandos';
import AdicionarFormando from '../pages/Admin/OpFormando/AddFormando';
import EditarFormando from '../pages/Admin/OpFormando/EditarFormando';
import GestaoCursos from '../pages/Admin/OpCursos/GestaoCursos';
import AdicionarCurso from '../pages/Admin/OpCursos/AddCurso';
import AdminGestaoFormadores from '../pages/Admin/OpFormador/AdminGestaoFormador';
import TestesComponentes from '../pages/dev/testeComponentes';
import PerfilAdmin from '../pages/Admin/perfilAdmin';
import PerfilFormador from '../pages/Formador/perfilFormador';
import PerfilFormando from '../pages/Formando/perfilFormando';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/perfil/:id" element={<PerfilAdmin />} />
        <Route path="/admin/formandos" element={<AdminGestaoFormandos />} />
        <Route path="/admin/formandos/novo" element={<AdicionarFormando />} />
        <Route path="/admin/formandos/editar/:id_utilizador/:id_formando" element={<EditarFormando />} />
        <Route path="/admin/cursos" element={<GestaoCursos />} />
        <Route path="/admin/cursos/adicionar" element={<AdicionarCurso />} />
        <Route path="/admin/formadores" element={<AdminGestaoFormadores />} />


        <Route path="/formador" element={<FormadorPage />} />
        <Route path="/formador/perfil/:id" element={<PerfilFormador />} />


        <Route path="/formando" element={<FormandoPage />} />
        <Route path="/formando/perfil" element={<PerfilFormando />} />


        <Route path="/dev" element={<TestesComponentes />} />
      </Routes>
    </BrowserRouter>
  );
}
