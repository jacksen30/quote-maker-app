import React from 'react';
import ToggleSwitch from './ToggleSwitch';

export default function AdvancedStylingToolbar(props) {
  const { handleCustomQuoteTextChange, handleBrandBorderChange } = props;

  return (
    <div className="advancedStylingToolbar">
      <ToggleSwitch label="Show Advanced Styling ToolBar:" uniqueId="advancedStylingToolbar-toggle">
        <hr className="toolbar-dividing-line" />
        <div className="custom-quote-input-wrapper">
          <label className='customInput-Label text-input-label' htmlFor='customQuoteText'>Custom Quote:</label>
          <input type='text' name='customQuoteText' className='text-input' id='customQuoteText' placeholder='If you want to use a custom quote, add it here' maxLength='68' onChange={(e) => handleCustomQuoteTextChange(e.target.value) } />
        </div>
        <fieldset className='branding-border-btn-div'>
          <legend>Add Border to Branding:</legend>
          <fieldset className='branding-border-thickness-btn-div'>
            <legend>Border Thickness:</legend>
            <div>
              <input className='radio-btn-input' type='radio' name='border-thickness' id='brand-border-none' onClick={() => handleBrandBorderChange('width', '0px')}></input>
              <label className='radio-btn-label' htmlFor='brand-border-none'>None</label>
            </div>
            <div>
              <input className='radio-btn-input' type='radio' name='border-thickness' id='brand-border-thin' onClick={() => handleBrandBorderChange('width', '1px')} />
              <label className='radio-btn-label' htmlFor='brand-border-thin'>Thin</label>
            </div>
            <div>
              <input className='radio-btn-input' type='radio' name='border-thickness' id='brand-border-medium' onClick={() => handleBrandBorderChange('width', '2px')} />
              <label className='radio-btn-label' htmlFor='brand-border-medium'>Medium</label>
            </div>
            <div>
              <input className='radio-btn-input' type='radio' name='border-thickness' id='brand-border-thick' onClick={() => handleBrandBorderChange('width', '3px')}  />
              <label className='radio-btn-label' htmlFor='brand-border-thick'>Thick</label>
            </div>
          </fieldset>
          <fieldset className='branding-border-color-btn-div'>
            <legend>Border Color:</legend>
            <div>
              <input className='radio-btn-input' type='radio' name='border-color' id='brand-border-color-white' onClick={() => handleBrandBorderChange('color', 'white')}></input>
              <label className='radio-btn-label' htmlFor='brand-border-color-white'>White</label>
            </div>
            <div>
              <input className='radio-btn-input' type='radio' name='border-color' id='brand-border-color-black' onClick={() => handleBrandBorderChange('color', 'black')} />
              <label className='radio-btn-label' htmlFor='brand-border-color-black'>Black</label>
            </div>
            <div>
              <input className='radio-btn-input' type='radio' name='border-color' id='brand-border-color-gray' onClick={() => handleBrandBorderChange('color', 'gray')} />
              <label className='radio-btn-label' htmlFor='brand-border-color-gray'>Gray</label>
            </div>
            <div>
              <input className='radio-btn-input' type='radio' name='border-color' id='brand-border-color-pink' onClick={() => handleBrandBorderChange('color', 'deeppink')}  />
              <label className='radio-btn-label' htmlFor='brand-border-color-pink'>Pink</label>
            </div>
          </fieldset>
          <fieldset className='branding-border-radius-btn-div'>
            <legend>Border Radius:</legend>
            <div>
              <input className='radio-btn-input' type='radio' name='border-radius' id='brand-border-radius-square' onClick={() => handleBrandBorderChange('radius', '0px')}></input>
              <label className='radio-btn-label' htmlFor='brand-border-radius-square'>Square</label>
            </div>
            <div>
              <input className='radio-btn-input' type='radio' name='border-radius' id='brand-border-radius-rounded' onClick={() => handleBrandBorderChange('radius', '30px')} />
              <label className='radio-btn-label' htmlFor='brand-border-radius-rounded'>Rounded</label>
            </div>
          </fieldset>
        </fieldset>
      </ToggleSwitch>
    </div>
  )
}
