import React from 'react';
import Menu from '../../components/molecules/menu/Menu';
import './HomePage.css';
import Bouton from '../../components/atoms/bouton/Bouton';


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
            <Menu />
            <Bouton name="S'inscrire" />
        </>
    );
}

export default HomePage;