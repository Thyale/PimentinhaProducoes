import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

export default function Abc(){

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom',  
          distance: '50px',    
          duration: 1000,    
          delay: 300, 
          reset: true 
        });
        sr.reveal('#FotosAbc');
    }, []);

    return(
        <section id="abc" className="bg-Cinza p-6">
            <div className="w-11/12 m-auto Mobile:w-full">
                <div className="w-11/12 max-w-4xl">
                <h1 className="border-l-2 border-black p-2 mb-3 text-xl font-aboreto">FORMATURA DE ABC</h1>
                <p className="font-aboreto mb-3 text-sm">Oferecemos sessões descontraídas na praia com a família, fotos de beca em cenários sofisticados como uma mesa elegante e uma biblioteca inspiradora, e a cobertura completa do evento de ABC. </p>
                <p className="font-aclonica">Deixe-nos eternizar cada momento especial com a precisão e emoção que eles merecem!</p>
                </div>
                <div className="flex flex-row items-center flex-wrap w-full justify-around mt-6 gap-3">
                <div id="FotosAbc" className="w-full max-w-96">
                    <img className="shadow-lg" src="/ImgIlustrativa.png" alt="Imagem de sessão de fotos na praia" />
                    <div>
                       <h1 className="font-aboreto text-2xl mt-3">FOTOS NA PRAIA</h1>
                       <a className="text-white bg-Amarelo px-2 font-aboreto text-sm" href="">Acesse o portfólio</a>
                    </div>
                    <button className="bg-Amarelo font-aboreto hover:bg-hoverAmarelo w-full mt-3 py-1 text-Branco rounded-md"><a target="_blanck" href="https://www.instagram.com/reel/C_L-qltpKZy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Assistir Vídeo</a></button>
                </div>
                <div id="FotosAbc" className="w-full max-w-96">
                    <img className="shadow-lg" src="/ImgIlustrativa.png" alt="Imagem de sessão de fotos com beca" />
                    <div>
                       <h1 className="font-aboreto text-2xl mt-3">FOTOS DE BECA</h1>
                       <a className="text-white px-2 bg-Verde font-aboreto text-sm" href="">Acesse o portfólio</a>
                    </div>
                    <button className="bg-Verde font-aboreto hover:bg-hoverVerde w-full mt-3 py-1 text-white rounded-md"><a target="_blanck" href="https://www.instagram.com/reel/DAPVGoCOI7x/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Assistir Vídeo</a></button>
                </div>
                <div id="FotosAbc" className="w-full max-w-96">
                    <img className="shadow-lg" src="/ImgIlustrativa.png" alt="Imagem de sessão de fotos da festa de formatura" />
                    <div>
                       <h1 className="font-aboreto text-2xl mt-3">FESTA DE FORMATURA</h1>
                       <a className="text-white px-2 bg-Salmao font-aboreto text-sm" href="">Acesse o portfólio</a>
                    </div>
                    <button className="bg-Salmao font-aboreto hover:bg-hoverSalmao w-full mt-3 py-1 text-white rounded-md"><a target="_blanck" href="https://www.facebook.com/100001988834996/videos/430622826325666/">Assistir Vídeo</a></button>
                </div>
                </div>
            </div>
        </section>
    )
}