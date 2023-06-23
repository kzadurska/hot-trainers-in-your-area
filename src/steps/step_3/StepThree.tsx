import React from "react";
import { Thermometer } from "../../thermometer/Thermometer";
import { HotTrainer } from "../../hot-trainer/HotTrainer";
import '../../App.css';


export interface NextStep {
    goNext: ()=> void;
    currentStep: number;
    setStepFourVisited:(visited: boolean)=>void;
    stepFourVisited: boolean;
}

export const StepThree:React.FC<NextStep> = ({goNext, currentStep, setStepFourVisited, stepFourVisited}) => {
    const onClick=()=> {
        setStepFourVisited(true)
        goNext()
    }

    return <div  className="app">
        <HotTrainer/>
        <Thermometer currentStep={currentStep} />
<h2>3</h2>
        {!stepFourVisited &&<button type="button" onClick={onClick}>Dawaj następnego!</button>}
    </div>
}
