import React from "react"
import mojang from "../assets/mojang-logo.png"
import technigo from "../assets/technigo-logo.svg"
import hm from "../assets/H&M-logo.png"
import romanacorreale from "../assets/romanacorreale-logo.png"
import ivyrevel from "../assets/ivyrevel-logo.png"
import adcn from "../assets/adcn-logo.png"
import fjallraven from "../assets/fjallraven-logo.png"
import comprend from "../assets/comprend-logo.png"
import catgif from "../assets/cat-animation.gif"
import dreamcatcher from "../assets/dreamcatcher.png"
import fries from "../assets/fries-animation.gif"
import hyperisland from "../assets/hyper-island-logo.jpeg"

export default function Resume() {
  return (
    <div id="resume" className="container">
      <a
        className="card bg-white text-black"
        href="https://www.comprend.com/"
        target="_blank"
      >
        <img src={comprend} alt="Comprend logo" />
        <h2>Comprend</h2>
        <p className="date">2020</p>
        <p>
          As a frontend developer at Comprend I'm developing websites for
          clients in Comprend’s own CMS tool. The team works with both 1:1
          migrations and newly designed sites.
        </p>
      </a>
      <div
        className="card card-bg bg-warm-grey"
        style={{ backgroundImage: `url(${catgif})` }}
      />
      <div className="card bg-cool-grey">
        <img src={mojang} alt="Mojang logo" />
        <h2>Mojang</h2>
        <p className="date">2018 / 2019</p>
        <p>
          I worked as a frontend developer in a team responsible for redesigning
          the UI/UX in the game Minecraft. It was a close collaboration between
          frontend and design where components and layouts were thoroughly
          tested to ensure the best possible interface for the users.
        </p>
      </div>
      <div
        className="card card-bg bg-cotton-candy"
        style={{ backgroundImage: `url(${fries})` }}
      />
      <a
        className="card bg-black text-white"
        href="https://francesca-1bc9a9.netlify.app/"
        target="_blank"
      >
        <img src={romanacorreale} alt="Francesca Romana Correale logo" />
        <h2>Romana Correale</h2>
        <p className="date">2019</p>
        <p>
          I designed and developed a portfolio website for fashion designer and
          creative director Francesca Romana Correale.
        </p>
      </a>
      <a
        className="card bg-white text-black"
        href="https://www.technigo.io/"
        target="_blank"
      >
        <img src={technigo} alt="Technigo logo" />
        <h2>Technigo</h2>
        <p className="date">2017 / 2018</p>
        <p>
          A bootcamp within frontend development. We worked in HTML/CSS/JS with
          React as a framework.
        </p>
      </a>
      <div className="card bg-lavender">
        <img src={hm} alt="H&M logo" />
        <h2>H&M</h2>
        <p className="date">2016 / 2017</p>
        <p>
          I worked in a team of artworkers responsible for the image production
          for H&M’s digital channels, such as website, email marketing and
          social media. I was involved in implementing new techniques and
          improving new ways of working.
        </p>
      </div>
      <a
        className="card bg-white text-black"
        href="https://www.hyperisland.com/"
        target="_blank"
      >
        <img src={hyperisland} alt="Hyper Island logo" />
        <h2>Hyper Island</h2>
        <p className="date">2012 / 2013</p>
        <p>
          I attended the program Motion Graphics, an education within animation
          and graphic design.
        </p>
      </a>
      <div
        className="card card-bg bg-warm-grey"
        style={{ backgroundImage: `url(${dreamcatcher})` }}
      />
      <div className="card bg-black text-white">
        <img className="logoBig" src={ivyrevel} alt="Ivyrevel logo" />
        <h2>Ivyrevel</h2>
        <p className="date">2016</p>
        <p>
          In my role as graphic designer I handled all graphical content. Mainly
          focusing on developing website and newsletter.
        </p>
      </div>
      <div className="card bg-ocean-mist">
        <img src={adcn} alt="ADCN logo" />
        <h2>ADCN</h2>
        <p className="date">2015 / 2016</p>
        <p>
          Creative producer at the Dutch advertising organisation ADCN. I was
          responsible for email marketing and organising events such as the ADCN
          Awards, the Dutch equivalent to Guldägget in Sweden.
        </p>
      </div>
      <div className="card bg-lavender">
        <img className="logoBig" src={fjallraven} alt="Fjällräven logo" />
        <h2>Fjällräven</h2>
        <p className="date">2013 / 2015</p>
        <p>
          As PIM-Manager at Fjällräven I was responsible for organizing and
          maintaining the product information and product photo shoots. I worked
          in close collaboration with the e-commerce manager, developing and
          maintaining the e-commerce website.
        </p>
      </div>
    </div>
  )
}
