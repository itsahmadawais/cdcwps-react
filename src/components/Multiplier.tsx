import React from 'react'

export default function Multiplier() {
    const stringPrinter = () => {
        setTimeout(() => {
            var val = (document.getElementById('counter-value') as HTMLInputElement).value;
            var calculation = -5 * Number.parseInt(val);
            // Updating Value
            (document.getElementById('multiplier-label') as HTMLInputElement).innerHTML = '-5 * '+val;
            (document.getElementById('multiplier-value') as HTMLInputElement).innerHTML = calculation.toString();
            stringPrinter();
        }, 400);
    }
    stringPrinter();
    return (
        <>
            <h2>Multiplier</h2>
            <div className='container'>
                <div className='flex'>
                    <div id='multiplier-label' className='item'>
                    </div>
                    <div className='item result'>
                        <h6>New Value</h6>
                        <span id='multiplier-value'></span>
                    </div>
                </div>
            </div>
        </>
    )
}
