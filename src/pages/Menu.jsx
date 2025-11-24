import { useState } from "react";
import CategoryBar from "../components/Menu/CategoryBar";
import FoodCard from "../components/Menu/FoodCard";
import data from "../data/menu.json";

function Menu() {
    const [activeCategory, setActiveCategory] = useState("Pollos");

    const filteredData = data.filter(item => item.category === activeCategory);

    return (
        <div className="w-full flex">
            {/* CATEGORY BAR */}
            <div className="w-1/6 items-center h-screen justify-center pt-40">
                <CategoryBar
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
            </div>

            {/* FOOD CARDS */}
            <div className="flex flex-wrap justify-around w-full pt-45 gap-15 px-5">
                {filteredData.map((item, i) => (
                    <FoodCard
                        key={i}
                        name={item.name}
                        description={item.description}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
    );
}

export default Menu;
