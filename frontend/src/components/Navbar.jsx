
import { Link, useLocation } from "react-router-dom"

export default function Navbar(){
    const location = useLocation(); //get the param of current url locaiton
    return(
        <nav className="flex justify-between mt-10">
            <div className="flex gap-40">
                <img src="" alt="iFour"></img>
                <div className="flex gap-5">
                    <Link to="/" className={location.pathname === '/'? 'underline': null}>Home</Link>
                    <Link to="/contact" className={location.pathname === '/contact'? 'underline': null}>Contact</Link>
                    <p>About</p>
                </div>
            </div>
            <div>
                <input className="text-sm py-1 px-2 w-64 outline-none border-primary1 border-solid border-[1px] rounded-sm" placeholder="what are you looking for?"/>
            </div>
        </nav>
    )
}