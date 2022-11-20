import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';

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
    children ?: any,
    data: T[];
    columns: string[];
    onClickView?: (...args : any[]) => {} | void
    onClickEdit?: () => {} | void
    onClickDelete: (id: any) => any
}

function CustomTable<T extends object>({ data, columns, onClickView, onClickEdit, onClickDelete }: TableProps<T>) {

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
                        data.map((row: any, id) => (
                            // <StyledTableRow key={row.name} onClick = {() => row["view"](row["age"])}> 
                            <StyledTableRow key={row.name}> 
                                {
                                    columns.map((v: any, index: number) => {
                                        console.log(row[index])

                                        // return <StyledTableCell align="center">{row[v]}</StyledTableCell>

                                        if (columns[index] === "view") {
                                            // return <StyledTableCell align="center" onClick={onClickView(row["age"])}><VisibilityIcon/></StyledTableCell>
                                            return <StyledTableCell align="center" onClick={() => onClickView?.(row["id"])}><VisibilityIcon/></StyledTableCell>
                                        }
                                        else if (columns[index] === "edit") {
                                            return <StyledTableCell align="center" onClick={onClickEdit}>Edit</StyledTableCell>
                                        }
                                        else if (columns[index] === "delete") {
                                            return <StyledTableCell align="center" onClick={() => onClickDelete(row["id"])}>Delete</StyledTableCell>
                                        }
                                        else {
                                            return <StyledTableCell align="center">{row[v]}</StyledTableCell>

                                        }

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
