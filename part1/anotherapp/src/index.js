import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <>
        <p>the app is used by pressing the buttons</p>
      </>
    )
  }

  return (
    <>
      <p>button press history: {allClicks.join(' ')}</p>
    </>
  )
}

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])

  const handleLeftClick = () => {
    setLeft(left + 1)
    setAllClicks(allClicks.concat('L'))
  }

  const handleRightClick = () => {
    setRight(right + 1)
    setAllClicks(allClicks.concat('R'))
  }

  return (
    <>
      {left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
