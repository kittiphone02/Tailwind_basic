import Footer from "./Components/Home/Footer";
import Navbar from "./Components/Home/Navbar";
import HomePage from "./Pages/HomePage";
import { Routes, Route,Navigate } from "react-router-dom";
export default function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/HomePage" />} />
        <Route path="/HomePage" element={<HomePage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
