import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import { styled } from '@material-ui/core';

const TableWrapper = styled('div')`
    .table-row {
        background-color: #F0F0F0;
        display: grid;
        grid-template-columns: 75% 10% 15%;
        padding: 10px;
        margin-bottom: 7px;

        &.intern {
            background-color: white;
            margin-bottom: 0;
            display: grid;
            grid-template-columns: 85% 15%;
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
            place-items: center end;
        }
        
        &.intern {
            width: 100%;
            padding: 0;
        }

        &.qtd {
            display: grid;
            place-items: center start;
        }

        .negative-value, .positive-value {
            font-size: 18px;
            font-weight: 600;
        }

        .negative-value {
            color: #E84141;
        }

        .positive-value {
            color: #2DC52A;
        }
    }
    
    .intern-table {
        padding: 0;
    }

`


export default function CollapsibleTable({children}) {
    return (
        <TableWrapper>
            <Table aria-label="collapsible table">
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </TableWrapper>
    );
}