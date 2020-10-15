import React from "react"
import Header from "../components/header"
import Resume from "../components/resume"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="main">
      <Header />
      <div className="hero-section">
        <h1>Hej, I'm Emelie</h1>
        <h2>
          I'm a frontend developer with a background in graphic design and
          animation. I enjoy working in creative environments where I can
          combine my love for design and technology.
        </h2>
      </div>
      <Resume />
      <Footer />
    </div>
  )
}
