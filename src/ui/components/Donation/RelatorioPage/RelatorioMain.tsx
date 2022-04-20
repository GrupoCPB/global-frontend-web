import { StyledMainRelatorioWrapper } from "../../../../styles/donation/RelatorioMainPage.styles";
import { Container, Box, Button } from '@material-ui/core';
import RelatorioTextInput from "../../Inputs/RelatorioTextInput";
import CheckboxInput from "../../Inputs/Checkbox";
import DateInput from "../../Inputs/DateInput";
import SecondaryBanner from "../SecondaryBanner";
import MetasDoarArea from "./MetasDoarAreaButtons";
import Table from './Table/Table';
import TableCollapsibleRow from './Table/TableCollapsibleRow';
import { createDataCollapsibleRow } from './Table/TableCollapsibleRow';
import { useState, useEffect } from "react";

export default function Relatorio() {
    const [state, setState] = useState({
        tableData: {
            entrada: [],
            saida: [],
            totalArrecadado: 0,
            totalUtilizado: 0
        }
    })

    function getDateInterval() {
        const months = [
            ['Janeiro', '01'],
            ['Fevereiro', '02'],
            ['Março', '03'],
            ['Abril', '04'],
            ['Maio', '05'],
            ['Junho', '06'],
            ['Julho', '07'],
            ['Agosto', '08'],
            ['Setembro', '09'],
            ['Outubro', '10'],
            ['Novembro', '11'],
            ['Dezembro', '12']
        ];

        function replaceMonth(writtenMonth: String) {
            return months.find(el => el[0] === writtenMonth)[1]
        }

        let initialDateInputsValues = Array.from(document.querySelectorAll('.relatorio-section-1-data-inicial-div input')).map((el: HTMLInputElement) => el.value);
        let finalDateInputsValues = Array.from(document.querySelectorAll('.relatorio-section-1-data-final-div input')).map((el: HTMLInputElement) => el.value);

        initialDateInputsValues.reverse()
        finalDateInputsValues.reverse()

        initialDateInputsValues[1] = replaceMonth(initialDateInputsValues[1])
        finalDateInputsValues[1] = replaceMonth(finalDateInputsValues[1])

        initialDateInputsValues[2].length === 1 ? initialDateInputsValues[2] = '0' + initialDateInputsValues[2] : false
        finalDateInputsValues[2].length === 1 ? finalDateInputsValues[2] = '0' + finalDateInputsValues[2] : false

        return [initialDateInputsValues.join('-'), finalDateInputsValues.join('-')]
    }

    async function getTableData() {
        let [dataInicio, dataFim] = getDateInterval();

        let body = {
            dataInicio,
            dataFim
        }

        let stringifiedBody = JSON.stringify(body)

        const data = await fetch(
            'https://grupocpb.org/api/transparenciaByDate',
            {
                method: 'POST',
                body: stringifiedBody,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => res.json());

        let [totalEntrada, totalSaida] = [0, 0];

        data.forEach(el => {
            el.operacao === 'entrada' ? totalEntrada += Number(el.valor) : totalSaida += Number(el.valor)
        })

        const entrada = data.filter(el => el.operacao === 'entrada');

        const saida = data.filter(el => el.operacao === 'saida');

        setState({
            tableData: {
                entrada: entrada,
                saida: saida,
                totalArrecadado: totalEntrada,
                totalUtilizado: totalSaida
            }
        })
    }

    useEffect(() => {
        getTableData()
    }, [])


    return (
        <StyledMainRelatorioWrapper>
            <SecondaryBanner titulo='Transparência' hrefAttr='/donation_images/banner2_image.png' />

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
                            <DateInput type='Mês' defaultValue='Dezembro' />
                            <DateInput type='Ano' />
                        </div>
                    </div>

                    <div className='p-div'>
                        <p>Valor</p>
                    </div>
                </Box>

                <Table>
                    {
                        <>
                            <TableCollapsibleRow
                                row={
                                    createDataCollapsibleRow(
                                        'Total arrecado em  dinheiro',
                                        'R$ ' + Number(state.tableData.totalArrecadado).toFixed(2).toString().replace('.', ','),
                                        [...state.tableData.entrada]
                                    )
                                }
                            />

                            <TableCollapsibleRow
                                row={
                                    createDataCollapsibleRow(
                                        'Total utilizado em dinheiro',
                                        '- R$ ' + Number(state.tableData.totalUtilizado).toFixed(2).toString().replace('.', ','),
                                        [...state.tableData.saida]
                                    )
                                }
                            />

                            <TableCollapsibleRow
                                row={
                                    createDataCollapsibleRow(
                                        'Total de rendimentos',
                                        'R$ ' + (state.tableData.totalArrecadado - state.tableData.totalUtilizado).toFixed(2).toString().replace('.', ',')
                                    )
                                }
                            />

                            <TableCollapsibleRow
                                row={
                                    createDataCollapsibleRow(
                                        'Saldo disponível em dinheiro',
                                        'R$ ' + '13.505,00'
                                    )
                                }
                            />
                        </>
                    }
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
                            createDataCollapsibleRow('Total arrecado em itens', 'R$  16.275,00', [], '2.596'),
                            createDataCollapsibleRow('Total utilizado de itens', 'R$  2.596,00', [{ valor: 'aaa', empresa: '33' }, { valor: 'aaa2', empresa: '332' }], '256'),
                            createDataCollapsibleRow('Total de disponível de Itens', 'R$  13.505,00', [{ valor: 'aaa', empresa: '33' }, { valor: 'aaa2', empresa: '332' }], '2.340'),
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
                            createDataCollapsibleRow('Doação para a ONG Pais afetivos', '+ R$  13.000,00', [], ''),
                            createDataCollapsibleRow('BR02340345 Doação Anônima', '+ R$  20,00', [], ''),
                            createDataCollapsibleRow('Doação Empresa Carrefour', '+ R$  1.200,00', [], ''),
                            createDataCollapsibleRow('BR0046 Doação Maria Aparecida Silveira', '+ R$  55,00', [], ''),
                            createDataCollapsibleRow('Doação  Empresa Fleurity', '+ R$  2.000,00', [], ''),
                            createDataCollapsibleRow('BR1245 Doação Anônima', '+ R$  1.200,00', [], ''),
                            createDataCollapsibleRow('BR1245 Doação de Alimento Angela Maria Medeiros', '+ R$  20,00', [], '1'),
                            createDataCollapsibleRow('Doação Empresa Carrefour', '+ R$  1.200,00', [], '100'),
                            createDataCollapsibleRow('BR1245 Doação Anônima', '+ R$  20,00', [], '5'),
                            createDataCollapsibleRow('Doação Empresa Carrefour', '+ R$  1.200,00', [], ''),
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