import { StyledMainRelatorioWrapper } from "../../../../styles/donation/RelatorioMainPage.styles";
import { Container, Box, Button } from '@material-ui/core';
import RelatorioTextInput from "../../Inputs/RelatorioTextInput";
import CheckboxInput from "../../Inputs/Checkbox";
import DateInput from "../../Inputs/DateInput";
import Banner from "../SecondaryBanner";
import MetasDoarArea from "./MetasDoarAreaButtons";
import Table from './Table';
import { useState, useEffect } from "react";

export default function Relatorio() {
    const [state, setState] = useState({
        donationsData: []
    })

    async function getDonationsData() {
        const data = await fetch('https://grupocpb.org/api/transparencia').then(res => res.json())

        const dataModified = data.map(el => {
            let newValue = Number.parseFloat(el.valor).toFixed(2);

            newValue = '+ R$ ' + newValue.toString().replace(/\./, ',');

            el.valor = newValue;

            return el
        })

        setState({
            donationsData: dataModified
        })
    }

    useEffect(() => {
        (getDonationsData())
    }, [])

    return (
        <StyledMainRelatorioWrapper>
            <div className='relatorio-section-1'>
                <Banner />
            </div>


            <Container className='site-navigation-area'>
                <div className='navigation-path-div'>
                    <a>Página inicial</a>
                    <img src='/donation_images/path-arrow.png' />
                    <a>Transparência</a>
                </div>

                <Button
                    variant='text'
                    startIcon={<img src='/donation_images/arrow-back.png' alt='voltar' />}
                >
                    Voltar
                </Button>
            </Container>

            <Container className='options-section'>
                <div className='otpions-text-div'>
                    <p>Acompanhe nossa transparência em <strong>tempo real</strong>, com tudo que entra e sai de doações.</p>
                </div>

                <div>
                    <MetasDoarArea />
                </div>
            </Container>

            <Container className='relatorio-section-2'>
                <h2>Relatório em Tempo Real</h2>

                <Box className='relatorio-section-2-first-box'>
                    <RelatorioTextInput />

                    <Box className='checkboxes-box'>
                        <CheckboxInput label='Doações' />
                        <CheckboxInput label='Pagamentos' />
                        <CheckboxInput label='Investimentos' />
                    </Box>

                    <Box className='PDF-button-box'>
                        <Button
                            variant='outlined'
                            className='gerarPDF'
                            startIcon={<img src='/donation_images/download-icon.png' alt='download'></img>}
                        >
                            Gerar PDF
                        </Button>
                    </Box>
                </Box>

                <Box className='relatorio-section-2-second-box'>
                    <div className='relatorio-section-2-data-inicial-div'>
                        <DateInput type='Data' />
                        <DateInput type='Mês' />
                        <DateInput type='Ano' />
                    </div>

                    <span>Até</span>

                    <div className='relatorio-section-2-data-final-div'>
                        <DateInput type='Data' />
                        <DateInput type='Mês' />
                        <DateInput type='Ano' />
                    </div>

                    <div className='p-div'>
                        <p>Valor</p>
                    </div>
                </Box>

                <Table/>
            </Container>

            <Container className='relatorio-section-3'>
                <h2>Resumo das doações</h2>
                

                <Button
                    variant='outlined'
                    className='mais-doacoes'
                >
                    Veja mais doações
                </Button>
            </Container>
        </StyledMainRelatorioWrapper>
    )
}