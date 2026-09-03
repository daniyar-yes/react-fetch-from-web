// React component: is a JavaScript function, that takes exactly one input ('{props}') and returns 
import OrderForm from "./OrderForm/OrderForm";


function MainContainer() {

    return (
        <>
            <h4>Place your order:</h4>
            <OrderForm borderSize={10} borderColor={'red'}/>
            {/* <OrderForm borderColor={'blue'} borderSize={10}/>
            <OrderForm borderColor={'yellow'} borderSize={20}/> */}
        </>
    )
}

export default MainContainer