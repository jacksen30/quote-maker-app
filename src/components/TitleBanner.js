import React from 'react'

export default function TitleBanner() {
  return (
    <>
      <div className='titleWrapper' >
          <div className='nav-top'>
              <h1 className='qmkrLogo'>Quotemkr<button id='signUp-Button'>Sign Up</button></h1>
          </div>
      </div>
      <div>
        <p className='intro-text'>
          <h4>Quote-Mkr helps you to design branded quote content within 10 seconds !</h4>
          <h4>Perfect for quote lovers, content creators, businesses & theme pages</h4>
        </p>
      </div>
    </>
  )
}


/*
<div className='titleWrapper' >
        <div className='titleContainer-left'>
            <h1>Your Amazing Quote Builder</h1>
        </div>
        <div className='titleContainer-right'>
            <h4>Design branded quote content within 10 seconds !</h4>
            <h4>Perfect for content creators, businesses & theme pages</h4>
        </div>
    </div>
    */