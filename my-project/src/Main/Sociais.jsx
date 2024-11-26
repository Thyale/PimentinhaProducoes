export default function Sociais(){
    return(
        <section id="sociais" className="bg-Cinza p-6">
            <div className="w-11/12 m-auto Mobile:w-full">
                <div className="w-11/12 max-w-4xl">
                <h1 className="border-l-2 border-black p-2 mb-1 text-xl font-aboreto">EVENTOS SOCIAIS</h1>
                <a className="font-aboreto text-sm" target="_blank" href="https://www.youtube.com/watch?v=_NnLcYEHo-M">ASSISTIR VÍDEO DE CASAMENTO</a>
                </div>
                <div className="flex flex-row flex-wrap w-full mt-6 gap-5 justify-center">
                <div className="w-full max-w-lg flex flex-col items-center gap-2">
                    <img className="shadow-lg" src="/ImgIlustrativa.png" alt="Imagem de sessão de fotos na praia" />
                    <h1 className="text-xl font-aboreto font-semibold">CASAMENTO</h1>
                    <p className="font-aboreto text-sm text-center">Capture a emoção e a beleza do seu grande dia com nossas fotos de casamento. Cada momento, desde o "sim" até a celebração, será registrado com carinho e cuidado, criando memórias eternas desse dia único.</p>
                    <a className="font-aboreto text-sm text-CinzaEscuro" href="">Acesse o portfólio</a>
                </div>
                <div className="w-full max-w-lg flex flex-col items-center gap-2">
                    <img className="shadow-lg" src="/ImgIlustrativa.png" alt="Imagem de sessão de fotos na praia" />
                    <h1 className="text-xl font-aboreto font-semibold">BODAS</h1>
                    <p className="font-aboreto text-sm text-center">Celebre seu amor e conquistas com uma sessão de fotos especial de bodas. Eternize cada sorriso e gesto de carinho, transformando anos de história em lembranças inesquecíveis.</p>
                    <a className="font-aboreto text-sm text-CinzaEscuro" href="">Acesse o portfólio</a>
                </div>
                </div>
            </div>
        </section>
    )
}