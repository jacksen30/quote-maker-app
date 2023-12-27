import React from 'react'

export default function Header() {
  return (
    <header className='header'>
      <div className="header__text-wrapper">
        <span className="header-siteName">Quotemkr |</span><span className="header-siteDescription"> Design branded quote content in 10 seconds !</span>
      </div>
      <a className="header__contact-btn" href="https://devbyjacksen.com/contact">Contact Us</a>
    </header>
  )
}
