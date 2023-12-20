import truck from '../assets/icons/icon-delivery.svg';
import shield from '../assets/icons/shield-tick.svg';
import customer from '../assets/icons/Icon-Customer service.svg'

function Service() {
    const services = [
        {
            title:'FREE AND FAST DELIVERY',
            desc:'Free delivery for all orders over 150$',
            icon:truck
        },
        {
            title:'24/7 CUSTOMER SERVICE',
            desc:'Friendly 24/7 customer support',
            icon:customer
        },
        {
            title:'MONEY BACK GUARANTEE',
            desc:'Warranty for up to 30 days',
            icon:shield
        }
    ]
    return ( 
        <div className="justify-center flex gap-24">
            {services.map((i,index)=>(
                <div className="flex flex-col gap-3 items-center" key={index}>
                    <div className='bg-text1 p-3 rounded-full'>
                        <div className='bg-text2 p-2 rounded-full'>
                            <img src={i.icon}/>
                        </div>
                    </div>
                    <p className="text-[16px] font-semibold">{i.title}</p>
                    <p className="text-sm font-normal">{i.desc}</p>
                </div>
            ))}
        </div>
     );
}

export default Service;