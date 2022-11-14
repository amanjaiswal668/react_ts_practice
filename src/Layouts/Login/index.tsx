import { resolve } from 'path';
import React, { Fragment } from 'react'
import Authentication from '../../components/Authentication'

interface ILoginProps {

}


function Login(props: ILoginProps) {


    const loginUser = async (email: string, password: string) : Promise<{}> => {

        console.log("email : -> " + email);
        console.log("password : -> " + password);
        return new Promise<any>(resolve => resolve({ "token": "success" }));
    }

    const authenticate = async (token: string) => {
        console.log("token --> " + token)
    }

    return (
        <Fragment>
            <Authentication onSubmit={loginUser}
                dynamicText='New user? Signup'
                forgotPasswordText='Forgot password'
                authenticate={authenticate} />
        </Fragment>
    )
}

export default Login