import React from 'react'

export default function Divider() {
    const stringPrinter = () => {
        setTimeout(() => {
            var val = (document.getElementById('counter-value') as HTMLInputElement).value;
            var calculation = (6.0 / Number.parseFloat(val)).toFixed(4);
            // Updating Value
            (document.getElementById('divider-label') as HTMLInputElement).innerHTML = '-6 / '+val;
            (document.getElementById('divider-value') as HTMLInputElement).innerHTML = calculation.toString();
            stringPrinter();
        }, 400);
    }
    stringPrinter();
    return (
        <>
            <h2>Divider</h2>
            <div className='container'>
                <div className='flex'>
                    <div id='divider-label' className='item'>
                    </div>
                    <div className='item result'>
                        <h6>New Value</h6>
                        <span id='divider-value'></span>
                    </div>
                </div>
            </div>
        </>
    )
}
