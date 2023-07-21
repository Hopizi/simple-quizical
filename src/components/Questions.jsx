import React, { useEffect, useMemo } from 'react'
import Options from './Options';
import { useSelector, useDispatch } from "react-redux";
import { apiActions } from '../store/apiSlice';

function Questions({question, optionsData, correctAnswer, data, index}) {

  const dispatch = useDispatch()

  const currentPage = useSelector((state) => state.api.currentPage);
  const chosenOptions = useSelector((state) => state.api.chosenOptions);
  const score = useSelector((state) => state.api.score)

  console.log(chosenOptions)

  const options = useMemo(() => {
    const questionArray = optionsData;
    const correctAnswerData = [correctAnswer]
    return [...questionArray, ...correctAnswerData].sort(
      () => Math.random() - 0.5
    );
  }, [data]) 


  function validateAnswer(answer, idx) {
    const question = data[idx];
    dispatch(apiActions.updateOptions({
      index: idx,
      option: answer
    }))
    if(answer === question.correct_answer){
      dispatch(apiActions.upadateScore())
    }else {
      
    }
  }

  const seletectdStyles = "bg-blue-500 text-white border-transparent";


  return (
    <div className="box-border py-4">
      <p className="mb-4 font-bold text-color text-sm font-karla">
        {question}
      </p>
      <div className="flex">
        {options.map((option, idx) => (
          <Options 
          option={option} 
          key={idx}
          selectAnswer={() => {
            validateAnswer(option, index)
          }}
          selected={chosenOptions.find(coption => coption.option === option) ? seletectdStyles : ''}
          />
        ))}
      </div>
    </div>
  );
}

export default Questions