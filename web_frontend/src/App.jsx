import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Departments from './pages/Department';
import DoctorList from './pages/DoctorList';
import Logout from './pages/Logout';
import MLAssistant from './pages/MLAssistant'; 
import ProtectedRoute from './components/ProtectedRoute';
import { app } from './firebase';

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/doctor-list" element={<DoctorList />} />
            <Route path="/ml-assistant" element={ <ProtectedRoute><MLAssistant /></ProtectedRoute>}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
