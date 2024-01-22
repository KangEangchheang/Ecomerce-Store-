import map from '../assets/icons/Map Pin.svg'
function StoreLocation() {
    return ( 
        <div className="w-full flex justify-between text-xs px-16 py-2 font-light text-secondary bg-secondary1">
            <span className='flex gap-2 items-center'>
                <img className='h-4' src={map} alt='loading'/>
                street 368 Toul Kork Phnom Penh, Cambodia
            </span>
            <div>
                <p>Sign up / Log in</p>
            </div>
        </div>
     );
}

export default StoreLocation;