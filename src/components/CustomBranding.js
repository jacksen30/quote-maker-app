import React from 'react';
import ToggleSwitch from './ToggleSwitch';

export default function CustomBranding(props) {
  const { handleCustomBrandTextChange, handleCustomQuoteTextChange, handleIconChange } = props;

  return (
    <div className="customBrandingToolbar">
      <ToggleSwitch label="Show Custom Branding ToolBar:" initialToggled={true} >
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
        <div className='customTextInput-wrapper'>
          <label className='customInput-Label' htmlFor='customBrandText' >Insert Brand Text:</label><input type='text' name='customBrandText' id='customBrandText' maxLength='30' onChange={(e) => handleCustomBrandTextChange(e.target.value) } />
          <label className='customInput-Label' htmlFor='customQuoteText' >Custom Quote:</label><input type='text' name='customQuoteText' id='customQuoteText' maxLength='68' onChange={(e) => handleCustomQuoteTextChange(e.target.value) } />
        </div>
      </ToggleSwitch>
    </div>
  )
}
