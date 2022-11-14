import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomHeader from '../../components/Header';
import CustomNavbar from '../../components/Navigation';
import Landing from '../Landing';
import Wrapper from '../Wrapper';

interface IScreenProps {

}

function Screen(props: IScreenProps) {
    return (
        <>
            <CustomNavbar />
            <br />
            <br />
            <br />
            <br />
            <CustomHeader />
            <br />
            <br />
            <br />
            <br />
            {/* <Landing /> */}
            <Wrapper/>
<Outlet/>

        </>
    )
}

export default Screen