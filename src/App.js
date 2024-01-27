import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import './App.css'

function App() {
  return (
    <div className='App'>
          <Routes>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/' element={<Main/>}></Route>
          </Routes>
    </div>
  );
}

export default App;
