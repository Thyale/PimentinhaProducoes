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
                        <img loading="lazy" className="shadow-lg" src="PraiaAbcImg.png" alt="Imagem de sessão de fotos na praia" />
                        <h1 className="font-aboreto text-2xl mt-3">FOTOS NA PRAIA</h1>
                        <a target="_blank" className="block w-full bg-Amarelo font-aboreto hover:bg-hoverAmarelo mt-3 text-Branco rounded-md text-center py-1" href="https://youtu.be/1guQOSwTC9Q?si=OeDCd2N26a6114du">Assistir Vídeo</a>
                    </div>
                    <div id="FotosAbc" className="w-full max-w-96">
                        <img loading="lazy" className="shadow-lg" src="BecaAbcImg.png" alt="Imagem de sessão de fotos com beca" />
                        <h1 className="font-aboreto text-2xl mt-3">FOTOS DE BECA</h1>
                        <a className="bg-Verde font-aboreto block w-full hover:bg-hoverVerde mt-3 text-white rounded-md text-center py-1" target="_blanck" href="https://www.instagram.com/reel/DAPVGoCOI7x/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Assistir Vídeo</a>
                    </div>
                    <div id="FotosAbc" className="w-full max-w-96">
                        <img loading="lazy" className="shadow-lg" src="FormaturaAbcImg.jpg" alt="Imagem de sessão de fotos da festa de formatura" />
                        <h1 className="font-aboreto text-2xl mt-3">FESTA DE FORMATURA</h1>
                        <a className="bg-Salmao block font-aboreto hover:bg-hoverSalmao w-full mt-3 py-1 text-center text-white rounded-md" target="_blanck" href="https://www.facebook.com/100001988834996/videos/430622826325666/">Assistir Vídeo</a>
                    </div>
                </div>
            </div>
        </section>
    )
}