import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Hiragana from './components/Hiragana/Hiragana';
import Katakana from './components/Katakana/Katakana';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/hiragana" element={<Hiragana />} />
                        <Route path="/katakana" element={<Katakana />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
