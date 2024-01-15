import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagramSquare, FaYoutube, FaEnvelope, FaFileContract, FaUserShield } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <p>QUOTEMKR</p>
        </div>

        <div className='footer-middle'>
            <div className='footer-middle-lists-wrapper'>
                <ul className='footer-list'>
                    <li className='footer-list--title'>Other Tools</li>
                    <li className='footer-list--item'><a href="https://www.example.com">Shade Shifter App</a></li>
                    <li className='footer-list--item'><a href="https://www.example.com">Daily Motivation</a></li>
                    <li className='footer-list--item'><a href="https://www.example.com">Local Daily Deals</a></li>
                    <li className='footer-list--item'><a href="https://www.example.com">Simple Grocery List</a></li>
                </ul>
                <ul className='footer-list'>
                    <li className='footer-list--title'>Our Blog</li>
                    <li className='footer-list--item'><a href="https://www.example.com">Top Quotes of 2024</a></li>
                    <li className='footer-list--item'><a href="https://www.example.com">Best Elon Musk Quotes</a></li>
                    <li className='footer-list--item'><a href="https://www.example.com">Using Quotes to Gain Followers</a></li>
                    <li className='footer-list--item'><a href="https://www.example.com">How to use QuoteMkr</a></li>
                </ul>
            </div>
            <div className='footer-social-icon--wrapper'>
                <a className='footer-social-icon--item' href="https://www.example.com"><FaFacebookF /></a>
                <a className='footer-social-icon--item' href="https://www.example.com"><FaTwitter /></a>
                <a className='footer-social-icon--item' href="https://www.example.com"><FaInstagramSquare /></a>
                <a className='footer-social-icon--item' href="https://www.example.com"><FaYoutube /></a>
            </div>
        </div>
        <div className='footer-bottom'>
            <div>
                <a class='attribution-link'href="https://www.example.com">QuoteMkr developed by DevByJacksen</a>
            </div>
            <div>
                <a className='footer-legal-link' href="https://www.example.com"><FaEnvelope className='legal-icon' />Contact Us</a>
                <a className='footer-legal-link' href="https://www.example.com"><FaFileContract className='legal-icon' />Terms and Conditions</a>
                <a className='footer-legal-link' href="https://www.example.com"><FaUserShield className='legal-icon' />Privacy Policy</a>
            </div>
        </div>

    </div>
  )
}
