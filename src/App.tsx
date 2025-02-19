// import reactLogo from './assets/react.svg'
import reactLogo from './assets/salmon.png'
import viteLogo from '/vite.svg'
import './App.css'
import MemoryGame from './MemoryGame/Game.tsx'
import ChimpRace from './ChimpRace/Game.tsx'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Carpentory Testing Ground</h1>
      <div className="card">

        {/* <MemoryGame/> */}
        <ChimpRace/>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
