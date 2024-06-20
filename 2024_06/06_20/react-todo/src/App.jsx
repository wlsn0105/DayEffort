import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [inputText, setInputText] = useState('')

  const handleInput = (event) => {
    console.log(event);
    const value = event.target.value;
    setInputText(value)
  }
  // 2. handleInput이 실행되서 이벤트의 타겟의 값을 잡고
  // 잡은 값을 그대로 setInputText에 업데이트함

  const handleClick = () => {
    console.log('clicked')
    localStorage.setItem(inputText, inputText);
  }

  return (
    <div>
      <h1>
        ToDoList
      </h1>
      <div>
        <input type="text"
          placeholder='할 일을 작성해주세요.'
          value={inputText}
          onChange={handleInput} />
        {/*1. value에 값이 입력되면 onChange가 먼저 작동됨 */}
        <button onClick={handleClick}>add</button>
      </div>
    </div>
  )
}

export default App
 