import React, { Fragment, useContext, useState } from 'react'
import { GlobalContext } from '../../Store/Contexts/GlobalContext';
import Login from '../Login';
import Signup from '../Signup';

interface ILandingProps {

}
function Landing(props: ILandingProps) {

    let loginText = "Login user"
    let signupText = "Signup user"

    const globalCtx = useContext(GlobalContext)
    const [view, setView] = useState(false);

    console.log(view)
    
    const onClickHandler = () => {
        setView(!view);
        globalCtx.notificationHandler("hello", true);
    }
    console.log(globalCtx.toastMessage.message)
    console.log(view)
    return (
        <Fragment>

            {
                view ? <Login /> : <Signup />
            }

            {
                <button onClick={onClickHandler}>{view ? loginText : signupText}</button>
            }



        </Fragment>
    )
}

export default Landing