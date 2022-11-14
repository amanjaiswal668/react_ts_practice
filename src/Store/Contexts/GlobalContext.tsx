import { createContext, ReactNode, useState } from 'react';

interface IGlobalContextProps {
    children?: React.ReactNode
    notificationHandler: (message: string, status: boolean) => void
    toastMessage: { message: string, status: boolean }

}
export const GlobalContext = createContext<IGlobalContextProps>({

    notificationHandler: () => { },
    toastMessage: { message: "", status: false }
})

const GlobalContextProvider = (props: IGlobalContextProps) => {

    const [toastMessage, setToastMessage] = useState<{ message: string, status: boolean }>({ message: "", status: false });

    const notificationHandler = (message: string, status: boolean) => {
        setToastMessage({ message, status });
    }

    const globalContext: IGlobalContextProps = {
        notificationHandler: notificationHandler,
        toastMessage: toastMessage
    }

    return <>

        <GlobalContext.Provider value={globalContext}>
            {props.children}
        </GlobalContext.Provider>
    </>
}

export default GlobalContextProvider; 