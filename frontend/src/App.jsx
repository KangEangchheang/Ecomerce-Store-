import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <div className="m-auto flex flex-col max-w-screen-2xl grow">
        <Navbar></Navbar>
        <Signup></Signup>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
