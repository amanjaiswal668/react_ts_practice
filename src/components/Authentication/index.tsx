import React, { Fragment, useRef, useState } from 'react'
import IImageUploaderProps from '../ImageUploader/index';

interface IAuthenticationProps {

    onSubmit: (email: string, password: string) => Promise<any>
    dynamicText: string
    forgotPasswordText: string
    authenticate: (token: string) => Promise<any>

}

function Authentication(props: IAuthenticationProps) {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    // Create
    const authenticate = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await props.onSubmit(emailRef.current!.value, passwordRef.current!.value);
        console.log("response --> " + response)
        // response.hasOwnProperty("token") && props.authenticate(response["token"]);
    }

    return (
        <Fragment>
            <label htmlFor='name'>Email</label>
            <input type="email" ref={emailRef} name="email" />
            <br />
            <label htmlFor='password'>Password</label>
            <input type="email" ref={passwordRef} name="password" />
            <br />
            <button type="submit" onClick={authenticate}>Submit</button>
            <p>{props.forgotPasswordText}</p>
        </Fragment>
    )
}

export default Authentication