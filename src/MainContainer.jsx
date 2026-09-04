// React component: is a JavaScript function, that takes exactly one input ('{props}') and returns 
import OrderForm from "./OrderForm/OrderForm";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import SilverPriceChart from "./SilverPriceChart/SilverPriceChart";


function MainContainer({ orderCounter, setOrderCounter, coinCounter, setCoinCounter, silverData }) {

    return (
        <>
            <ShoppingCart
                orderCounter={orderCounter}
                coinCounter={coinCounter}
            />

            <SilverPriceChart silverData={silverData}/>

            <OrderForm
                borderSize={10}
                borderColor={'red'}
                orderCounter={orderCounter}
                setOrderCounter={setOrderCounter}
                coinCounter={coinCounter}
                setCoinCounter={setCoinCounter}
            />

        </>
    )
}

export default MainContainer