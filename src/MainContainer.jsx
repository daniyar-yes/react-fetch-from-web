// React component: is a JavaScript function, that takes exactly one input ('{props}') and returns 
import OrderForm from "./OrderForm/OrderForm";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import SilverPriceChart from "./SilverPriceChart/SilverPriceChart";


function MainContainer({ orderCounter, setOrderCounter, coinCounter, setCoinCounter }) {

    return (
        <>
            <ShoppingCart
                orderCounter={orderCounter}
                coinCounter={coinCounter}
            />

            <OrderForm
                orderCounter={orderCounter}
                setOrderCounter={setOrderCounter}
                coinCounter={coinCounter}
                setCoinCounter={setCoinCounter}
            />

            <SilverPriceChart />
        </>
    )
}

export default MainContainer