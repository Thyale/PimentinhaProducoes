export default function SobreMim() {
    return (
      <section className="bg-VermelhoEscuro px-3 py-10 text-Branco font-FontTexts">
        <div className="flex Tablet:flex-col items-center w-11/12 m-auto justify-center">
          <img src="ImgPessoal.jpg" className="w-full max-w-sm Tablet:max-w-xs Mobile:max-w-full rounded-md mb-4 Tablet:mb-0"/>
          <div className="w-full p-3 max-w-3xl mt-3 Tablet:mt-6">
            <div className="pl-4 border-l border-CinzaClaro">
              <h1 className="font-bold text-2xl text-Branco">SOBRE MIM</h1>
              <p className="text-xs">Saiba mais sobre alexandre pimentinha</p>
            </div>
            <p className="text-xs mt-4 text-CinzaClaro">
              Brasileiro, casado, natural de Recife/PE, nascido 13/05/1966. Diplomado pela UFPE em Administração de Empresas com passagem pelos Cursos de Engenharia Química (UFPE) e Agronomia (UFRPE).
            </p>
            <div>
              <h2 className="font-FonteTitles font-bold mt-4 text-Branco">Vida Profissional:</h2>
              <p className="text-xs mt-2 text-CinzaClaro">
                Após trabalhar e estagiar em diferentes Empresas Nacionais e Multinacionais, incluindo Banco do Brasil, CEF, Cia Cervejaria Brahma, Encyclopaedia Brittanica do Brasil, Nestlé, entre outras, no ano de 1995, rescindiu contrato com a Nestlé para ser Empreendedor na Área de Fotografia e Filmagem de Eventos. Fundou a Pimentinha Produções para atuar na Área Infantil e a Pimenta Produções para a Área Social e Empresarial.
              </p>
            </div>
            <div>
              <h2 className="font-FonteTitles font-bold mt-4 text-Branco">Nossa Meta:</h2>
              <p className="text-xs mt-2 text-CinzaClaro">
                Procurar satisfazer as expectativas dos nossos clientes oferecendo, sempre que possível, um serviço Personalizado, Inovador e com um Alto Padrão de Qualidade. Sabemos que O TEMPO NÃO VOLTA, assim como os momentos, por isso a necessidade e obrigação de não haver erros.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  