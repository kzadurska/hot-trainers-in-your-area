import React from "react";
import '../../App.css';


export interface NextStep {
    stepFourVisited: boolean
    goBack: ()=>void
}

export const StepFour:React.FC<NextStep> = ({stepFourVisited, goBack}) => {

        return( <div  className="app">
            <div style={{width: 250, height: 250, textAlign: 'center'}}>
<h3>Temu termometrowi wyjebało skalę ❤️‍🔥</h3>
            {/* <button type="button" onClick={goBack}>Wstecz 😭</button> */}
        </div>
            </div>)

}
