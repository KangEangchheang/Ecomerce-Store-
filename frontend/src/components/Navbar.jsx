
import { Link, useLocation } from "react-router-dom"

export default function Navbar(){
    const location = useLocation(); //get the param of current url locaiton
    return(
        <nav className="flex justify-between mt-10 items-end px-16">
            <div className="flex gap-40">
                <h1 className="text-xl font-semibold font-serif">iFour</h1>
                <div className="flex gap-10">
                    <Link to="/" className={location.pathname === '/'? 'underline': null}>Home</Link>
                    <Link to="/contact" className={location.pathname === '/contact'? 'underline': null}>Contact</Link>
                    <p>About</p>
                </div>
            </div>
            <div>
                <input className="text-xs text-text1 py-2 px-3 w-72 outline-none border-primary1 border-solid border-2 rounded-[5px]" placeholder="what are you looking for?"/>
            </div>
        </nav>
    )
}