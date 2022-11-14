import React, { Fragment, useContext } from 'react'
import { GlobalContext } from '../../Store/Contexts/GlobalContext';

interface IInformationProps {

}
function Information(props: IInformationProps) {

    const globalCtx = useContext(GlobalContext)

    return (
        <Fragment>
            <p>Information</p>
        </Fragment>
    )
}

export default Information