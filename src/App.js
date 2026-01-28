import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import Sub from './views/Sub';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path='/' element={<HomeView />} />
            <Route  path='/Sub' element={<Sub />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App



