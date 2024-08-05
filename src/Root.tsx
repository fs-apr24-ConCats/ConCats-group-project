import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { App } from './App';
import { HomePage } from './modules/HomePage/HomePage';

export const Root: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    </Router>
)