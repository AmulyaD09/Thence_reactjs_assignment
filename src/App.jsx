import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import RegistrationPage from './pages/RegistrationPage';
import SuccessPage from './pages/SuccessPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/success" element={<SuccessPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
