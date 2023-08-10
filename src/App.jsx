import Header from "./Components/Header/Header"
import "./App.scss"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Social from "./Components/Social/Social"

import github from "./assets/github-mark.png"
import linkedin from "./assets/linkedin.png"
import discord from "./assets/discord.png"
import email from "./assets/email.png"
import messenger from "./assets/messenger.png"

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
        
        <div className="socials-wrapper">
          <h2 className="quick-links">Quick Links</h2>

          <div className="socials">
            <Social logo = {github} title = "GitHub" link = "https://chat.openai.com/c/c8c3137e-c1cb-4868-bdc6-b82d41180ce3"/>
            <Social logo = {linkedin} title = "LinkedIn" />
            <Social logo = {email} title = "Email" />
            <Social logo = {messenger} title = "Messenger" href ="vk.com"/>
            <Social logo = {discord} title = "Discord" />
          </div>
        </div>
      </main>

    </div>
  )
}

export default App
