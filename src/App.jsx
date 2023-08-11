import Header from "./Components/Header/Header"
import "./App.scss"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Social from "./Components/Social/Social"
import Projects from "./Pages/Projects/Projects"

import github from "./assets/github-mark.png"
import linkedin from "./assets/linkedin.png"
import discord from "./assets/discord.png"
import email from "./assets/email.png"
import messenger from "./assets/messenger.png"
import Contact from "./Pages/Contact/Contact"

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
            <Social logo = {github} title = "GitHub" link = "https://github.com/fifthcalibr"/>
            <Social logo = {linkedin} title = "LinkedIn" link = "http://www.linkedin.com/in/rinat-zabirov-316740226" />
            <Social logo = {email} title = "Email" link = "mailto:rinatkaka3@gmail.com"/>
            <Social logo = {messenger} title = "Messenger" href ="vk.com"/>
            <Social logo = {discord} title = "Discord" link = "http://discordapp.com/users/fifthcalibr#9992" />
          </div>
        </div>

        <div className="page" id="projects">
          <Projects />
        </div>

        <div className="page" id="contact">
          <Contact />
        </div>
      </main>

    </div>
  )
}

export default App
