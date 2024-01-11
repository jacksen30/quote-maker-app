import React from 'react'

export default function Header() {
  return (
    <header className='header'>
      <div className="header__text-wrapper">
        <h1 className="header-siteName">Quotemkr</h1>
        <span className="header--text-divider">|</span>
        <p className="header-siteDescription"> Design branded quote content in 10 seconds !</p>
      </div>
      <a className="header__contact-btn" href="https://devbyjacksen.com/contact">Contact Us</a>
    </header>
  )
}
