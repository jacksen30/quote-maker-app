import React, { useContext } from 'react';
import { IconContext } from './App'

export default function BrandTextBox(props) {
  const icon = useContext(IconContext)

  return (
    <>
      <div className='brandTextBox'><div className='inner-container' style={{border: `${props.brandBorder.width} solid ${props.brandBorder.color}`, borderRadius: `${props.brandBorder.radius}`}}><span className='brandingplusicon'>{icon}</span>{props.customBrandText}</div></div>
    </>
  )
}
