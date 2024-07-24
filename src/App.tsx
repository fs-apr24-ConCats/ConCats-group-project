import React from 'react';
import './App.css';
import './style/main.scss';
import { Outlet } from 'react-router-dom';


export const App: React.FC = () => {
  return (
    <div className="App">
      <main className="main">
        <div className='container'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
