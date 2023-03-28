import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import "./Option.css"

const option = ( {option, onSelectOption, answer} ) => {
    const [quizState, dispatch] = useContext(QuizContext)
    
  return (
    <div className={`option ${ quizState.answerSelected && option === answer ? "correct" : "" } 
    
        ${ quizState.answerSelected && option !== answer ? "error" : "" }`} onClick={() => onSelectOption(option)}>
        <p>{option}</p>
    </div>
  )
}

export default option