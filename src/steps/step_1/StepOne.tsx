import React from "react";
import { Thermometer } from "../../thermometer/Thermometer";
import { HotTrainer } from "../../hot-trainer/HotTrainer";
import '../../App.css';

export interface NextStep {
    goNext: ()=> void;
    currentStep: number;
}

export const StepOne:React.FC<NextStep> = ({goNext, currentStep}) => {

    return <div className="app">
        <HotTrainer  currentStep={currentStep}/>
        <Thermometer currentStep={currentStep} />
        <button type="button" onClick={goNext}>Dawaj następnego!</button>
    </div>
}
