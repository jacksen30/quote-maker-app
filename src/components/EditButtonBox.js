import React from 'react'

export default function EditButtonBox(props) {
    const { handleColorChange, handleQuoteChange, handleFontChange } = props
  return (
    <div>
        <button onClick={() => handleQuoteChange()}>QUOTE</button>
        <button onClick={() => handleColorChange()}>COLOR</button>
        <button onClick={() => handleFontChange()}>FONT</button>
        <button className='button-long'>SAVE</button>
      </div>
  )
}
