import React from "react";

const SectionOne = () => {
    return (
    <div className='section-one'>
        <h2>How can you collect <span>payments?</span></h2>
        <div className="grid-three">
            <div className="item">
                <div className="blue-bg">
                    <p className="title">WEB SDK</p>
                    <p className="description">You can collect payments from your customers via cards and account transfers on your web platform by easily integrating our web SDK.</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <h1>01</h1>
            </div>
            <div className="item">
                <div className="blue-bg">
                    <p className="title">MOBILE SDK</p>
                    <p className="description">You can collect payments from your customers via cards and account transfers on your web platform by easily integrating our web SDK.</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <h1>02</h1>
            </div>
            <div className="item">
                <div className="blue-bg">
                    <p className="title">API</p>
                    <p className="description">You can collect payments from your customers via cards and account transfers on your web platform by easily integrating our web SDK.</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <h1>03</h1>
            </div>
        </div>
        <hr />
    </div>
    );
};

export default SectionOne;
