import React, { useEffect, useState } from 'react';
import Add from '../../components/atoms/icons/global/add/Add';
import Logo from '../../components/atoms/icons/logo/Logo';
import './HomePage.css';

// const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     async function fetchProducts() {

//         getProducts().then((response) => {

//             setProducts(response);
//         })
//     }

function HomePage() {

    return (
        <>

                <Add width={'30px'}  />
                <Logo  />

        </>
    );
}

export default HomePage;