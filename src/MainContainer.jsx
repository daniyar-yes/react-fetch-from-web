// React component: is a JavaScript function, that takes exactly one input ('{props}') and returns 
import OrderForm from "./OrderForm/OrderForm";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { useState } from "react";


function MainContainer() {

        const [orderCounter, setOrderCounter] = useState(0);

    return (
        <>

            {/* Total Orders NUmber - top right corner */}
            <ShoppingCart orderCounter={orderCounter}/>
            <h4>Place your order:</h4>
            <OrderForm borderSize={10} borderColor={'red'} orderCounter={orderCounter} setOrderCounter={setOrderCounter}/>
            {/* <OrderForm borderColor={'blue'} borderSize={10}/>
            <OrderForm borderColor={'yellow'} borderSize={20}/> */}
        </>
    )
}

export default MainContainer