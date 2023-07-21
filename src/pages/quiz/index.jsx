import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Questions} from "../../components"
import {Button} from "@material-tailwind/react"
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import { apiActions } from '../../store/apiSlice'

function QuizPage() {

  const page = useSelector(state => state.api.page)
  const score = useSelector(state => state.api.score)
  const currentPage = useSelector(state => state.api.currentPage)
  const dispatch = useDispatch();

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    const fecthQuestions = () => {
      axios.get(
        "https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple"
      ).then((response) => {

        const newData = response.data.results.slice(page.start, page.end)
        setQuizData(newData);
      }).catch(err => console.log(err))
    }

    fecthQuestions()
  },[page])

  function nextQuestions() {
    dispatch(apiActions.updatePage())
    dispatch(apiActions.nextPage())
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center py-5 relative">
      <div className="w-2/4 h-full p-8 px-12">
        {quizData.map((question, idx) => (
          <Questions
            question={question.question}
            optionsData={question.incorrect_answers}
            correctAnswer={question.correct_answer}
            data={quizData}
            key={idx}
            index={idx}
          />
        ))}
      </div>
      <div className='absolute top-5 right-10'>
          <p className='text-xl text-color'>You Scored</p>
          <p className='text-center text-xl text-color'>{score}</p>
      </div>
      { currentPage === 2 &&
      <div className="w-fit absolute left-14 bottom-4">
        <Button size="sm" onClick={nextQuestions}>
          Previous
        </Button>
      </div>
      }
      <div className="w-fit absolute right-4 bottom-4">
        { currentPage > 1 ? 
        (<Button size="sm" onClick={nextQuestions}>
          Submit
        </Button>) :
        <Button size="sm" onClick={nextQuestions}>
          Next
        </Button>
        }
      </div>
    </div>
  );
}

export default QuizPage