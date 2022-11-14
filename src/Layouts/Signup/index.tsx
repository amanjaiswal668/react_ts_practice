import React, { Fragment } from 'react'
import Authentication from '../../components/Authentication'

interface ISignupProps {

}


function Signup(props: ISignupProps) {


    const SignupUser = async (email: string, password: string) => {

        console.log("email : -> " + email);
        console.log("password : -> " + password);
        return;
    }

    const authenticate = async (token: string) => {
        console.log("token --> " + token)
    }

    return (
        <Fragment>
            <Authentication onSubmit={SignupUser}
                dynamicText='New user? Signup'
                forgotPasswordText='Forgot password'
                authenticate={authenticate} />
                <p>M here</p>
        </Fragment>
    )
}

export default Signup