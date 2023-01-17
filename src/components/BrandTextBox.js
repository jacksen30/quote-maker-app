import React, { useEffect } from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaCube  } from "react-icons/fa";

export default function BrandTextBox(props) {

  return (
    <>
      <div className='brandTextBox'><span className='brandingplusicon'>{props.icon}</span>{props.instagram}</div>
    </>
  )
}
