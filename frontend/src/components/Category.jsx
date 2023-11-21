import CategoryCard from "./small/CategoryCard";

function Category() {
    return (  
        <div className="px-16">
            <div className="mb-4 text-center bg-secondary1 text-2xl tracking-[4.8px] text-secondary py-2 font-semibold rounded shadow-md">Categories</div>
                <div className="flex items-center flex-col gap-1 h-72 text-2xl text-primary w-full">
                <div className="w-full flex flex-wrap gap-1 grow">
                    <CategoryCard text="Keyboard"/>
                    <CategoryCard text="Mouse"/>
                    <CategoryCard text="Monitor"/>
                    <CategoryCard text="Laptop"/>
                </div>
                <div className="w-3/4 flex flex-wrap gap-1 grow">
                    <CategoryCard text="Table"/>
                    <CategoryCard text="Book"/>
                    <CategoryCard text="Course"/>
                    <CategoryCard text="Software"/>
                </div>
            </div>
        </div>
    );
}

export default Category;