// React component: is a JavaScript function, that takes exactly one input ('{props}') and returns 

import ACase from "./ACase";
import BCase from "./BCase";

// exactly one output - one JSX element.
let a = 100132130;
let b = 99;


function SomeText() {
    console.log('hi from outside SomeText file')
    let sizeOfTable = '10rows x 20cols';

    return (
        <>
            <h1>Title for Hi</h1>
            <h3 style={{ border: '3px solid red', borderRadius: '15%' }}>{sizeOfTable}</h3>
            <p>Hello, that's the whole React App</p>
            {(a > b) ? <ACase numberForA={a}/> : <BCase />}
            A: {a}
            <br />
            B: {b}
        </>
    )
}

export default SomeText