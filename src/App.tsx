import { useState } from 'react'

import './App.css'
import TipSplitterForm from './components/TipSplitterForm'
import Results from './components/Results'


function App() {
  const [inputValues, setInputValues] = useState({
    billAmount: 0,
    tipPercentage: 5,
    numberOfPeople: 1
  })

  function handleInputChange(inputName: string, newValue: string | boolean) {
    setInputValues((prevValues) => {
      return {
        ...prevValues,
        [inputName]: +newValue
      }
    })
  }

  

  return (
    <>
      <h1 id='header'>Tip Splitter</h1>
      <TipSplitterForm handleChange={handleInputChange} values={inputValues} />
      {inputValues.billAmount > 0 && <Results values={inputValues} />}
    </>
  )
}

export default App
