import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

interface TableProps<T> {
    data: T[];
    columns: string[];
}

function CustomTable<T extends object>({ data, columns }: TableProps<T>) {

    function objectKeys<T extends {} | any>() {
        return Object.keys(data[0]) as unknown as keyof T
    }
    const column: (keyof TableProps<T>)[] = objectKeys();
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <StyledTableRow>
                        {
                            columns.map((columnData, index) => {
                                return (

                                    <StyledTableCell key={index} align="center">{columnData}</StyledTableCell>
                                )
                            })
                        }
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((row: any) => (
                            <StyledTableRow key={row.name}>
                                {
                                    column.map((v: any) => {
                                        console.log(v)
                                        return <StyledTableCell align="center">{row[v]}</StyledTableCell>
                                    })
                                }
                            </StyledTableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomTable;
