import Header from "./Components/Header/Header"
import "./App.scss"
import Home from "./Pages/Home/Home"
import About from "./Pages/Home/About/About"

function App() {

  return (
    <div className="App">
      <Header />

      <main>
        <div className="page" id="home">
          <Home />
        </div>
        <div className="page" id="about">
          <About />
        </div>
      </main>

    </div>
  )
}

export default App
