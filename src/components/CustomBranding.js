import React from 'react';
import ToggleSwitch from './ToggleSwitch';

export default function CustomBranding(props) {
  const { handleCustomBrandTextChange, handleIconChange } = props;

  return (
    <div className="customBrandingToolbar">
      <ToggleSwitch label="Show Custom Branding ToolBar:" uniqueId="customBrandingToolbar-toggle" initialToggled={true} >
        <hr className="toolbar-dividing-line" />
        <div className='customTextInput-wrapper'>
          <div className='username-input-wrapper'>
            <label className='customInput-Label text-input-label' htmlFor='customBrandText'>Add Brand or Social Page:</label>
            <input type='text' name='customBrandText' className='text-input' id='customBrandText' placeholder='Enter your user name here' maxLength='30' onChange={(e) => handleCustomBrandTextChange(e.target.value) } />
          </div>
        </div>

        <fieldset className='radio-btn-div radio-btn-div--social'>
          <legend>Add Icon:</legend>
          <div>
            <input className='radio-btn-input' type='radio' name='icon' id='icon-none' onClick={() => handleIconChange('none-icon')}></input>
            <label className='radio-btn-label' htmlFor='icon-none'>None</label>
          </div>
          <div>
            <input className='radio-btn-input' type='radio' name='icon' id='icon-instagram' onClick={() => handleIconChange('instagram-icon')} />
            <label className='radio-btn-label' htmlFor='icon-instagram'>Instagram</label>
          </div>
          <div>
            <input className='radio-btn-input' type='radio' name='icon' id='icon-facebook' onClick={() => handleIconChange('facebook-icon')} />
            <label className='radio-btn-label' htmlFor='icon-facebook'>Facebook</label>
          </div>
          <div>
            <input className='radio-btn-input' type='radio' name='icon' id='icon-twitter' onClick={() => handleIconChange('twitter-icon')}  />
            <label className='radio-btn-label' htmlFor='icon-twitter'>Twitter</label>
          </div>
        </fieldset>

      </ToggleSwitch>
    </div>
  )
}
