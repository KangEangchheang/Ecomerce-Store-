function Category() {
    return (  
        <div className="flex items-center flex-col gap-1 h-72 mx-24 text-2xl text-primary">
            <div className="w-full flex flex-wrap gap-1 grow">
                <div className="flex grow bg-slate-400 basis-10 justify-center items-end p-2 shadow-sm inset-1">
                    <p className="drop-shadow-sm">Keyboard</p>
                </div>
                <div className="flex grow bg-slate-400 basis-10 justify-center items-end p-2 shadow-sm inset-1">
                    <p className="drop-shadow-sm">Mouse</p>
                </div>
                <div className="flex grow bg-slate-400 basis-10 justify-center items-end p-2 shadow-sm inset-1">
                    <p className="drop-shadow-sm">Headphone</p>
                </div>
                <div className="flex grow bg-slate-400 basis-10 justify-center items-end p-2 shadow-sm inset-1">
                    <p className="drop-shadow-sm">Monitor</p>
                </div>
            </div>
            <div className="w-3/4 flex flex-wrap gap-1 grow">
                <div className="flex grow basis-10 bg-slate-400 justify-center items-end p-2 shadow-sm inset-1">
                    <p className="drop-shadow-sm">Chair</p>
                </div>
                <div className="flex grow bg-slate-400 basis-10 justify-center items-end p-2 shadow-sm inset-1">
                    <p className="drop-shadow-sm">Microphone</p>
                </div>
                <div className="flex grow bg-slate-400 basis-10 justify-center items-end p-2 shadow-sm inset-1">
                    <p className="drop-shadow-sm">Tablet</p>
                </div>
                <div className="flex grow bg-slate-400 basis-10 justify-center items-end p-2 shadow-sm inset-1">
                    <p className="drop-shadow-sm">Book</p>
                </div>
            </div>
        </div>
    );
}

export default Category;