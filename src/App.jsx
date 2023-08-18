import { useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";

import Nav from "./Components/Nav/Nav";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Footer from "./Components/Footer/Footer";

function App() {
    useEffect(() => {
        const navLinks = document.querySelectorAll("nav ul li");
        const indicator = document.querySelector("nav .indicator");

        const navIcons = document.querySelectorAll(".nav-toggle .nav-icon");

        const profile = document.querySelector(".profile");
        const pages = document.querySelectorAll(".page");

        const handleScroll = () => {
            let homeBottom = pages[0].getBoundingClientRect().bottom;
            let homeHeight = pages[0].offsetHeight;

            if (homeBottom < homeHeight / 2) {
                profile.classList.add("active");
            } else {
                profile.classList.remove("active");
            }

            for (let i = 0; i < pages.length; i++) {
                let currentPage = pages[i];

                let pageTop = currentPage.getBoundingClientRect().top;

                if (pageTop < 300) {
                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                    });

                    navLinks[i].classList.add("active");

                    let width = navLinks[i].offsetWidth,
                        left = navLinks[i].offsetLeft;

                    indicator.style.width = `${width + 28}px`;
                    indicator.style.left = left + "px";

                    navIcons.forEach((icon) => {
                        icon.classList.remove("active");
                    });

                    navIcons[i].classList.add("active");

                }
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="App">
            <Header />
            <Nav />

            <main>
                <div className="page" id="home">
                    <Home />
                </div>

                <div className="page" id="about">
                    <About />
                </div>

                <div className="page" id="projects">
                    <Projects />
                </div>

                <div className="page contact-me" id="contact">
                    <Contact />
                </div>

                <div className="footer">
                    <Footer />
                </div>
            </main>
        </div>
    );
}

export default App;
