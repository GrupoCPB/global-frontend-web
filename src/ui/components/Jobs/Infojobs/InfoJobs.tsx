import {
    InfoArea,
    ButtonInfo,
    HeaderInfo,
    MoreInfo
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
        </InfoArea>
    )
}

export default InfoJobs