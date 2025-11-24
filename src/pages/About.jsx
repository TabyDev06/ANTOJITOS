function About() {
    const info = [
        {
            title: "Nuestra Historia",
            text: "Antojitos nació con un propósito: ofrecer comida peruana auténtica, con sabores que recuerdan a casa. Desde nuestros inicios, hemos cuidado cada detalle para mantener viva la esencia de nuestra cultura culinaria."
        },
        {
            title: "Misión",
            text: "Brindar experiencias gastronómicas memorables, utilizando ingredientes frescos y técnicas tradicionales, combinadas con un servicio cálido y cercano."
        },
        {
            title: "Visión",
            text: "Ser reconocidos como uno de los restaurantes más queridos de la ciudad, destacando por nuestro sabor, innovación y compromiso con nuestros clientes."
        },
        {
            title: "Valores",
            text: "Pasión en cada plato, honestidad, respeto por nuestras raíces, calidad constante y un trato humano que hace sentir a cada cliente como en casa."
        }
    ];

    return (
        <div className="w-full min-h-screen bg-[#191919] text-white pt-[15vh] px-10 flex flex-col items-center">

            {/* TÍTULO */}
            <h1 className="text-5xl font-extrabold mb-12 text-center tracking-wide">
                Conoce la Esencia de <span className="text-orange-500">Antojitos</span>
            </h1>


            {/* GRID DE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">

                {info.map((item, i) => (
                    <div
                        key={i}
                        className="
                            bg-[#222222] p-8 rounded-2xl shadow-xl border border-[#2e2e2e]
                            hover:scale-[1.03] hover:border-orange-500 transition-all duration-300 cursor-pointer
                        "
                    >
                        <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {item.text}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default About;
