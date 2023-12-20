import CategoryCard from "./small/CategoryCard";
import Btn from "./small/Btn";
import SectionTitle from "./small/SectionTitle";

function Category() {
    return (  
        <div>
            <SectionTitle text="Categories" isbg={true}/>
            <div className="flex items-center flex-col gap-1 h-72 text-2xl text-primary w-full mb-8">
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
            <Btn text="View all Categories" />
        </div>
    );
}

export default Category;