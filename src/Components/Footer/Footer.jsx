import React from 'react'
import github from "../../assets/github-mark.png";
import linkedin from "../../assets/linkedin.png";
import discord from "../../assets/discord.png";
import email from "../../assets/email.png";
import messenger from "../../assets/messenger.png";
import Social from '../Social/Social';

function Footer() {
  return (
    <div className='footer'>
        <h1>Rinat Zabirov</h1>
        <div className="menu">

        </div>
        <div className="links">
        <div className="socials-wrapper">
                    <h2 className="quick-links">Quick Links</h2>

                    <div className="socials">
                        <Social
                            logo={github}
                            title="GitHub"
                            link="https://github.com/fifthcalibr"
                        />
                        <Social
                            logo={linkedin}
                            title="LinkedIn"
                            link="http://www.linkedin.com/in/rinat-zabirov-316740226"
                        />
                        <Social
                            logo={email}
                            title="Email"
                            link="mailto:rinatkaka3@gmail.com"
                        />
                        <Social
                            logo={messenger}
                            title="Messenger"
                            href="vk.com"
                        />
                        <Social
                            logo={discord}
                            title="Discord"
                            link="http://discordapp.com/users/fifthcalibr#9992"
                        />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer