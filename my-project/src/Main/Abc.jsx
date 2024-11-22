export default function Abc(){
    return(
        <section className="bg-Cinza p-6">
            <div className="w-11/12 max-w-4xl">
                <h1 className="border-l-2 border-black p-2 mb-3 text-xl font-aboreto">FORMATURA DE ABC</h1>
                <p className="font-aboreto mb-3 text-sm">Oferecemos sessões descontraídas na praia com a família, fotos de beca em cenários sofisticados como uma mesa elegante e uma biblioteca inspiradora, e a cobertura completa do evento de ABC. </p>
                <p className="font-aclonica">Deixe-nos eternizar cada momento especial com a precisão e emoção que eles merecem!</p>
            </div>
            <div className="flex flex-row items-center flex-wrap w-full justify-around mt-6 gap-3">
                <div className="w-full max-w-96">
                    <img className="shadow-lg" src="/ImgIlustrativa.png" alt="Imagem de sessão de fotos na praia" />
                    <div>
                       <h1 className="font-aboreto text-2xl mt-3">FOTOS NA PRAIA</h1>
                       <a className="text-white bg-Amarelo px-2" href="">Acesse o portfólio</a>
                    </div>
                    <button className="bg-Amarelo hover:bg-hoverAmarelo w-full mt-3 py-1 text-Branco rounded-md"><a target="_blanck" href="https://www.instagram.com/reel/C_L-qltpKZy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Assistir Vídeo</a></button>
                </div>
                <div className="w-full max-w-96">
                    <img className="shadow-lg" src="/ImgIlustrativa.png" alt="Imagem de sessão de fotos com beca" />
                    <div>
                       <h1 className="font-aboreto text-2xl mt-3">FOTOS DE BECA</h1>
                       <a className="text-white px-2 bg-Verde" href="">Acesse o portfólio</a>
                    </div>
                    <button className="bg-Verde hover:bg-hoverVerde w-full mt-3 py-1 text-white rounded-md"><a target="_blanck" href="https://www.instagram.com/reel/DAPVGoCOI7x/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Assistir Vídeo</a></button>
                </div>
                <div className="w-full max-w-96">
                    <img className="shadow-lg" src="/ImgIlustrativa.png" alt="Imagem de sessão de fotos da festa de formatura" />
                    <div>
                       <h1 className="font-aboreto text-2xl mt-3">FESTA DE FORMATURA</h1>
                       <a className="text-white px-2 bg-Salmao" href="">Acesse o portfólio</a>
                    </div>
                    <button className="bg-Salmao hover:bg-hoverSalmao w-full mt-3 py-1 text-white rounded-md"><a target="_blanck" href="https://www.facebook.com/100001988834996/videos/430622826325666/">Assistir Vídeo</a></button>
                </div>
            </div>
        </section>
    )
}