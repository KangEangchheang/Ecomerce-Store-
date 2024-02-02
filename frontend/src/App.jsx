import './App.css'
import {Route, Routes } from 'react-router-dom';
import Home from './views/Home'
import ProductList from './views/ProductList';
import NotFound from './views/NotFound';
import ProductDetail from './views/ProductDetail';
import User from './views/User';
import Contact from './views/Contact';
import About from './views/About';
import Login from './views/Login';
import Register from './views/Register';
import { Authorization } from './components/Auth/Authorization';
import Layout from './views/Layout';
import PersistAuth from './components/Auth/PersistAuth';

function App() {
  // all of this routes should in main.jsx but its too late now and im lazy
  return (
    <Routes>
      <Route Component={PersistAuth}>
        <Route path='/' exact Component={Layout}>
            {/* public route */}
            <Route path='/' exact Component={Home}/>
            <Route path='/contact' Component={Contact}/>
            <Route path='/about' Component={About}/>
            <Route path='/auth/login' Component={Login}/>
            <Route path='/auth/signup' Component={Register}/>
            <Route path='/products' Component={ProductList}/>
            <Route path='/product/:productid' Component={ProductDetail}/>
            <Route path='/products/:categoryid' Component={ProductList}/> 
            <Route path='/feature' Component={ProductList}/>

            {/* private for user route
                using nested routes so it will go through the first 
                route first then it will load the next one therefor 
                we able to create a protected route */}
          
            <Route Component={Authorization}>
              <Route path='/user/' Component={User}/>
              <Route path='/user/cart' Component={User}/>
            </Route>
        </Route>

        {/* catch all routes that isnt define */}
        <Route path='*' Component={NotFound}/>
      </Route>
    </Routes>
  )
}

export default App;


