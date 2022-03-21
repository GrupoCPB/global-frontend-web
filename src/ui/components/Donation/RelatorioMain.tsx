import { StyledMainRelatorioWrapper } from "../../../styles/donation/RelatorioMainPage.styles";
import { Container, Box } from '@material-ui/core';
import BasicButton from "../Buttons/BasicButton";
import RelatorioTextInput from "../Inputs/RelatorioTextInput";
import CheckboxInput from "../Inputs/Checkbox";
import DateInput from "../Inputs/DateInput";
import Banner from "./banner";
import MetasDoarArea from "./MetasDoarAreaButtons";
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
        getDonationsData()
    }, [])

    return (
        <StyledMainRelatorioWrapper>
            <Box className='relatorio-section-1 section'>
                <Banner />
            </Box>

            <Container className='site-navigation-area'>
                <div className='navigation-path-div'>
                    <a>Página inicial</a>
                    <img src='/donation_images/path-arrow.png' />
                    <a>Transparência</a>
                </div>

                <BasicButton variant='text' text='Voltar' anyStartIcon={<img src='/donation_images/arrow-back.png' alt='voltar'/>} />
            </Container>

            <Container className='options-section'>
                <div className='otpions-text-div'>
                    <p>Acompanhe nossa transparência em <strong>tempo real</strong>, com tudo que entra e sai de doações.</p>
                </div>

                <div>
                    <MetasDoarArea />
                </div>
            </Container>

            <Container className='relatorio-section-2 section'>
                <h2>Relatório em Tempo Real</h2>

                <Box className='relatorio-section-2-first-box'>
                    <RelatorioTextInput />

                    <Box className='checkboxes-box'>
                        <CheckboxInput label='Doações' />
                        <CheckboxInput label='Pagamentos' />
                        <CheckboxInput label='Investimentos' />
                    </Box>
                </Box>

                <Box className='relatorio-section-2-second-box'>
                    <div>
                        <DateInput type='Data' />
                        <DateInput type='Mês' />
                        <DateInput type='Ano' />
                    </div>

                    <div>
                        <BasicButton text='Gerar PDF' variant='outlined' className='gerarPDF' anyStartIcon={<img src='/donation_images/download-icon.png' alt='download'></img>} />
                    </div>
                </Box>

                <Box className='relatorio-section-2-third-box'>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Total arrecadado:
                                </td>

                                <td className='table-value'>
                                    <span>R$ 16.275,00</span>
                                </td>
                            </tr>


                            <tr>
                                <td>
                                    Total de rendimentos:
                                </td>

                                <td className='table-value'>
                                    <span>R$ 9.250,00</span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Total utilizado:
                                </td>

                                <td className='table-value negative'>
                                    <span>-R$ 2.770,00</span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Saldo disponível:
                                </td>

                                <td className='table-value'>
                                    <span>R$ 13.505,00</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </Container>

            <Container className='relatorio-section-3'>
                <h2>Resumo das doações</h2>
                <table>
                    <tbody>
                        {/*Aqui falta fazer o map nas doações do state*/}
                        <tr>
                            <td>
                                Doação para a ONG Pais afetivos
                            </td>
                            <td>
                                + R$ 13.000,00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                0045 Doação Anônima
                            </td>
                            <td>
                                + R$ 20,00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Doação Empresa Carrefour
                            </td>
                            <td>
                                + R$ 1.200,00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                0046 Doação Maria Aparecida Silveira
                            </td>
                            <td>
                                + R$ 55,00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                0047 Doação  Empresa Fleurity
                            </td>
                            <td>
                                + R$ 2.000,00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Doação para a ONG Pais afetivos
                            </td>
                            <td>
                                + R$ 13.000,00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                0045 Doação Anônima
                            </td>
                            <td>
                                + R$ 20,00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Doação Empresa Carrefour
                            </td>
                            <td>
                                + R$ 1.200,00
                            </td>
                        </tr>
                    </tbody>
                </table>

                <BasicButton variant='outlined' text='Veja mais doações' className='mais-doacoes' />
            </Container>
        </StyledMainRelatorioWrapper>
    )
}