import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import Login from "Pages/Login";
import ForgotPassword from 'Pages/ForgotPassword'
import Upgrade from 'Pages/Upgrade';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="upgrade" element={<Upgrade />} />
          <Route exact path='/' element={<Navigate replace to="/login" />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
