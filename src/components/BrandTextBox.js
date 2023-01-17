import React, { useEffect } from 'react';

export default function BrandTextBox(props) {

  return (
    <>
      <div className='brandTextBox'><span className='brandingplusicon'>{props.icon}</span>{props.instagram}</div>
    </>
  )
}
