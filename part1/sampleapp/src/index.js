import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Hello = ({ name, age }) => {
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {new Date().getFullYear() - age}</p>
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Header = ({ header }) => <h1>{header}</h1>

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering...', counter)

  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)
  const resetCounter = () => setCounter(0)

  return (
    <>
      <Header header="Greetings" />
      <Hello name="bully" age={26+10}/>
      <Hello name="kully" age={10}/>
      <Display counter={counter} />
      <Button onClick={increase} text="Don't click else I will count!" />
      <Button onClick={decrease} text="Click here to hide the fact that you went other button!" />
      <Button onClick={resetCounter} text="Erase your sins!" />
    </>
  )

}



ReactDOM.render(<App />, document.getElementById('root'))


