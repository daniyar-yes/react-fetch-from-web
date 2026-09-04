import MainContainer from "./MainContainer";
import { StrictMode, useState } from "react";

function App() {

    const [orderCounter, setOrderCounter] = useState(0);
    const [coinCounter, setCoinCounter] = useState(0);


    const silverData = {
      month: 'August',
      dataPoints: [ {date: 1, price: 50}, {date: 3, price: 55}, {date: 5, price: 65}, {date: 8, price: 50}, {date: 10, price: 50}, {date: 15, price: 50}, {date: 18, price: 50}, {date: 22, price: 50}, {date: 25, price: 50}, {date: 28, price: 50},{date: 31, price: 50}],
      callToAction: 'Sell now'
    }

    // dataPoints = [ {date: 'Jun 14th 2026', price: 50}, , , , , , , , , ,]
  return (
    <>
      <StrictMode>
        <MainContainer orderCounter={orderCounter} setOrderCounter={setOrderCounter} coinCounter={coinCounter} setCoinCounter={setCoinCounter} silverData={silverData}/>
      </StrictMode>
    </>
  )
}

export default App





// React component: is a JavaScript function, that takes exactly one input ('{props}') and returns 
// exactly one output - one JSX element.

// after the break:

// Conditional Rendering
// reading props
// Multi-component app (have some components RENDER other components)
// styles in JSX (literal style property, external style module)

// React State (?)



//            //indexes:0      1     2   3     4   5     6     7     8   9   10
// let arr = new Array(1, 4, 9, 16);

// const itemToFind = 'asda';

// // array manipulation methods
// // push, pop, shift, unshift

// console.log('Original arr Before: ', arr)

// console.log(arr.map((item) => item ** 2))

// console.log('original arr After: ', arr)



// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }



// Array methods:

// forEach
// map
// filter

// 1 - higher level (higher voltage) 1.5 V

// if (level > threshold) then it's 1

// ~ threshold for 0 or 1, let's say:    ~1V

// if (level < threshold) then it's 0

// 0 - lower level of signal (lower voltage) 0.5 V

// signal - electric current

// hex - hexadecimal - 16 based system (hex - 6, dec - 10)
// 0123456789ABCDEF
// 0 - 0 (min)
// 16 - F (max)

// color: #RGB
// color: #RRGGBB
// color: #14760a
// color #1da147

// STATE: object that describes the current state of the UI
