import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardContainer from './CardContainer.jsx';
import Navbar from './Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import Blog from './pages/Blog.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourites' element={<Favorites/>}/>
        <Route path='/blogs' element={<Blog/>}/>
    </Routes>
     {/* 
     <CardContainer/> */}
    </BrowserRouter>

);
