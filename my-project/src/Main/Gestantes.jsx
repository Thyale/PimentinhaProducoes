import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

export default function Gestantes(){

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'left',  
          distance: '50px',    
          duration: 1000,    
          delay: 200, 
          reset: true 
        });
        sr.reveal('#TextGestante');
    }, []);

    return(
        <section id="gestante" className="bg-[url('/bg-Gestantes.png')] bg-cover bg-bottom p-6 flex flex-row justify-around flex-wrap Mobile:bg-left">
            <div id='TextGestante' className="w-96">
                <h1 className="border-l-2 border-black p-2 mb-3 text-xl font-aboreto">Gestantes</h1>
                <h2 className="font-aclonica text-xl">Eternize esse momento mágico</h2>
                <p className="mt-3 font-aboreto text-sm mb-2">Sessão de Fotos Gestante: Eternize Esse Momento Mágico
                A gravidez é um dos momentos mais especiais e transformadores da vida, e merece ser eternizado com toda a beleza que ela traz. Nossas sessões de fotos para gestantes capturam a essência desse período único, destacando a conexão entre mãe e bebê em cenários cuidadosamente planejados, seja ao ar livre ou em estúdio. Cada imagem reflete a emoção, o amor e a expectativa desse momento inesquecível. Reserve sua sessão e tenha lembranças eternas dessa fase tão especial!</p>
            </div>
            <div className="Mobile:mt-6">
                <img className='w-full max-w-3xl' src="FotoGestante.jpeg" alt="Imagem Ilustrativa de uma gestante" />
            </div>
        </section>
    )
}