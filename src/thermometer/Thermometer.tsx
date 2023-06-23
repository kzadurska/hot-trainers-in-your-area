import React from 'react';
import './Thermometer.css';

const COLORS = ['transparent', 'tomato', 'orangered', 'crimson', 'firebrick'];

export const Thermometer: React.FC<{currentStep: number}> =({currentStep})=>{

    const howManyBars = [...Array(currentStep).keys()];
    console.log(howManyBars)

    return (
        <div className='scale'>
            <span>🔥
            </span>
            {howManyBars.map(bar => (
                <span className="bar" key={bar} style={{background: COLORS[currentStep]}}></span>
            ))}
        </div>
    )
}
