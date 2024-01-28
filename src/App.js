import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
const Main = React.lazy(() => import('./pages/Main'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));


function App() {
  return (
    <div className='App'>
         <Suspense>
            <Routes>
              <Route path='/Login' element={<Login/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/main/*' element={<Main/>}></Route>
              <Route path='/' element={<Login/>}></Route>
              </Routes>
         </Suspense>
    </div>
  );
}

export default App;
