import React from 'react'
import BrandTextBox from './BrandTextBox'

export default function QuoteTextBox(props) {
  const { quote, font, instagram } = props

  return (
    <div className='quoteTextBox'>
        <p style={{fontFamily: font}}>"{quote}"</p>
        <BrandTextBox instagram={instagram}/>
    </div>
  )
}
