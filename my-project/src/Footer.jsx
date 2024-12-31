export default function Footer(){
    return(
        <footer className="flex flex-row justify-around p-3 Mobile:flex-col Mobile:items-start gap-2 Mobile:gap-4">
            <img className="w-72 h-32 self-center items-center Mobile:mb-5" src="Logo.jpg" alt="Logo do fotógrafo" />
            <div>
                <h1 className="font-aclonica font-xl">Redes Sociais</h1>
                <ul>
                    <li><a className="font-aboreto text-md hover:text-Vinho" target="_Blank" href="https://www.instagram.com/pimentinha_producoes/">Instagram</a></li>
                    <li><a className="font-aboreto text-md hover:text-Vinho" target="_Blank" href="https://www.facebook.com/pimentinhaproducoes">Facebook</a></li>
                    <li><a className="font-aboreto text-md hover:text-Vinho" target="_Blank" href="https://www.youtube.com/@pimentinhaproducoes5428">Youtube</a></li>
                </ul>
            </div>
            <div>
                <h1 className="font-aclonica font-xl">Serviços</h1>
                <ul>
                    <li><a className="font-aboreto text-md hover:text-Vinho" href="#abc">ABC</a></li>
                    <li><a className="font-aboreto text-md hover:text-Vinho" href="#festaInfantil">FESTA INFANTIL</a></li>
                    <li><a className="font-aboreto text-md hover:text-Vinho" href="#quinzeanos">15 ANOS</a></li>
                    <li><a className="font-aboreto text-md hover:text-Vinho" href="#gestante">GESTANTE</a></li>
                    <li><a className="font-aboreto text-md hover:text-Vinho" href="#sociais">CASAMENTOS</a></li>
                    <li><a className="font-aboreto text-md hover:text-Vinho" href="#sociais">BODAS</a></li>
                    <li><a className="font-aboreto text-md hover:text-Vinho" href="#empresas">EMPRESARIAIS</a></li>
                </ul>
            </div>
            <div>
                <h1 className="font-aclonica font-xl">Contato</h1>
                <ul>
                    <li><a className="font-aboreto text-md hover:text-Vinho" target="_Blank" href="mailto:aldantas13@gmail.com">Email</a></li>
                    <li><a className="font-aboreto text-md hover:text-Vinho" target="_Blank" href="https://wa.me/5581999641204?text=Olá,%20gostaria%20de%20mais%20informações!">WhatsApp</a></li>
                </ul>
            </div>
        </footer>
    )
}