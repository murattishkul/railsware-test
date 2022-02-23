import {Route, Routes, BrowserRouter} from 'react-router-dom';
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
          <Route path="*" element={<div>df</div>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
