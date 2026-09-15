// React component: is a JavaScript function, that takes exactly one input ('{props}') and returns 
import OrderForm from "./OrderForm/OrderForm";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import SilverPriceChart from "./SilverPriceChart/SilverPriceChart";
import AddressInfo from "./AddressInfo/AddressInfo";


function MainContainer(
    {
        orderCounter,
        setOrderCounter,
        coinCounter,
        setCoinCounter,
        addressHistory,
        setAddressHistory
    }) {

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
                addressHistory={addressHistory}
                setAddressHistory={setAddressHistory}
            />

            <SilverPriceChart />

            <AddressInfo addressHistory={addressHistory}/>
        </>
    )
}

export default MainContainer