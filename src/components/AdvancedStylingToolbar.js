import React from 'react';
import ToggleSwitch from './ToggleSwitch';

export default function AdvancedStylingToolbar(props) {
  const { handleCustomQuoteTextChange } = props;

  return (
    <div className="advancedStylingToolbar">
      <ToggleSwitch label="Show Advanced Styling ToolBar:">
        <hr class="toolbar-dividing-line" />
        <div className="custom-quote-input-wrapper">
          <label className='customInput-Label text-input-label' htmlFor='customQuoteText'>Custom Quote:</label>
          <input type='text' name='customQuoteText' className='text-input' id='customQuoteText' placeholder='If you want to use a custom quote, add it here' maxLength='68' onChange={(e) => handleCustomQuoteTextChange(e.target.value) } />
        </div>
        {/* <p>More Options Will Be Placed Here Later</p> */}
      </ToggleSwitch>
    </div>
  )
}
