import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import { QuizContext } from '../../context/QuizData';

const StartPage = () => {

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-karla text-3xl my-3 text-color font-bold">
          Quizzical
        </h1>
        <p className="font-karla text-lg mb-4 text-color">
          Take simple quizes faster
        </p>
        <Link to='/quiz'>
          <button className="btn btn-primary px-14 text-base"
          >
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StartPage