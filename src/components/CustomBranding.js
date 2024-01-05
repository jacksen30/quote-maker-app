import React from 'react';
import ToggleSwitch from './ToggleSwitch';

export default function CustomBranding(props) {
  const { handleCustomBrandTextChange, handleIconChange } = props;

  return (
    <div className="customBrandingToolbar">
      <ToggleSwitch label="Show Custom Branding ToolBar:" initialToggled={true} >
        <hr class="toolbar-dividing-line" />
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
          <div className='username-input-wrapper'>
            <label className='customInput-Label text-input-label' htmlFor='customBrandText'>Add Brand or Social Page:</label>
            <input type='text' name='customBrandText' className='text-input' id='customBrandText' placeholder='Enter your user name here' maxLength='30' onChange={(e) => handleCustomBrandTextChange(e.target.value) } />
          </div>
        </div>
      </ToggleSwitch>
    </div>
  )
}
