import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link,Outlet } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import DisplayAllItems from './Components/DisplayAllItems';
import AddNewItem from './Components/AddNewItem';
import UpdateItem from './Components/UpdateItem';
import DeleteItem from './Components/DeleteItem';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
 <>
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Pizza Store</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/items">All Items</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">Add Item</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delete">Delete Item</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/items" element={<DisplayAllItems/>} />
        <Route path="/add" element={<AddNewItem/>} />
        <Route path="/update/:id" element={<UpdateItem/>} />
        <Route path="/delete" element={<DeleteItem/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
  
    </div>
  </Router>
  <Outlet/>
 </>
  
);

export default App;
