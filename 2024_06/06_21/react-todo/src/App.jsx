import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function fetchTodos() {
  const result = [];

  for (let i = 0; i < localStorage.length; i++){
    const value = localStorage.key(i);
    result.push(value);
  }
  // 1. 로컬스토리지에 저장된 데이터들을 갯수만큼 다 가져옴
  // 2. 다 가져온 것들을 배열에 저장함

  return (
    result
  )
  // 3. 배열을 출력
  // 4. 원래 선언된 기본 함수 안에 fetchTodos함수 선언
}
// localStorage.getAllItems();
// 모두 한 번에 데이터를 가져오는 API가 제공되지 않기 때문에 위의 함수가 똑같은 기능을 함

function App() {
  // const [count, setCount] = useState(0)
  const [inputText, setInputText] = useState('')
  const todos = fetchTodos();

  const handleInput = (event) => {
    console.log(event);
    const value = event.target.value;
    setInputText(value);
  }
  // 2. handleInput이 실행되서 이벤트의 타겟의 값을 잡고
  // 잡은 값을 그대로 setInputText에 업데이트함

  const handleClick = () => {
    console.log('clicked')
    localStorage.setItem(inputText, inputText);
    setInputText('');
    // setInputText('')를 넣어줘야 클릭했을 때 텍스트가 사라짐
  }

  const handleRemove = (todo, index) => {
    console.log(todo, index)
    todos.splice(index, 1);
    console.log(todos)
  }
  // onClick의 값들을 가져옴
  // 배열을 일반 변수인 todos로 선언하면 삭제를 해도 렌더링이 되지 않음

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
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <span>
                  {todo}
                  <button onClick={() => handleRemove(todo, index)}>
                    Remove
                  </button>
                </span>
                {/*
                앞에 함수를 안쓰고 그냥 handleRemove로 하면 안됨
                클릭하면 실행하고 끝나버리는 거라서 전달이 안됨
                이벤트 핸들러의 파라메터를 넘기는 방법을 알아야 함
                */}
              </li>
            )
          })}
          {/* 
          리액트에서 리스트를 표시할 때 map api를 사용해줘야 함
          todos는 리스트 전체, todo는 리스트 각각
          index로 식별값을 구분해줌
          나중에는 ind용x보다 각각의 id값을 연결해주는게 좋음 
          리액트에서 맵을 돌릴 때 키를 넣어줘야 하기 때문에 key를 식별값으로 적용
          */}
        </ul>
      </div>
    </div>
  )
}

export default App
 