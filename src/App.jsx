import Header from "./Components/Header/Header"
import "./App.scss"
import Home from "./Components/Home/Home"

function App() {

  return (
    <div className="App">
      <Header />

      <main>
        <div className="page" id="page">
          <Home />
        </div>
      </main>

    </div>
  )
}

export default App
