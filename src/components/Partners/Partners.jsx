import React from 'react'
import './Partners.css'
import youtube from '../../Assets/youtube.png'
import instagram from '../../Assets/instagram.webp'
import snapchat from '../../Assets/snapchat.webp'
import tiktok from '../../Assets/tiktok.webp'
import google from '../../Assets/google.webp'
const Partners = () => {
  return (
    <div className='partner-container'>
        <div className="partner-content">
            <h1 className='partner-heading'>Our Partners</h1>
            <div className='partners-icon'>
                <img src={youtube} alt="" className='partner'/>
                <img src={instagram} alt="" className='partner'/>
                <img src={snapchat} alt="" className='partner'/>
                <img src={tiktok} alt="" className='partner'/>
                <img src={google} alt="" className='partner'/>
            </div>
        </div>
    </div>
  )
}

export default Partners
