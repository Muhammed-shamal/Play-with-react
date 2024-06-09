import { useEffect, useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function reducer(state, action) {

  switch (action.type) {
    case 'increment': { return { name: state.name, age: state.age + 1 } }
    case 'change_name': { return { name: action.nextName, age: state.age } }
    case 'array': { return { name: state.name, age: state.age, array: state.array[0] + action.array } }
  }
  throw Error('Unknown action: ' + action.type);
}

function App() {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, { age: 10, name: 'abc', array: [1, 2, 3] })


  const handleChange = (event) => {
    const { name, value } = event.target

    dispatch({ type: 'change_name', nextName: event.target.value })
    setName(event.target.value)
  }

  const handleClick = () => {
    dispatch({ type: 'increment' })
  }


  const handleClick3 = () => {
    //setData([1, 2, 3])
    dispatch({ type: 'array', nextName: name, array: 2 })
  }

  // useEffect(() => {

  //   let fetchData = () => {
  //     fetch('https://fakestoreapi.com/products')
  //       .then(res => res.json())
  //       .then(jsonData => {
  //         console.log(jsonData)
  //         setData(jsonData)
  //       })
  //   }

  //   fetchData()

  // }, [])

  return (
    <>
      <div>
        <ul>
          {data && data.map((x, y) => <li key={y}>
            {x.title}
          </li>)}
        </ul>


        <input
          value={state.name}
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          Increment age
        </button>

        <button onClick={handleClick3}>
          Increment array
        </button>
        <p>Hello, {state.name}. You are {state.age}.</p>

        <h1>Here Your array : {state.array}</h1>
      </div>
    </>
  )
}

export default App
