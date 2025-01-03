export default function Empresariais(){
    return(
        <section id="empresas" className="p-6 bg-Vinho text-white">
            <div className="w-11/12 m-auto Mobile:w-full">
                <div className="w-11/12 max-w-4xl">
                <h1 className="border-l-2 border-white p-2 mb-3 text-xl font-aboreto">EMPRESARIAIS</h1>
                <p className="font-aboreto text-sm mt-2">Mostre o poder e a autenticidade do seu negócio com fotos e vídeos profissionais! Nossas sessões são perfeitas para empresárias que desejam destacar sua marca, fortalecer sua presença online e transmitir confiança. Deixe sua imagem refletir o sucesso que você construiu!</p>
                </div>
                <div className="mt-6 w-full">
               <iframe
                 height="615"
                 loading="lazy"
                 src="https://www.youtube.com/embed/QwMCU9fkEc4?si=VhO4cilI0VoJ2xev"
                 title="YouTube video player"
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 referrerPolicy="strict-origin-when-cross-origin"
                 allowFullScreen
                 className="rounded-lg w-full max-w-7xl Mobile:h-72 shadow-lg m-auto"
               ></iframe>
                </div>
            </div>
        </section>
    )
}