import React from 'react'

export default function EditButtonBox(props) {
  const { handleColorChange, handleQuoteChange, handleFontChange } = props;

  return (
    <>
      <div>
        <button className='button-main' onClick={() => handleQuoteChange()}>CHANGE<br />QUOTE</button>
        <button className='button-main' onClick={() => handleColorChange()}>CHANGE<br />BG COLOR</button>
        <button className='button-main' onClick={() => handleFontChange()}>CHANGE<br />FONT</button>
      </div>
    </>
  )
}
