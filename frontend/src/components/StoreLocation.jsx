import map from '../assets/icons/Map Pin.svg'
function StoreLocation() {
    return ( 
        <div className="w-screen left-0 absolute flex justify-between text-xs px-16 py-2 font-light text-secondary bg-secondary1">
            <span className='flex gap-2 items-center'>
                <img className='h-4' src={map} alt='loading'/>
                <a href='/contact'>street 368 Toul Kork Phnom Penh, Cambodia</a>
            </span>
            <div>
                <span><a href='/auth/signup'>Sign up</a> / <a href='/auth/login'>Log in</a></span>
            </div>
        </div>
     );
}

export default StoreLocation;