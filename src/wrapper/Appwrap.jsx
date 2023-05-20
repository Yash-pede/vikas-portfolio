import React from 'react'
import {Navigationdots,SocialMedia} from '../components'


const Appwrap = (Component, idName, classNames) => function HOC () {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia/>
      <div className='app__wrapper app__flex'>
          <Component/>
      </div>
      {/* <div className='copyright'>
        <p>@VIKAS</p>
        <p>All Rights Reserved</p>
      </div> */}
      <Navigationdots active={idName}/> 
    </div>
  )
}

export default Appwrap