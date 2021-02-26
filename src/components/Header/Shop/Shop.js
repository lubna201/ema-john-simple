import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    // console.log(first10);
    const [products, setProducts] = useState(first10);
    const [cart,setCart]=useState([]);

    const handleAddProduct=(product)=>{
        // console.log("products added",product);
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            {/* <h1>Hello there</h1>
            <h3>{products.length}</h3> */}
            <div className="product-container">
                {
                    products.map(pd => <Product 
                        handleAddProduct={handleAddProduct}
                        product={pd}>
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default shop;