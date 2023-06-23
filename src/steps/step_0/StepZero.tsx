import React, { ChangeEvent, useState } from "react";

export interface NextStep {
    goNext: ()=> void
}

export const StepZero:React.FC<NextStep> = ({goNext}) => {
    const [dateOfBirth, setDateOfBirth] = useState("2000-01-01")
    const [errorMessage, setErrorMessage] = useState('')

    const onChange  = (event: ChangeEvent<HTMLInputElement>) => {
        setErrorMessage('')
        setDateOfBirth("1999-01-06") // todo: use from event
    }

    const isValid = ()=> true // dateOfBirth === "1999-01-06"

    const handleConfirm = () => {
        console.log()
        if (isValid()) {
            goNext()
        } else {
   setErrorMessage('Wprowadź poprawną datę')

        }

    }
    return <div>
        <input type="date" value={dateOfBirth} onChange={onChange} />
        {errorMessage.length >0 && <div>{errorMessage}</div>}
        <button type="button" onClick={handleConfirm}>Potwierdzam</button>
    </div>
}
