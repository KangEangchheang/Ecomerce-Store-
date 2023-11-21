function Card(bg) {
    return (  
        <div className="w-full flex flex-wrap gap-2" style={{background: bg}}>
            <div>keyboard</div>
            <div>mouse</div>
            <div>headphone</div>
            <div>monitor</div>
            <div>microphone</div>
        </div>
    );
}

export default Card;