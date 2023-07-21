import React from 'react'

function Options({option, selectAnswer, selected}) {
    
  return (
  <div 
  className={`py-1 px-4 opt-border rounded-lg mr-3 font-karla text-color ${selected}`}
  onClick={selectAnswer}
  >{option}</div>
  )
}

export default Options