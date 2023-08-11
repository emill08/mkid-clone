import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TableProduct from './components/TableProduct';
import DashboardPage from './views/DashboardPage';
import CategoriesPage from './views/CategoriesPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <DashboardPage />
      <CategoriesPage />
      {/* <button className="btn">Hello daisyUI</button> */}
    </div>
  );
}

export default App;
