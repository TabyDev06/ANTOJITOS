import Chicken from "../../assets/Menu/Chicken.png";
import Extras from "../../assets/Menu/Extras.png";
import Drinks from "../../assets/Menu/Drinks.png";
import Dessert from "../../assets/Menu/Dessert.png";

function CategoryBar({ activeCategory, setActiveCategory }) {

    const categories = [
        { name: "Pollos", img: Chicken, alt: "Pollo a la Brasa" },
        { name: "Extras", img: Extras, alt: "Extras" },
        { name: "Bebidas", img: Drinks, alt: "Bebidas" },
        { name: "Postres", img: Dessert, alt: "Postres" }
    ];

    const categoriesCard = "size-30 w-full cursor-pointer hover:scale-110 duration-300";

    return (
        <>
            <div className="flex">
                <div className="flex flex-col justify-start gap-6">
                    {categories.map((cat) => (
                        <div className="px-10" key={cat.name}>
                            <img
                                src={cat.img}
                                alt={cat.alt}
                                className={`${categoriesCard} ${activeCategory === cat.name ? "border-2 border-orange-500 rounded-lg" : ""}`}
                                onClick={() => setActiveCategory(cat.name)}
                            />
                        </div>
                    ))}
                </div>

                {/* VERTICAL LINE */}
                <div>
                    <div className="border-l-2 border-[#4c4c4c] h-full"></div>
                </div>
            </div>
        </>
    )
}

export default CategoryBar;
