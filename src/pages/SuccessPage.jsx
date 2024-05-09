import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import success from '../assets/success.png';

const SuccessPage = () => {
    const [time, setTime] = useState(5);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        if (time === 0) {
            clearTimeout(timer); 
            window.location.href = '/'; 
        }

        return () => clearTimeout(timer); 
    }, [time]);

    return (
        <>
            <Navbar Page="congrats"/>

            <div className="congratsDiv">
                <div className="successImgDiv">
                    <img className='successImg' src={success} alt="success" />
                    <p className='headerQuote successHead'>Success submitted</p>
                </div>
                <div className="successMssg">
                    <p className='regHeaderDesc'>Congratulations</p>
                    <p className='successMssgDesc'>Your request has been successfully submitted to us. We will validate your information and reach out to you shortly with updates</p>
                </div>
            </div>

            <div className="redirectParaDiv">
                <p className='redirectPara'>Redirecting you to Homepage in <span>{time} Seconds</span></p>
            </div>
        </>
    );
}

export default SuccessPage;
