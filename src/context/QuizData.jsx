import React,{createContext, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const QuizContext = createContext(null);

const QuizContextProvider = ({children}) => {

    const page = useSelector((state) => state.api.page);

    const [quizData, setQuizData] = useState(null);

    const fecthQuestions = () => {
      axios
        .get(
          "https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple"
        )
        .then((response) => {
          const newData = response.data.results.slice(page.start, page.end);
          setQuizData(newData);
        })
        .catch((err) => console.log(err));
    };

    const value = {
        fecthQuestions,
        quizData
    }

    return (
        <QuizContext.Provider value={{}}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider;
