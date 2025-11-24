function Contact() {
    return (
        <div className="w-full h-screen bg-[#191919] text-white flex flex-col items-center justify-center px-6">

            {/* TÍTULO */}
            <div className="text-center mb-10">
                <h1 className="text-6xl font-extrabold tracking-wide drop-shadow-lg">
                    Contáctanos
                </h1>
                <p className="text-gray-400 mt-2 max-w-md mx-auto text-lg">
                    Estamos aquí para ayudarte en lo que necesites.
                </p>
            </div>

            {/* CONTENEDOR PRINCIPAL */}
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* FORMULARIO */}
                <div className="bg-[#1e1e1e] p-8 rounded-2xl border border-[#2e2e2e] shadow-[0_0_20px_#ff880022]">
                    <h2 className="text-2xl font-semibold mb-6">Escríbenos</h2>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="w-full p-3 bg-[#161616] border border-[#333] rounded-lg outline-none 
                                       focus:border-orange-500 focus:shadow-[0_0_10px_#ff8800]"
                        />

                        <input
                            type="email"
                            placeholder="Correo"
                            className="w-full p-3 bg-[#161616] border border-[#333] rounded-lg outline-none 
                                       focus:border-orange-500 focus:shadow-[0_0_10px_#ff8800]"
                        />

                        <textarea
                            rows="3"
                            placeholder="Mensaje"
                            className="w-full p-3 bg-[#161616] border border-[#333] rounded-lg outline-none 
                                       focus:border-orange-500 focus:shadow-[0_0_10px_#ff8800]"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full py-3 bg-orange-600 hover:bg-orange-700 rounded-lg text-white font-bold 
                                       transition-all duration-200 shadow-[0_4px_10px_#ff880033]"
                        >
                            Enviar
                        </button>
                    </form>
                </div>

                {/* INFORMACIÓN */}
                <div className="bg-[#1e1e1e] p-8 rounded-2xl border border-[#2e2e2e] shadow-[0_0_20px_#ff880022] flex flex-col justify-center">

                    <h2 className="text-2xl font-semibold mb-6">Información</h2>

                    <div className="space-y-4 text-gray-300 text-lg">

                        <p><span className="text-white font-semibold">📍 Dirección:</span> Lima, Perú</p>
                        <p><span className="text-white font-semibold">📞 Teléfono:</span> +51 987 654 321</p>
                        <p><span className="text-white font-semibold">✉️ Correo:</span> contacto@antojitos.pe</p>
                        <p><span className="text-white font-semibold">🕒 Horario:</span> 11am - 11pm</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
