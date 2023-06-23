import React from 'react';
import './Thermometer.css';

const COLORS = ['transparent', 'yellow', 'orange', 'red', 'red'];

export const Thermometer: React.FC<{currentStep: number}> =({currentStep})=>{

    const howManyBars = Object.keys(currentStep);

    return (
        <div>
            {howManyBars.map(bar => (
                <span className="bar" style={{background: COLORS[currentStep]}}></span>
            ))}
        </div>
    )
}
