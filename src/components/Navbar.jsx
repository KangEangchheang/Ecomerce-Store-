
export default function Navbar(){
    
    return(
        <nav className="flex justify-between mt-10 items-end px-16">
            <div className="flex gap-40">
                <h1 className="text-xl font-semibold font-serif">iFour</h1>
                <div className="flex gap-10">
                    
                </div>
            </div>
            <div>
                <input className="text-xs text-text1 py-2 px-3 w-72 outline-none border-primary1 border-solid border-[1px] rounded-[5px]" placeholder="what are you looking for?"/>
            </div>
        </nav>
    )
}