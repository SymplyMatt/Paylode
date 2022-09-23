import React from "react";

const SectionTwo = () => {
    return(
        <div className="section-two">
            <div className="left-flex">
                <h2>How can your customer make <span>payment?</span></h2>
                <div className="left-flex-two">
                    <div className="item">
                        <div className="section-two-img"><img src="images/db-icon.png" alt="" /></div>
                        <div className="item-flex">
                            <h4 className="section-two-title">USSD, Mobile & internet Transfers</h4>
                            <div className="section-two-desc">As a Paylode merchant, your customers can make payment to you, online or in-person, via a simple interbank transfer using USSD, their bank app or however they prefer.
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="section-two-img"><img src="images/biker.png" alt="" /></div>
                        <div className="item-flex">
                            <h4 className="section-two-title">Debit / Credit Cards</h4>
                            <div className="section-two-desc">Paylode allows you receive payments via debit cards online, while offering the most competitive transaction fees obtainable. Cards can also be tokenized for convenient recurring billing on cards.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-two-right-bg"></div>
        </div>
    )
};

export default SectionTwo;
