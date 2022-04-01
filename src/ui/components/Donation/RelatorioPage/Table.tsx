import * as React from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function createData(
    name: string,
    calories: number,
) {
    return {
        name,
        calories,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <TableRow sx={{ background: '#F0F0F0' }}>
                <TableCell component="th" scope="row" sx={{ padding: '10px' }}>
                    Nome da organização

                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        sx={{ marginLeft: '10px' }}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>

                </TableCell>


                <TableCell width={'100px'}>
                    Valor
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell style={{ paddingBottom: '4px', paddingTop: 0, border: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box>
                            <Table size="small" aria-label="">
                                <TableBody>
                                    {row.history.map((el) => (
                                        <TableRow key={Math.random() * 1000} >
                                            <TableCell component="th" scope="row" sx={{border: 0, margin: 0, padding: '6px 0'}}>
                                                Nome
                                            </TableCell>
                                            <TableCell sx={{border: 0, margin: 0, padding: 0}} width={'100px'}>
                                                Valor
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

const rows = [
    createData('Frozen yoghurt', 159),
    createData('Ice cream sandwich', 237),
    createData('Eclair', 262),
    createData('Cupcake', 305),
    createData('Gingerbread', 200)
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={'div'}>
            <Table aria-label="collapsible table">
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}