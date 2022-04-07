import { StyledMainRelatorioWrapper } from "../../../../styles/donation/RelatorioMainPage.styles";
import { Container, Box, Button } from '@material-ui/core';
import RelatorioTextInput from "../../Inputs/RelatorioTextInput";
import CheckboxInput from "../../Inputs/Checkbox";
import DateInput from "../../Inputs/DateInput";
import Banner from "../SecondaryBanner";
import MetasDoarArea from "./MetasDoarAreaButtons";
import Table from './Table/Table';
import TableCollapsibleRow from './Table/TableCollapsibleRow';
import { createDataCollapsibleRow } from './Table/TableCollapsibleRow';
// import { useState, useEffect } from "react";

export default function Relatorio() {

    return (
        <StyledMainRelatorioWrapper>
            <div className='banner-holder'>
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

                <p>Acompanhe nossa transparência em <strong>tempo real</strong>, com tudo que entra e sai de doações.</p>

                <MetasDoarArea />

            </Container>

            <Container className='relatorio-section-1'>
                <h2>Relatório em Tempo Real</h2>

                <Box className='relatorio-section-1-first-box'>
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

                <Box className='relatorio-section-1-second-box'>
                    <div className='relatorio-datas-inputs'>
                        <div className='relatorio-section-1-data-inicial-div'>
                            <DateInput type='Data' />
                            <DateInput type='Mês' />
                            <DateInput type='Ano' />
                        </div>

                        <span>Até</span>

                        <div className='relatorio-section-1-data-final-div'>
                            <DateInput type='Data' />
                            <DateInput type='Mês' />
                            <DateInput type='Ano' />
                        </div>
                    </div>

                    <div className='p-div'>
                        <p>Valor</p>
                    </div>
                </Box>

                <Table>
                    {
                        [
                            createDataCollapsibleRow('Total arrecado em  dinheiro', 'R$ 13.505,00', [{ nome_instituicao2: 'aaa', valor2: '33' }, { nome_instituicao2: 'aaa2', valor2: '332' }]),
                            createDataCollapsibleRow('Total utilizado em dinheiro', '-R$ 2.770,00', [{ nome_instituicao2: 'aaa', valor2: '33' }]),
                            createDataCollapsibleRow('Total de rendimentos', 'R$ 9.250,00', [{ nome_instituicao2: 'aaa', valor2: '33' }]),
                            createDataCollapsibleRow('Saldo disponível em dinheiro', 'R$ 13.505,00', [{ nome_instituicao2: 'aaa', valor2: '33' }]),
                        ].map(el => {
                            return <TableCollapsibleRow row={el} key={Math.random() * 1000} />
                        })}
                </Table>
            </Container>

            <Container className='relatorio-section-2'>
                <div className='relatorio-section-2-table-header-div'>
                    <div className='relatorio-section-2-table-header-inner-div'>
                        <span>Itens</span>

                        <div>
                            <span>Qtd. Itens</span>
                            <span>Valor</span>
                        </div>
                    </div>
                </div>

                <Table>
                    {
                        [
                            createDataCollapsibleRow('Total arrecado em itens', 'R$ 16.275,00', [], '2.596'),
                            createDataCollapsibleRow('Total utilizado de itens', 'R$ 2.596,00', [{ nome_instituicao2: 'aaa', valor2: '33' }, { nome_instituicao2: 'aaa2', valor2: '332' }], '256'),
                            createDataCollapsibleRow('Total de disponível de Itens', 'R$ 13.505,00', [{ nome_instituicao2: 'aaa', valor2: '33' }, { nome_instituicao2: 'aaa2', valor2: '332' }], '2.340'),
                        ]
                            .map(el => <TableCollapsibleRow row={el} key={Math.random() * 1000} />)
                    }
                </Table>
            </Container>

            <Container className='relatorio-section-3'>
                <div className='relatorio-section-3-table-header-div'>
                    <div>
                        <h2>Detalhes do Relatório</h2>
                        <span>01 Julho 2021 a 31 Agosto 2021</span>
                    </div>

                    <div>
                        <span>Qtd. Itens</span>
                        <span>Valor</span>
                    </div>

                </div>

                <Table>
                    {
                        [
                            createDataCollapsibleRow('Doação para a ONG Pais afetivos', '+ R$ 13.000,00', [], ''),
                            createDataCollapsibleRow('BR02340345 Doação Anônima', '+ R$ 20,00', [], ''),
                            createDataCollapsibleRow('Doação Empresa Carrefour', '+ R$ 1.200,00', [], ''),
                            createDataCollapsibleRow('BR0046 Doação Maria Aparecida Silveira', '+ R$ 55,00', [], ''),
                            createDataCollapsibleRow('Doação  Empresa Fleurity', '+ R$ 2.000,00', [], ''),
                            createDataCollapsibleRow('BR1245 Doação Anônima', '+ R$ 1.200,00', [], ''),
                            createDataCollapsibleRow('BR1245 Doação de Alimento Angela Maria Medeiros', '+ R$ 20,00', [], '1'),
                            createDataCollapsibleRow('Doação Empresa Carrefour', '+ R$ 1.200,00', [], '100'),
                            createDataCollapsibleRow('BR1245 Doação Anônima', '+ R$ 20,00', [], '5'),
                            createDataCollapsibleRow('Doação Empresa Carrefour', '+ R$ 1.200,00', [], ''),
                        ]
                            .map(el => <TableCollapsibleRow row={el} key={Math.random() * 1000} />)
                    }
                </Table>
            </Container>

            <Button
                variant='outlined'
                className='mais-doacoes'
            >
                Veja mais doações
            </Button>
        </StyledMainRelatorioWrapper>
    )
}