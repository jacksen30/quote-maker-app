import React from 'react'
import QuoteTextBox from './QuoteTextBox'


export default function DisplayBox(props) {
    const { quote, font, quoteFontSize, customBrandText } = props
  return (
    <div className='displayBox' id='displaybox' style={{backgroundColor: props.backgroundColor}}>
        <QuoteTextBox quote={quote} font={font} quoteFontSize={quoteFontSize} customBrandText={customBrandText} />
    </div>

  )
}
