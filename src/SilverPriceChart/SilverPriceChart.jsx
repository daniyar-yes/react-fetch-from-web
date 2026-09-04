import React from 'react'

const SilverPriceChart = ({silverData}) => {
    console.log(silverData)
  return (
    <div>
        <h5>Silver Price Chart:</h5>
        <div id='price-chart'>{silverData.month}</div>
        <p>{silverData.callToAction}</p>
    </div>
  )
}

export default SilverPriceChart