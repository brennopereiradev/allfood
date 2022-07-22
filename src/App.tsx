import { Routes, Route } from 'react-router-dom';
import BaseAdmin from './paginas/Admin/BaseAdmin';
import AdminPratos from './paginas/Admin/Pratos/AdministracaoPratos';
import AdminRestaurantes from './paginas/Admin/Restaurantes/AdminRestaurantes';
import FormRestaurante from './paginas/Admin/Restaurantes/formRestaurante';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />


      <Route path='/admin' element={<BaseAdmin />}>
        <Route path="restaurantes" element={<AdminRestaurantes />} />
        <Route path="restaurantes/novo" element={<FormRestaurante />} />
        <Route path="restaurantes/:id" element={<FormRestaurante />} />

        <Route path="pratos" element={<AdminPratos />} />
      </Route>

    </Routes>
  );
}

export default App;
