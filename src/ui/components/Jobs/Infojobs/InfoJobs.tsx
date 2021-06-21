import {
    InfoArea,
    ButtonInfo,
    HeaderInfo,
    MoreInfo,
    DescriptionInfo
}from './InfoJobs.styles';

function InfoJobs() {
    return(
        <InfoArea>
            <HeaderInfo>
                <img src={'/img/jobs/logo.png'} alt="logo empresa..."/>
                <div className="info-header">
                    <h2>UI/UX DESIGN</h2>
                    <p>Grupo CPB</p>
                    <span>11 de junho de 2021</span>
                    <div>
                        <ButtonInfo>
                            Quero me Candidatar
                        </ButtonInfo>
                        <ButtonInfo>
                            Compartilhar
                        </ButtonInfo>
                    </div>
                </div>
            </HeaderInfo>
            <MoreInfo>
                <div className="left-side">
                    <h3>Vaga</h3>
                    <p>5 vagas</p>
                    <span>junior - Sênior</span>  
                </div>
                <div className="right-side">
                    <h3>ONG</h3>
                    <p>Sociedade</p>
                    <span>São Paulo, São Paulo. Brasil</span>
                </div>
            </MoreInfo>
            <DescriptionInfo>
               <h3>Descrição da Vaga</h3> 
               <div>
                   <span>O que esperamos de você</span>
                   <ul className="list">
                       <li>
                        Idear, planejar e executar demandas institucionais de UI/UX Design em ações de marketing;
                       </li>
                       <li>
                        Pesquisa e desenvolvimento de soluções de comunicação e experiência de Design;
                       </li>
                       <li>
                        Estudar, propor, definir e desenvolver landing pages, TYP e emails para ações, campanhas e lançamentos de materiais de marketing e participar da criação de ações estratégicas para campanhas desenvolvidas por terceiros alinhados com nossas marcas, submarcas, públicos, mídias e canais.
                       </li>
                       <li>
                        Desenvolver junto com o time peças de comunicação para Emails, banners para sites, etc.
                       </li>
                       <li>
                        Criação de modelos de Landing pages e thank you pages e páginas de live alinhando as propostas gráficas com experência para usuários.
                       </li>
                       <li>
                        Landing Pages, Thank You Pages e páginas de transmissão para Live Events de lançamentos de ações de marketing;
                       </li>
                   </ul>                   
                </div>
                <h3>Principais oportunidades de desenvolvimento</h3>
                <ul className="list">
                    <li>
                        O principal aprendizado como designer no Marketing da RD é o de projetar de forma ágil e com foco em metas de negócio. Essa vivência, não tão comum no mercado de trabalho, é muito importante para o profissional de design que busca uma carreira no setor de tecnologia.
                    </li>
                </ul>
            </DescriptionInfo>
        </InfoArea>
    )
}

export default InfoJobs