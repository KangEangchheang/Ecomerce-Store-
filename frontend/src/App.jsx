import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home'
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import ProductList from './views/ProductList';
import NotFound from './views/NotFound';
import ProductDetail from './views/ProductDetail';
import User from './views/User';
import StoreLocation from './components/StoreLocation';
import Contact from './views/Contact';
import About from './views/About';
import Login from './views/Login';
import Register from './views/Register';

function App() {
  return (
    <>
      <main className='m-auto flex flex-col max-w-screen-2xl grow'>
        <Router>
            <StoreLocation/>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' exact Component={Home}/>
              <Route path='/contact' Component={Contact}/>
              <Route path='/about' Component={About}/>
              <Route path='/auth/login' exact Component={Login}/>
              <Route path='/auth/signup' exact Component={Register}/>
              <Route path='/products' Component={ProductList}/>
              <Route path='/product/:productid' Component={ProductDetail}/>
              <Route path='/products/:categoryid' Component={ProductList}/> 
              <Route path='/feature' Component={ProductList}/>
              <Route path='/user/' Component={User}/>
              <Route path='/user/cart' Component={User}/>

              <Route path='*' Component={NotFound}/>
            </Routes>
        </Router>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
