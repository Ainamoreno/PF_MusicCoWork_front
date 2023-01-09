import React from 'react'
import './Footer.scss'
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 footerDesign">
    
    <span className="ms-5 mb-md-0 text-muted">© {new Date().getFullYear()} Aina Moreno Carceller</span>

    <ul className="nav justify-content-end list-unstyled d-flex">
      <li className="ms-3 me-5"><a className="text-muted" target='blank' href="https://www.linkedin.com/in/aina-moreno-carceller-99a802246/"><FaLinkedin size={25}/></a></li>
    </ul>

  </footer>
  )
}

export default Footer