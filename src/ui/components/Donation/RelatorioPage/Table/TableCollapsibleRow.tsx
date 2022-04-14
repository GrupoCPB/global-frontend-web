import { useState } from 'react';
import { TableRow, TableCell, IconButton, Collapse, Table, TableBody, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export function createDataCollapsibleRow(
    rowTitle: string,
    valor: string,
    history?: Array<{ valor: string, empresa: string }>,
    qtd_itens?: string
) {
    return {
        rowTitle,
        valor,
        history,
        qtd_itens
    };
}

export default function TableCollapsibleRow(props: { row: ReturnType<typeof createDataCollapsibleRow>, className?:string }) {
    const { row, className } = props;
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow className={`table-row ${className ? className : ''}`}>
                <TableCell component="th" className='table-cell th'>
                    <span>
                        {row.rowTitle}
                    </span>

                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        sx={{ 
                            marginLeft: '10px', 
                            opacity: `${row.history ? '1' : '0'}`, 
                            cursor: `${row.history ? 'pointer' : 'auto'}` 
                        }}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>


                </TableCell>

                {
                    row.qtd_itens ?
                        <TableCell className='table-cell qtd'>
                            {
                                row.valor.charAt(0) === '-' ?
                                    <span className='negative-value'>{row.qtd_itens}</span>
                                    :
                                    <span className='positive-value'>{row.qtd_itens}</span>
                            }
                        </TableCell>
                        :
                        <TableCell className='table-cell' />
                }

                <TableCell className='table-cell last'>
                    {
                        row.valor.charAt(0) === '-' ?
                            <span className='negative-value'>{row.valor}</span>
                            :
                            <span className='positive-value'>{row.valor}</span>
                    }
                </TableCell>
            </TableRow>

            {
                row.history ?
                    <TableRow>
                        <TableCell className='table-cell' colSpan={6} >
                            <Collapse in={open} timeout="auto" unmountOnExit>

                                <Table size="small" aria-label="table" className='intern-table'>
                                    <TableBody>

                                        {
                                            row.history ?
                                                row.history.map((el) => (
                                                    <TableRow key={Math.random() * 1000} className='table-row intern' >
                                                        <TableCell className='table-cell intern' component="th" scope="row">
                                                            {el.empresa}
                                                        </TableCell>
                                                        <TableCell className='table-cell intern last'>
                                                            {
                                                                row.valor.charAt(0) === '-' ?
                                                                    <span className='negative-value'>- R$ {(Number(el.valor).toFixed(2)).replace('.', ',')}</span>
                                                                    :
                                                                    <span className='positive-value'>R$ {(Number(el.valor).toFixed(2)).replace('.', ',')}</span>
                                                            }
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                                :
                                                null
                                        }

                                    </TableBody>
                                </Table>

                            </Collapse>
                        </TableCell>
                    </TableRow>

                    :

                    null
            }
        </>
    );
}