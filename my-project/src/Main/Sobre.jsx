import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Sobre(){

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'left',  
          distance: '30px',    
          duration: 1000,    
          delay: 100, 
          reset: true 
        });
        sr.reveal('#TextAbout');
    }, []);

    return(
        <section id="Sobre" className="bg-Vinho text-Branco">
          <div className=" w-11/12 m-auto flex flex-row justify-center items-center gap-5 pt-10 pb-10 Mobile:flex-col">
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="w-auto max-w-3xl">
                <img className="max-w-96 w-auto Mobile:p-3 shadow-lg" src="ImgPessoal.jpg" alt="Foto Alexandre pimentinha" />
            </motion.div>
            <div id='TextAbout' className="w-auto max-w-3xl flex flex-col gap-5">
                <div className="border-l-2 pl-3">
                    <h1 className="font-aboreto text-3xl">Sobre mim</h1>
                    <p className="font-aboreto text-xs text-Cinza">Saiba mais sobre alexandre pimentinha</p>
                </div>
                <p className="font-aboreto text-xs">Brasileiro, casado, natural de Recife/PE, nascido em 13/05/1966. Diplomado em Administração de Empresas pela UFPE, com passagem pelos cursos de Engenharia Química (UFPE) e Agronomia (UFRPE).</p>
                <div>
                    <h2 className="font-aclonica text-xl">Vida Profissional:</h2>
                    <p className="font-aboreto text-xs text-Cinza">Após trabalhar e estagiar em diferentes empresas nacionais e multinacionais, como Banco do Brasil, CEF, Cia Cervejaria Brahma, Encyclopaedia Britannica do Brasil, Nestlé Ind. e Com. Ltda, entre outras, em 1995, logo após diplomar-se em Administração de Empresas, rescindiu o contrato com a Nestlé para se tornar empreendedor na área de fotografia e filmagem de eventos. Fundou a Pimentinha Produções para atuar na área infantil e a Pimenta Produções para atuar na área social e empresarial.</p>
                </div>
                <div>
                    <h2 className="font-aclonica text-xl">Nossa Meta:</h2>
                    <p className="font-aboreto text-xs text-Cinza">Procuramos satisfazer as expectativas dos nossos clientes, oferecendo, sempre que possível, um serviço personalizado, inovador e com alto padrão de qualidade. Sabemos que o tempo não volta, assim como os momentos, daí a necessidade e obrigação de não permitir erros.</p>
                </div>
            </div>
          </div>
        </section>
    )
}