import React from 'react'

export default function EditButtonBox(props) {
  const { handleColorChange, handleQuoteChange, handleFontChange, handleCustomBrandTextChange, handleCustomQuoteTextChange, handleIconChange } = props

  // const toggleBtn = document.getElementById('toggleBtn');
  // const lightenText = document.getElementById('lightenText');
  // const darkenText = document.getElementById('darkenText');

  // toggleBtn.addEventListener('click', () => {
  //   if (toggleBtn.classList.contains('toggled')) {
  //     toggleBtn.classList.remove('toggled');
  //     lightenText.classList.remove('unselected-toggle-text');
  //     darkenText.classList.add('unselected-toggle-text');
  //   } else {
  //     toggleBtn.classList.add('toggled');
  //     darkenText.classList.remove('unselected-toggle-text');
  //     lightenText.classList.add('unselected-toggle-text');
  //   }
  // });

  return (
    <>
      <div>
        <button onClick={() => handleQuoteChange()}>QUOTE</button>
        <button onClick={() => handleColorChange()}>COLOR</button>
        <button onClick={() => handleFontChange()}>FONT</button>
      </div>
      <div>
        <div><h3>Add Custom Branding:</h3></div>
        <div className='toggle'>
                <p id='lightenText' className='toggle-text'>On</p>
                <div id='toggleBtn' className='toggle-btn toggled'>
                    <div className='inner-circle'>
                    </div>
                </div>
                <p id="darkenText" className="toggle-text unselected-toggle-text">Off</p>
            </div>
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
        <label className='customInput-Label' htmlFor='customBrandText' >Insert Brand Text:</label><input type='text' name='customBrandText' id='customBrandText' maxLength='30' onChange={(e) => handleCustomBrandTextChange(e.target.value) } />
        <label className='customInput-Label' htmlFor='customQuoteText' >Custom Quote:</label><input type='text' name='customQuoteText' id='customQuoteText' maxLength='68' onChange={(e) => handleCustomQuoteTextChange(e.target.value) } />
      </div>
    </>
  )
}
