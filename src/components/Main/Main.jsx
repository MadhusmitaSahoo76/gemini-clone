import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                   <p><span>Hello, Jyoti.</span></p> 
                   <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="cards">
                    <p>Briefly summerize this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="cards">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="cards">
                    <p>Improve the readbility of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Main