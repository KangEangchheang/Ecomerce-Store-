import './App.css'
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className='m-auto flex flex-col max-w-screen-2xl grow'>
        <Navbar></Navbar>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
