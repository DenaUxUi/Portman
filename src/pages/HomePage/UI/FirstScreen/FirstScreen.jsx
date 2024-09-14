import React from 'react'
import "./FirstScreen.css"
import Logo from './../../../../shared/UI/Logo/Logo';
import "../../../../app/Fonts/typograhy.css"


function FirstScreen() {
  return (
    <div className='first-screen-bg'>
      <div className='frame'>
        <Logo className="frame-title" />
        <div className='line'/>
        <p className='PT-sans body-text white'>САНКТ-ПЕТЕРБУРГ</p>
      </div>
      <p className='PT-sans sub-text white limited-width'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto hic optio provident. Nemo voluptas culpa reiciendis at sint iure voluptatem commodi accusantium inventore, quos nulla quae, veniam a exercitationem dicta.</p>
    </div>
  )
}

export default FirstScreen
