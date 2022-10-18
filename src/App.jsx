import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useState, useEffect } from 'react'
import './App.css'

import ContextAPI from './context/contextAPI.js'

import Home from './views/Home.jsx'

// import Context from './context/context.js'

// import Componente1 from './components/Componente1.jsx'
// import Componente2 from './components/Componente2.jsx'


function App() {
  // const [count, setCount] = useState(0)
  // const [title, setTitle] = useState('Contador')

  // const globalState = { count, setCount, title }
  const [data, setData] = useState([])
  const globalState = { data }

  useEffect(()=> {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((res)=> res.json())
      .then((json)=> {
        console.log(json)
        setData(json.results)
      })
      .catch((e)=> console.log(e))
  }, [])


  return (
    <div className="App">
      {/* <Context.Provider value={globalState}>
        <Componente1></Componente1>
        <Componente2></Componente2>
      </Context.Provider> */}

      <ContextAPI.Provider value={globalState}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home /> }></Route>
          </Routes>
        </BrowserRouter>
      </ContextAPI.Provider>
    </div>
  )
}

export default App
