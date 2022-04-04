import { useState } from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { styled } from '@material-ui/core';

function createData(
    nome_instituicao: string,
    valor: string,
) {
    return {
        nome_instituicao,
        valor,
        history: [
            {
                nome_instituicao2: 'qualquer',
                valor2: '1000'
            },
            {
                nome_instituicao2: 'qualquer',
                valor2: '2000'
            },
        ],
    };
}

const TableWrapper = styled('div')`
    .table-row {
        background-color: #F0F0F0;
        display: grid;
        grid-template-columns: 80% 20%;
        padding: 10px;
        margin-bottom: 7px;

        &.intern {
            background-color: white;
            margin-bottom: 0;
        }
    }

    .table-cell.th{
        font-size: 18px;
        font-weight: 600;
    }

    .table-cell {
        padding: 0;
        border-bottom: 0;
        
        &.last {
            display: grid;
            place-items: center;
        }
        
        &.intern {
            width: 100%;
            padding: 0;
        }
    }
    
    .intern-table {
        padding: 0;
    }

`

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow className='table-row'>
                <TableCell component="th" className='table-cell th'>
                    <span>
                        {row.nome_instituicao}
                    </span>

                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        sx={{ marginLeft: '10px' }}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>

                </TableCell>


                <TableCell className='table-cell last'>
                    {row.valor}
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell className='table-cell' colSpan={6} >
                    <Collapse in={open} timeout="auto" unmountOnExit sx={{ width: '100% !important' }}>

                        <Table size="small" aria-label="table" className='intern-table'>
                            <TableBody>
                                {row.history.map((el) => (
                                    <TableRow key={Math.random() * 1000} className='table-row intern' >
                                        <TableCell className='table-cell intern' component="th" scope="row">
                                            {el.nome_instituicao2}
                                        </TableCell>
                                        <TableCell className='table-cell intern last'>
                                            {el.valor2}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

const rows = [
    createData('Total arrecado em  dinheiro', 'R$ 13.505,00'),
    createData('Total utilizado em dinheiro', '-R$ 2.770,00'),
    createData('Total de rendimentos', 'R$ 9.250,00'),
    createData('Saldo disponível em dinheiro', 'R$ 13.505,00'),
];

export default function CollapsibleTable() {
    return (
        <TableWrapper>
            <Table aria-label="collapsible table">
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.nome_instituicao} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableWrapper>
    );
}