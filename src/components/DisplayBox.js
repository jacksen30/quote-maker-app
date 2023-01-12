import React from 'react'
import QuoteTextBox from './QuoteTextBox'


export default function DisplayBox(props) {
    const { quote, font } = props
  return (
    <div className='displayBox' style={{backgroundColor: props.backgroundColor}}>
        <QuoteTextBox quote={quote} font={font} />
    </div>

  )
}
