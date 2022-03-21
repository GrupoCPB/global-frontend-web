import { StyledDonationMainPageWrapper } from "../../../styles/donation/DonationMainPage.styles";
import Newsletter from "../Newsletter/Newsletter";


export default function Index() {
    return (
        <StyledDonationMainPageWrapper>
            <section className='banner_section'>
                <div>
                    <h1>Faça sua doação para a causa certa</h1>
                    <p>
                        Alugar e manter uma Casa que será a Sede das ONGs e Projetos Sociais da Fraternidade CPB em São Paulo/Centro ao lado do metrô da linha vermelha
                        ou verde com escritório e quartos de acolhimento emergencial.
                    </p>
                    <button>SEJA UM DOADOR</button>
                </div>
                <div>
                    <img src='./donation_images/banner_image.png' />
                </div>
            </section>

            <section className='empresas_section'>
                <h2>EMPRESAS QUE APOIAM ESTA ORGANIZAÇÃO</h2>
                <div className='apoiadores'>
                    <div>
                        <img src='./donation_images/uniflores.png' />
                    </div>

                    <div>
                        <img src='./donation_images/quatro_estrelas.png' />
                    </div>

                    <div>
                        <img src='./donation_images/curly.png' />
                    </div>

                    <div>
                        <img src='./donation_images/caligo.png' />
                    </div>
                </div>
            </section>


            <Newsletter />
        </StyledDonationMainPageWrapper>
    )
}