import React, { useState } from 'react';
import './App.css';
import { Header } from './header/Header';
import { StepZero } from './steps/step_0/StepZero';
import { StepOne } from './steps/step_1/StepOne';
import { StepTwo } from './steps/step_2/StepTwo';
import { StepThree } from './steps/step_3/StepThree';
import { StepFour } from './steps/step_4/StepFour';

function App() {
  let [currentStep, setCurrentStep] = useState(0);
  const [stepFourVisited, setStepFourVisited] = useState(false)

  const goNext = ()=> setCurrentStep(currentStep+1)

  const goBack= ()=> setCurrentStep(currentStep-1)


  return (
    <div className={`app ${currentStep === 4 ? 'gradient' : ''}`}>
      <Header/>

{currentStep === 0 && <StepZero  goNext={goNext}/>}
{currentStep === 1 && <StepOne  goNext={goNext} currentStep={currentStep}/>}
{currentStep === 2 && <StepTwo  goNext={goNext} currentStep={currentStep}/>}
{currentStep === 3 && <StepThree  goNext={goNext} currentStep={currentStep} setStepFourVisited={setStepFourVisited} stepFourVisited={stepFourVisited}/> }
{currentStep === 4 && <StepFour goBack={goBack} stepFourVisited={stepFourVisited}/>}
    </div>
  );
}

export default App;
