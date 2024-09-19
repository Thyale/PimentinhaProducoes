export default function Header(){
    return(
        <header className="bg-Branco flex flex-row items-center justify-between p-4 gap-3 font-FonteTitles Mobile:flex-col Tablet:flex-col">
            <img className="w-full max-w-80" src="Logo.jpg" alt="Imagem Logo pimentinha Produções" />
            <ul className="flex Mobile:flex-col Mobile:items-start Mobile:gap-3 Mobile:mt-5 flex-row items-center text-Black font-bold w-full justify-around Tablet:mt-5">
                <li><a className="hover:text-VermelhoEscuro" href="#">SOBRE MIM</a></li>
                <li><a className="hover:text-VermelhoEscuro" href="#">ABC</a></li>
                <li><a className="hover:text-VermelhoEscuro" href="#">FESTAS INFANTIS</a></li>
                <li><a className="hover:text-VermelhoEscuro" href="#">15 ANOS</a></li>
                <li><a className="hover:text-VermelhoEscuro" href="#">GRÁVIDAS</a></li>
                <li><a className="hover:text-VermelhoEscuro" href="#">EVENTOS SOCIAIS</a></li>
                <li><a className="hover:text-VermelhoEscuro" href="#">EMPRESARIAIS</a></li>
            </ul>
        </header>
    )
}