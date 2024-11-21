import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className="font-aboreto p-3">
            <div className="flex flex-row items-center justify-between p-3 Mobile:flex-col">
                <div className="Mobile:w-full Mobile:p-2 Mobile:flex Mobile:items-center Mobile:gap-2 Mobile:justify-between">
                    <img className="w-96 Mobile:w-64 items-center" src="/Logo.jpg" alt="Logo do fotógrafo" />
                    <div onClick={toggleMenu} className="Mobile:text-3xl Mobile:flex Mobile:flex-row cursor-pointer hidden">
                        {!menuOpen ? (
                            <i className="fas fa-bars"></i>
                        ) : (
                            <i className="fas fa-times"></i>
                        )}
                    </div>
                </div>
                <ul className={`w-full flex flex-row justify-around Mobile:flex-col Mobile:items-center Mobile:pt-2 Mobile:pb-2 Mobile:gap-2 ${menuOpen ? 'Mobile:flex' : 'Mobile:hidden'}`}>
                    <li className="Mobile:StyleLinksBarra"><a href="">ABC</a></li>
                    <li className="Mobile:StyleLinksBarra"><a href="">FESTA INFANTIL</a></li>
                    <li className="Mobile:StyleLinksBarra"><a href="">15 ANOS</a></li>
                    <li className="Mobile:StyleLinksBarra"><a href="">GESTANTE</a></li>
                    <li className="Mobile:StyleLinksBarra"><a href="">CASAMENTOS</a></li>
                    <li className="Mobile:StyleLinksBarra"><a href="">BODAS</a></li>
                    <li className="Mobile:StyleLinksBarra"><a href="">EMPRESARIAIS</a></li>
                </ul>
            </div>
        </header>
    );
}
