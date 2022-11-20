import * as React from 'react';
import CustomTable from '../../components/CustomTable';
// import {VisibilityIcon} from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';
import FormDialog from '../../components/CustomModal';
import { useState } from 'react';

function Product() {
    const header = ["Dessert", "Calories", "Fat", "Carbs", "view", "edit", "delete"];
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [currentId, setCurrentId] = useState(-1);
    const done = (id: number) => {
        // event.preventDefault();
        console.log(id)
        setCurrentId(id);
        handleClickOpen();
        return 1 + 1;
    }
    const test = (id: number) => {
        console.log(id)
        setCurrentId(id);
        handleClickOpen();
        return 1 + 1;
    }

    const handleClickOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };
    return (
        <>
            <CustomTable data={[{
                id: 1,
                Dessert: "Product",
                Calories: 12,
                Fat: 22,
                Carbs: 11

            }]}
                onClickView={(id: number) => test(id)}
                onClickEdit={() => { return console.log("Hello Product edit page"); }}
                onClickDelete={() => { return console.log("Hello Product delete page"); }}
                columns={header} >
                    
                </CustomTable>
            {
                openModal &&
                <FormDialog isSetOpen={openModal} isSetClose={handleClose} id={currentId}
                    onClick={(id:number) => done(id)} />
            }
        </>
    );
}

export default Product;
