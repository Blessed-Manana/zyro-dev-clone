import '../banner/Banner.css'
import React, { useState, useRef, useEffect } from 'react'
// import {VscGlobeFree} from "react-icons/vsc"
// import {VPiHeadsetDuotone} from "react-icons/pi"
// import {BsShieldCheck} from "react-icons/bs"
import { FaGlobe } from 'react-icons/fa'
import { PiHeadsetDuotone }  from 'react-icons/pi'
import { BsShieldCheck } from 'react-icons/bs'


const Banner = () => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');

    const getLeftOverTime = (e) => {
        let total = Date.parse(e) - Date.parse(new Date());
        let seconds = Math.floor((total / 1000) % 60);
        let minutes = Math.floor((total / 1000 / 60) % 60);
        let hours = Math.floor((total / 1000 / 60 / 60) % 24);
        let days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            total, days, seconds, minutes, hours
        };
    }

    const startTimer = (e) => {
        let { total, days, seconds, minutes, hours } = getLeftOverTime(e);

        if (total >= 0) {
            setTimer(
                (days > 9 ? days : '0' + days) + ':' +
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':' +
                (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e) => {
        startTimer('00:00:00:59')

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)

        Ref.current = id;
    }

    const getDeadLine = () => {

        let deadline = new Date('2023-09-25');

        deadline.setSeconds(deadline.getSeconds() + 10);

        return deadline
    }

    useEffect(() => {
        clearTimer(getDeadLine());
    }, []);

    return (
        <div className="banner">
            <div className="space"></div>
            <div className="ad">
                <div className="gif">
                    <video autoplay="autoplay" loop="loop" muted="muted" playsinline="" className="video__frame">
                        <source src="hero.e87c7d8.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="campaign">
                    <h2>Flawless templates, easy editing, no coding required — that's Zyro website builder</h2>
                    <p>Build a website and save up to 78% with plans from $2.59/mo. Deal ends in:</p>
                    <div className="countdown">
                        <h2>
                            <span className="timer-digit">{timer[0]}{timer[1]}</span>
                            <span className="timer-separator">:</span>
                            <span className="timer-digit">{timer[3]}{timer[4]}</span>
                            <span className="timer-separator">:</span>
                            <span className="timer-digit">{timer[6]}{timer[7]}</span>
                            <span className="timer-separator">:</span>
                            <span className="timer-digit">{timer[9]}{timer[10]}</span>
                        </h2>
                    </div>
                    <button>Start for free</button>
                    <p>No credit card required</p>
                </div>
            </div>
            <div className="features">
                <button><FaGlobe style={{width:"52px", height: "52px", color:"#583bb6", padding:"16px", marginRight:"12px", backgroundColor:"#ece9f7", borderRadius: "8px"}}/> <span>domain for 1 year</span></button>
                <button><PiHeadsetDuotone style={{width:"52px", height: "52px", color:"#583bb6", padding:"16px", marginRight:"12px", backgroundColor:"#ece9f7", borderRadius: "8px"}}/> <span>24/7 customer support</span></button>
                <button><BsShieldCheck style={{width:"52px", height: "52px", color:"#583bb6", padding:"16px", marginRight:"12px", backgroundColor:"#ece9f7", borderRadius: "8px"}}/> <span>30-day money-back guarantee</span></button>
            </div>
        </div>
    );
}

export default Banner;