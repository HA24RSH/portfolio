import React from 'react'
import '../styles/Intro.css'

const Intro = () => {
    return (
        <div id='intro' className='intro'>
            <div className='intro-image'>
                <img src='https://media.licdn.com/dms/image/v2/D4D03AQE5DVR6GBOS-g/profile-displayphoto-shrink_400_400/B4DZZ90hNIGgAg-/0/1745867642094?e=1751500800&v=beta&t=YCOtvU9m8JIESk2pBoM7IGYL9Hixnpu0RIpPvpUbdRM'
                    alt='Profile Pic' />
            </div>
            <div className='intro-text'>
                <h2>Hello,</h2>
                <h1>I'm Harshvardhan Gadagade</h1>
                <h3>M-E-R-N Stack Developer | Mobile App Developer (React-Native)</h3>
            </div>
        </div>
    )
}

export default Intro