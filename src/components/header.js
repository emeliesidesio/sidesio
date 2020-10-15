import React from "react"
import { DarkToggle } from "./DarkToggle"

export default function Header() {
  return (
    <div className="header">
      <DarkToggle />
      <ul className="navigation">
        <li>
          <a className="link" href="#resume">
            Resume
          </a>
        </li>
        <li>
          <a className="link" href="#footer">
            Connect
          </a>
        </li>
      </ul>
    </div>
  )
}
