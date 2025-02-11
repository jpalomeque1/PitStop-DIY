import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import DIY from "./pages/DIY";
import Tools from "./pages/Tools";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <Header />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/diy" element={<DIY />} />
                    <Route path="/tools" element={<Tools />} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
