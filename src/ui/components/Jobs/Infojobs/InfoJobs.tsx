import {
    HeaderInfo,
    ButtonInfo
}from './InfoJobs.styles';

function InfoJobs() {
    return(
        <HeaderInfo>
            <img src="" alt=""/>
            <div className="info-area">
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
    )
}

export default InfoJobs