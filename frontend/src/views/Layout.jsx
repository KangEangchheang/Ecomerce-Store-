import StoreLocation from "../components/StoreLocation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Outlet} from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <StoreLocation/>
      <Navbar></Navbar>
      <main className='m-auto flex flex-col max-w-screen-2xl grow'> 
        <Outlet/>
        <Footer></Footer>
      </main>
    </>
  )
}


export default Layout;