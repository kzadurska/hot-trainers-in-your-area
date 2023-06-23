import React from "react";
import { Thermometer } from "../../thermometer/Thermometer";
import { HotTrainer } from "../../hot-trainer/HotTrainer";
import '../../App.css';


export interface NextStep {
    goNext: ()=> void;
    currentStep: number;
}

export const StepTwo:React.FC<NextStep> = ({goNext, currentStep}) => {

    return <div  className="app">
        <HotTrainer/>
        <Thermometer currentStep={currentStep} />
<h2>2</h2>
        <button type="button" onClick={goNext}>Dawaj następnego!</button>
    </div>
}
