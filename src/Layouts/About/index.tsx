import React, { Fragment, useContext } from 'react'
import CustomTable from '../../components/CustomTable';
import { GlobalContext } from '../../Store/Contexts/GlobalContext';

interface IAboutProps {

}
function About(props: IAboutProps) {

    const globalCtx = useContext(GlobalContext)
    return (
        <Fragment>
            <h1 style={{ marginTop: "100px", marginLeft: "100px" }}>About</h1>
            {/* <CustomTable
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
            /> */}
        </Fragment>
    )
}

export default About