import React from 'react'

export default function EditButtonBox(props) {
    const { handleColorChange, handleQuoteChange, handleFontChange, handleCustomBrandTextChange, handleCustomQuoteTextChange, handleIconChange } = props
  return (
    <> 
      <div>
        <button onClick={() => handleQuoteChange()}>QUOTE</button>
        <button onClick={() => handleColorChange()}>COLOR</button>
        <button onClick={() => handleFontChange()}>FONT</button>
      </div>
      <div>
        <div><h3>Add Custom Branding:</h3></div>
        <div className='radio-btn-div'>
          <input className='radio-btn-input' type='radio' name='icon' id='none' onClick={() => handleIconChange('none-icon')}></input>
          <label className='radio-btn-label'>None</label>

          <input className='radio-btn-input' type='radio' name='icon' id='instagram' onClick={() => handleIconChange('instagram-icon')} />
          <label className='radio-btn-label'>Instagram</label>

          <input className='radio-btn-input' type='radio' name='icon' id='facebook' onClick={() => handleIconChange('facebook-icon')} />
          <label className='radio-btn-label'>Facebook</label>

          <input className='radio-btn-input' type='radio' name='icon' id='twitter' onClick={() => handleIconChange('twitter-icon')}  />
          <label className='radio-btn-label'>Twitter</label>
        </div>
      </div>
      <div className='customTextInput-wrapper'>
        <label className='customInput-Label' htmlFor="instagram" >Insert Brand Text:</label><input type='text' name='instagram' id='instagram' maxLength='30' onChange={(e) => handleCustomBrandTextChange(e.target.value) } />
        <label className='customInput-Label' htmlFor="instagram" >Custom Quote:</label><input type='text' name='instagram' id='instagram' maxLength='68' onChange={(e) => handleCustomQuoteTextChange(e.target.value) } />
      </div>
    </>
  )
}


/* Save button that goes below quote color and font buttons - Re-Add when we implement a save function

<button className='button-long'>SAVE</button> 

*/