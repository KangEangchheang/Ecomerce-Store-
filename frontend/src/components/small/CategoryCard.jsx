function CategoryCard(text) {
    return (  
        <div className="flex grow bg-slate-400 basis-1 justify-center items-end p-2 shadow-sm inset-1 rounded">
            <p className="drop-shadow-sm">{text.text}</p>
        </div>
    );
}

export default CategoryCard;