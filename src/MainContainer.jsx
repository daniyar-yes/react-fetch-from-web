// React component: is a JavaScript function, that takes exactly one input ('{props}') and returns 
import OrderForm from "./OrderForm/OrderForm";
import ShoppingCart from "./ShoppingCart/ShoppingCart";


function MainContainer({ orderCounter, setOrderCounter, coinCounter, setCoinCounter }) {

    return (
        <>
            <ShoppingCart
                orderCounter={orderCounter}
                coinCounter={coinCounter}
            />
            <h4>Place your order:</h4>
            <OrderForm
                borderSize={10}
                borderColor={'red'}
                orderCounter={orderCounter}
                setOrderCounter={setOrderCounter}
                coinCounter={coinCounter}
                setCoinCounter={setCoinCounter}
            />
            {/* <OrderForm borderColor={'blue'} borderSize={10}/>
            <OrderForm borderColor={'yellow'} borderSize={20}/> */}
        </>
    )
}

export default MainContainer