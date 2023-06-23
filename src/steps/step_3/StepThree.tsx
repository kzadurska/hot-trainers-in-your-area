import React, { useState } from "react";
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
    const [premiumInfoVisible, setPremiumInfoVisible] = useState(false)
    const onClick=()=> {
        setStepFourVisited(true)
        goNext()
    }

    const handleCallMe = () => {
        setPremiumInfoVisible(true)
    }

    return (<div  className="app">
        <HotTrainer currentStep={currentStep}/>
        <Thermometer currentStep={currentStep} />
        {!stepFourVisited &&<button type="button" onClick={onClick}>Dawaj następnego!</button>}
        {stepFourVisited && !premiumInfoVisible &&<button type="button" onClick={handleCallMe}>Zadzwoń do mnie</button>}
        {premiumInfoVisible && <div style={{paddingTop: 24, textAlign: "center"}}> Ta usługa dostępna jest tylko dla użytkowników premium. <br/> <br/>Dokonaj opłaty <a href="https://www.fundacjapsom.pl/wsparcie/wesprzyj-finansowo/" >tutaj</a>.</div>}
    </div>)
}
