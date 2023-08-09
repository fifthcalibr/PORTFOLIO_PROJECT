import React from 'react'
import "./About.scss"
import InfoCard from '../../../Components/InfoCard/InfoCard'

const About = () => {
  return (
    <div className='about'>
        <div className="name">
            <div>
                <h1 className="txt">AB <br />OU</h1>
            </div>
            <h1 className="txt lg">T</h1>

            <div className="me">ME</div>
        </div>

        <div className="info">
            <InfoCard  title = "About Me" details = "Hello there! I'm Rinat Zabirov, a proud graduate of BCIT's Computer Science program (2021). With a love for coding in JavaScript, Python, and Java, I'm on a perpetual quest to transform intricate challenges into graceful solutions. My enthusiasm lies in joining forces with like-minded teams to bring innovation to life. Step into my world of programming prowess and creative problem-solving through this portfolio, where I showcase my journey and dedication to making technology work seamlessly. Let's embark on a journey of innovation together!" />
            <InfoCard title = "Education" details = "I graduated from BCIT's Computer Science program in 2021. During my time there, I immersed myself in Java, Python, OOP, JavaScript, SQL, and even dabbled in C. My education fueled my passion for coding, inspiring me to explore new frameworks and languages. In my spare time, I tackle challenges on &lsquo;CodeWars&lsquo;, develop personal projects, and refine my programming prowess." />
            <InfoCard title = "Skills" details="I wield an array of skills, including React for dynamic interfaces, Material-UI (MUI) for elegant design, SQL for efficient data management, and Python for versatile coding. My proficiency extends to SCSS for enhancing visual aesthetics, and I eagerly embrace the opportunity to learn new technologies." />
            <InfoCard title = "Social Life" details = "Beyond coding, I find solace in staying active. You'll often find me hitting the gym during my free time, working on both mental and physical strength. Another passion of mine is traveling with my family, exploring new places, and creating cherished memories together. Balancing the virtual world with real-world experiences keeps me motivated and energized." />
        </div>
    </div>
  )
}

export default About