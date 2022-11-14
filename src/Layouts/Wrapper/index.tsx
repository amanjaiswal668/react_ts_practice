import React, { Fragment } from 'react';
import { Outlet, Route, Routes } from 'react-router';
import About from '../About';
import Information from '../Information';
import ProductDescription from '../ProductDescription';
import Product from '../Products';
import User from '../Users';

interface IWrapperProps {

}

function Wrapper(props: IWrapperProps) {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="products" element={<Product />}>
                    <Route path="productname" element={<ProductDescription />} />
                </Route>
                <Route path="about" element={<About />} />
                <Route path="information" element={<Information />} />
                <Route path="user" element={<User />} />

            </Routes>

        </Fragment>
    )
}

export default Wrapper