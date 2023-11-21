import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home'
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className='m-auto flex flex-col max-w-screen-2xl grow'>
        <Router>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' exact Component={Home}/>
              <Route path='/contact' Component={''}/>
            </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
