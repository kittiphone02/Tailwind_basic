import Footer from "./Components/Home/Footer";
import Navbar from "./Components/Home/Navbar";
import Index from "./Pages/Index";
import { Routes, Route,Navigate } from "react-router-dom";
export default function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/index" />} />
        <Route path="/Index" element={<Index/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
