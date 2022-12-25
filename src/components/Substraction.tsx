import React from 'react'

export default function Substraction() {
    const stringPrinter = () => {
        setTimeout(() => {
            var val = (document.getElementById('counter-value') as HTMLInputElement).value;
            var calculation = 4 - Number.parseInt(val);
            // Updating Value
            (document.getElementById('substraction-label') as HTMLInputElement).innerHTML = '4 - '+val;
            (document.getElementById('substraction-value') as HTMLInputElement).innerHTML = calculation.toString();
            stringPrinter();
        }, 400);
    }
    stringPrinter();
    return (
        <>
            <h2>Substraction</h2>
            <div className='container'>
                <div className='flex'>
                    <div id='substraction-label' className='item'>
                    </div>
                    <div className='item result'>
                        <h6>New Value</h6>
                        <span id='substraction-value'></span>
                    </div>
                </div>
            </div>
        </>
    )
}
