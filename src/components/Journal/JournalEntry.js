import React from 'react'

const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div className='journal__entry-picture'
        style={{
            backgroundSize:'cover',
            backgroundImage:'url(https://www.nationalgeographic.com.es/medio/2023/01/12/imagen-de-un-atomo_952cc086_230112124807_1280x988.jpg)'
        }}>
        </div>
        <div className='journal__entry-body'>
            <p className='journal__entry-title'>un nuevo día</p>
            <p className='journal__entry-content'>
                 qwertyywregqwi greqyew qiwegrqwiegrq xwigiu
            </p>
        </div>
        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}

export default JournalEntry