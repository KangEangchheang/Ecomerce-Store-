

function Btn(prop) {
    return ( 
        <div className=" flex justify-center">
            <p className="hover:bg-neutral-300 hover:text-primary1 bg-neutral-200 py-2 px-6 rounded-full font-medium text-secondary1 cursor-pointer w-fit">{prop.text}</p>
            
        </div>
     );
}

export default Btn;