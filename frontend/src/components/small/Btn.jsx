import { useState } from "react";

function Btn(prop) {
    const [ishover,sethover] = useState(false);
    function handleHoverEnter(){
        sethover(true);
    }
    function handleHoverLeave(){
        sethover(false);
    }
    // variable to set custom style
    const btnstyle = {
        color:ishover? '#F5F5F5': '#1E293B',
        transition: 'all 0.6s ease',
    }
    const btnstyleBefore = {
        height: ishover? '380%':'0%',
        transform: 'translate(-50%,-50%)',
        transition: 'all 0.6s ease',

    }
    return ( 
        <div className=" flex justify-center">
            <button className="text-sm font-medium border-solid border-2 border-secondary1 rounded px-6 py-2 relative overflow-clip" style={btnstyle} 
            onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>{prop.text}
                <div className="w-full z-[-1] bg-secondary1 absolute top-1/2 left-1/2" style={btnstyleBefore}></div>
            </button>
            
        </div>
     );
}

export default Btn;