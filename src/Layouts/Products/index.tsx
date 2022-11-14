import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CustomTable from '../../components/CustomTable';

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

function Product() {
    const header = ["Dessert", "Calories", "Fat", "Carbs", "Protein"]
    return (
        <>
            {/* <CustomTable data={[{
                key: header,
                name: "Product",
                age: 12
            }]}
                columns={header} key={'name'} /> */}
            <CustomTable
                header={["Dessert", "Calories", "Fat", "Carbs", "Protein"]}
                data={[{
                    name: "Product",
                    calories: 12,
                    fat: 22,
                    carbs: 11,
                    protein: 4
                }]} 
                onClickView={(name: string) => {
                    console.log(name)
                }} 
                />


        </>
    );
}

export default Product;
