import React from 'react'

export default function EditButtonBox(props) {
  const { handleColorChange, handleQuoteChange, handleFontChange } = props;

  return (
    <>
      <div>
        <button onClick={() => handleQuoteChange()}>CHANGE<br />QUOTE</button>
        <button onClick={() => handleColorChange()}>CHANGE<br />BG COLOR</button>
        <button onClick={() => handleFontChange()}>CHANGE<br />FONT</button>
      </div>
    </>
  )
}
