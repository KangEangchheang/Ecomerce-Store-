function Btn(prop) {
    return ( 
        <div className=" flex justify-center">
            <button className="text-sm font-medium text-secondary1 border-solid border-2 border-secondary1 rounded px-6 py-2">{prop.text}</button>
        </div>
     );
}

export default Btn;