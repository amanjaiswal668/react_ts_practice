import { Outlet } from 'react-router-dom';
import './App.css';
import Screen from './Layouts/Screen';
import AuthContextProvider from './Store/Contexts/AuthenticationContext';
import GlobalContextProvider from './Store/Contexts/GlobalContext';

function App() {
  return (
    <AuthContextProvider login={function (token: string): Promise<any> {
      throw new Error('Function not implemented.');
    }} logout={function (): void {
      throw new Error('Function not implemented.');
    }} token={''}>

      <GlobalContextProvider notificationHandler={function (message: string, status: boolean): void {
        throw new Error('Function not implemented.');
      }} toastMessage={{
        message: '',
        status: false
      }}>
        <Outlet/>

        <Screen />

      </GlobalContextProvider>
    </AuthContextProvider>
  );
}

export default App;
