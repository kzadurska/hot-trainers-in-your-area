import React, { ChangeEvent, useState } from "react";
import '../../App.css';


export interface NextStep {
    goNext: ()=> void
}

export const StepZero:React.FC<NextStep> = ({goNext}) => {
    const [dateOfBirth, setDateOfBirth] = useState("2000-01-01")
    const [errorMessage, setErrorMessage] = useState('')

    const onChange  = (event: ChangeEvent<HTMLInputElement>) => {
        setErrorMessage('')
        setDateOfBirth(event.target.value)
    }

    const isValid = ()=> dateOfBirth === "1999-01-06"

    const handleConfirm = () => {
        if (isValid()) {
            goNext()
        } else {
   setErrorMessage('Wprowadź poprawną datę')

        }

    }
    return (<div className="app">
        <input type="date" value={dateOfBirth} onChange={onChange} />
        {errorMessage.length >0 && <div style={{margin: "16px 0", color: 'crimson'}}>{errorMessage}</div>}
        <button type="button" onClick={handleConfirm} style={{marginTop: 16}}>Potwierdzam</button>
    </div>)
}
