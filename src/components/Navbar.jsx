import Logo from '../../public/Logo_Navbar.png'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

    const location = useLocation();

    const links = [
        { name: "Inicio", path: "/" },
        { name: "Menú", path: "/menu" },
        { name: "Acerca de", path: "/about" },
        { name: "Contacto", path: "/contact" },
    ];

    return (
        <div className='py-[2vh] fixed z-20 w-full bg-[#191919]'>
            <div className='flex justify-between items-center mx-20'>
                <img src={Logo} alt="Logo Antojitos" className='w-[30vh]' />

                <ul className='flex justify-around w-[90vh] text-white'>
                    {links.map(link => {
                        const isActive = location.pathname === link.path;

                        return (
                            <li
                                key={link.name}
                                className="cursor-pointer select-none text-lg relative group"
                            >
                                <Link to={link.path}>
                                    {link.name}
                                </Link>

                                <span
                                    className={`
                                        absolute left-0 -bottom-1 h-0.5 w-full 
                                        bg-white rounded-full transition-all duration-300 
                                        ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"}
                                    `}
                                ></span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
