
import './HotTrainer.css'
import trener from '../images/trener.png'

const hotnessLevel = ['none', 'hot', 'hotter', 'thehottest']

export const HotTrainer:React.FC<{currentStep: number}> = ({currentStep}) => {

    return <div className={`hotTrainerWrapper`}>
        <div className={`opacity ${hotnessLevel[currentStep]}`}>

        </div>
<img src={trener} alt="trener" className='img'/>
    </div>
}
