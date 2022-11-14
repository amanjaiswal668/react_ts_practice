import { createContext, ReactNode, useState } from 'react';

interface IAuthContextProps {
    children?: ReactNode
    login: (token: string) => Promise<any>
    logout: () => void
    token: string
}
export const AuthContext = createContext<IAuthContextProps>({
    login: async (token: string) => { },
    logout: () => { },
    token: ""
})

const AuthContextProvider = (props: IAuthContextProps) => {


    const initialToken = localStorage.getItem("token") || "";
    const [token, setToken] = useState<string>(initialToken);

    const loginHandler = async (token: string) => {
        setToken(token);
        localStorage.setItem("token", token);
    }

    const logoutHandler = () => {
        setToken("");
        localStorage.removeItem("token")
    }

    const authContext: IAuthContextProps = {
        login: loginHandler,
        logout: logoutHandler,
        token: token
    }

    return <>

        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    </>
}

export default AuthContextProvider; 