import React from 'react'
import BrandTextBox from './BrandTextBox'

export default function QuoteTextBox(props) {
  const { quote, font, quoteFontSize, customBrandText, brandBorder } = props;

  return (
    <div className='quoteTextBox'>
      <p style={{fontFamily: font, fontSize: quoteFontSize}}>{quote}</p>
      <BrandTextBox customBrandText={customBrandText} brandBorder={brandBorder} />
    </div>
  )
}
