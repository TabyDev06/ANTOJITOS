function FoodCard({ name, description, img, }) {

    const classCard = ("cursor-pointer rounded-t-2xl w-70 h-35")
    return (
        <>
            <div className="flex flex-col justify-center items-center w-70 h-40 hover:scale-105 duration-500">
                <img src={img} alt="Pollo" className={classCard} />
                <div className="bg-[#262626] p-4 text-center select-none cursor-pointer">
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-gray-400 text-start">{description}</p>
                </div>
            </div>
        </>
    )
}

export default FoodCard;