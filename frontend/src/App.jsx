import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home'
import Navbar from './components/Navbar';

const Contact = ()=>{return(<div>Hello contact</div>)}

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
    </Router>
  )
}

export default App
