import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";
import FullCard from "./components/fullCard/FullCard"

function App() {
  
  return (
    <>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/full-card" element={<FullCard/>} />
      </Routes>
    </>
  );
}

export default App;
