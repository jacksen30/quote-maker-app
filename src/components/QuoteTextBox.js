import React from 'react'
import BrandTextBox from './BrandTextBox'

export default function QuoteTextBox(props) {
  const { quote, font, customBrandText } = props

  return (
    <div className='quoteTextBox'>
      <p style={{fontFamily: font}}>"{quote}"</p>
      <BrandTextBox customBrandText={customBrandText} />
    </div>
  )
}
