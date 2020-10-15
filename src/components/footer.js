import React from "react"

export default function Footer() {
  return (
    <div id="footer" className="footer">
      <div>
        <h3>Emelie Sidesiö</h3>
        <p>Frontend developer</p>
        <p>Located in Stockholm, Sweden</p>
      </div>
      <div>
        <h3>Skills</h3>
        <p>HTML5, CSS/LESS, JavaScript, React, Adobe Creative Suite</p>
      </div>
      <div>
        <h3>Connect with me on:</h3>
        <a
          className="link"
          href="https://www.linkedin.com/in/emelie-sidesi%C3%B6-51a68941/"
          target="_blank"
        >
          LinkedIn
        </a>
        ,
        <a
          className="link"
          href="https://github.com/emeliesidesio"
          target="_blank"
        >
          Github
        </a>
      </div>
    </div>
  )
}
