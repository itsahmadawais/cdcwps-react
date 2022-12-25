import React from 'react'
export default function Counter() {
    const increment = () => {
        var val = (document.getElementById('counter-value') as HTMLInputElement).value;
        var calculation = Number.parseInt(val) + 1;
        //Update Values
        (document.getElementById('input') as HTMLInputElement).innerHTML = calculation.toString();
        (document.getElementById('counter-value') as HTMLInputElement).value = calculation.toString();
    }
    const decrement = () => {
        var val = (document.getElementById('counter-value') as HTMLInputElement).value;
        var calculation = Number.parseInt(val) - 1;
        //Update Values
        (document.getElementById('input') as HTMLInputElement).innerHTML = calculation.toString();
        (document.getElementById('counter-value') as HTMLInputElement).value = calculation.toString();
    }
    return (
        <>
            <h2>Counter</h2>
            <input type='hidden' id='counter-value' value='7'/>
            <div className='container'>
                <div className='flex'>
                    <div className='item button'>
                        <button className='btn' onClick={increment}>+</button>
                    </div>
                    <div id='input' className='item'>
                        7
                    </div>
                    <div className='item button'>
                        <button id='btn-decrement' className='btn' onClick={decrement}>-</button>
                    </div>
                </div>
            </div>
        </>
    )
}
