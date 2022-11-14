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

interface ICustomTableProductProps {
    header: string[]
    data: [{
        [key: string]: React.ReactNode,
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number
    }]
    onClickView: (name: string) => void
}
interface ICustomTableUserProps<T> {
    header: string[]
    data: [{
        [key: string]: React.ReactNode,
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number
    }]
    onClickView: (name: string) => void
}
interface ColumnDefinitionType<T> {
    header: string[];
    // data: [{
    //     [key: string]: React.ReactNode,
    //     name: string,
    //     calories: number,
    //     fat: number,
    //     carbs: number,
    //     protein: number
    // }]
}

interface KeyProps {
    [key: string]: Record<string, any>
}

interface TableProps<T> {
    // key: keyof T
    // [key: string]: React.ReactNode;
    // data: Array<T>;
    data:T[];
    // columns: Array<ColumnDefinitionType<T, K>>;
    columns: string[];
}

// function CustomTable<T extends object, K extends keyof T>({data, columns}: TableProps<T>) {
function CustomTable<T extends object, K extends keyof T>({data, header}: ICustomTableUserProps<T>) {

    console.log(data);
    function objectKeys<T extends {} | any>() {
        return Object.keys(data[0]) as unknown as keyof T
    }
    // const column : [keyof KeyProps] = Object.keys(props.data[0]) as [keyof KeyProps];
    // const column : [keyof KeyProps] = Object.keys(props.data[0]) as [keyof KeyProps];
    const column: (keyof KeyProps)[] = objectKeys();
    console.log(column)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <StyledTableRow>
                        {
                            header.map((columnData, index) => {
                                return (

                                    <StyledTableCell align="center">{columnData}</StyledTableCell>
                                )
                            })
                        }
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((row) => (
                            <TableRow>
                                {
                                    column.map((v: string | number) => {
                                        console.log(v)
                                        return <StyledTableCell>{row[v]}</StyledTableCell>
                                        // return <StyledTableCell>ab</StyledTableCell>
                                    })
                                }
                            </TableRow>

                            // <StyledTableRow key={row.name}>
                            //     <StyledTableCell component="th" scope="row" align="center">
                            //         {row.name}
                            //     </StyledTableCell>
                            //     <StyledTableCell align="center">{row.calories}</StyledTableCell>
                            //     <StyledTableCell align="center">{row.fat}</StyledTableCell>
                            //     <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                            //     <StyledTableCell align="center">{row.protein}</StyledTableCell>
                            // </StyledTableRow>

                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomTable;
