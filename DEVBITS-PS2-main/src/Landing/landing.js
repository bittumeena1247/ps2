import React from 'react';
import './landing.css';
import TradingInstruments from './tradingInstruments';
const Landing = () => {
    return (
        <>
            <div className="landingPageMain">
                <div className="landingBg">
                    <img className="landingBg1" src="../assets/lado.png" alt="" />
                    <img className="landingBg2" src="../assets/lado.png" alt="" />
                    <img className="landingBg3" src="../assets/bg4.jpg" alt="" />
                    <div className="landingMsgContainer">
                            <h1 className="landingMsg">
                            MEET THE NEW STANDARDS FOR MARKET TRADING <span className="landingDomainName"></span>
                            </h1>
                    </div>
                </div>
                <TradingInstruments/>

            </div>
        </>
    );
};
export default Landing;