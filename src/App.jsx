import React from 'react'
import './App.css'
import {StartPage, QuizPage} from "./pages"
import { Routes, Route } from "react-router-dom";
import {TopBlob, BottomBlob} from "./assets/svgs"
import QuizContextProvider from './context/QuizData';

function App() {

  return (
    <QuizContextProvider>
      <div className="w-screen min-h-screen relative bg-[#F5F7FB]">
        <TopBlob className="absolute right-0" />
        <img src={BottomBlob} alt="blob-6" className="absolute bottom-0" />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </QuizContextProvider>
  );
}

export default App
