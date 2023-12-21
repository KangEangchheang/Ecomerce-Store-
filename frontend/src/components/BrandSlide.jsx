import { useState,useEffect } from "react";

function BrandSlide() {
    const [list,setList] = useState([]);
    useEffect(() => {
        // This will run after the component has mounted to webpage to avoid infinite loop
        return setList([
            'https://i.pinimg.com/originals/f1/47/2c/f1472cd9f017531ed6c575beeeabb368.png',
            'https://logos-world.net/wp-content/uploads/2020/11/MSI-Logo.png',
            'https://1000logos.net/wp-content/uploads/2021/04/HyperX-logo.png',
            'https://chatgptaihub.com/wp-content/uploads/2023/06/ChatGpt-logo-With-colour-Background-and-features-ChatGPT-Name.png',
            'https://cdn.cookielaw.org/logos/03fc55fe-0057-4b2f-817d-763e7ecdb316/ad0fee7c-eecb-4e6d-b90f-8b6ca3a1e95c/cisco-logo-transparent.png',
            'https://assets.razerzone.com/eeimages/banners/razer-logo-facebook-og.png',
            'https://1000logos.net/wp-content/uploads/2019/12/Mazda_Logo.png',
            'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/640px-Lamborghini_Logo.svg.png',
        ]);
    }, []);//empty array to make the setlist run only one time
    return ( 
        <div className="flex gap-24 items-center overflow-clip w-full my-8" style={{scrollbarWidth:'none'}}>
            {list.map((i,index)=>(
                <img key={index} src={i} className="h-16" />
            ))}
        </div>
     );
}

export default BrandSlide;