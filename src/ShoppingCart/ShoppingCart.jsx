

const ShoppingCart = ({ orderCounter, coinCounter }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
            <div>🛒 {orderCounter}</div>
            <div>🪙 {coinCounter}</div>
        </div>
    )
}

export default ShoppingCart