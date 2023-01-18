import React, { useContext } from 'react';
import { IconContext } from './App'

export default function BrandTextBox(props) {
  const icon = useContext(IconContext)

  return (
    <>
      <div className='brandTextBox'><span className='brandingplusicon'>{icon}</span>{props.customBrandText}</div>
    </>
  )
}
