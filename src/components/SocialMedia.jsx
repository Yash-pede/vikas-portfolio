import React from 'react'
import {BsInstagram, BsTwitter } from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div className="">
            <BsTwitter/>
        </div>
        <div className="">
            <FaFacebookF/>
        </div>
        <div className="">
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia