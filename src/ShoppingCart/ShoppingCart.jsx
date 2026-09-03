import React from 'react'

const ShoppingCart = ({orderCounter}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>🛒 {orderCounter}</div>
  )
}

export default ShoppingCart