import React from "react";

const SectionThree = () => {
    return(
    <div className='section-three'>
      <h2 className="header">Why use Paylode <span> payments </span></h2>
      <div className="section-three-flex">
        <div className="section-three-flex-two">
            <div className="num">01</div>
            <div className="title">Account Transfers
            </div>
        </div>
        <div className="desc">Monnify provides a seamless payment experience for you and your customers online. Integrate Monnify and allow your customers to pay via mobile or internet banking, USSD and card.
        </div>
      </div>
      <div className="section-three-flex">
        <div className="section-three-flex-two">
            <div className="num">02</div>
            <div className="title">Instant Settlement
            </div>
        </div>
        <div className="desc">Get settled instantly on all your daily business transactions to help keep your cash flow healthy. (select payment methods only)..
        </div>
      </div>
      <div className="section-three-flex">
        <div className="section-three-flex-two">
            <div className="num">03</div>
            <div className="title">All Banks Supported
            </div>
        </div>
        <div className="desc">Monnify accepts payments from all banks in Nigeria
        </div>
      </div>
      <div className="section-three-flex">
        <div className="section-three-flex-two">
            <div className="num">04</div>
            <div className="title">Inteligent fraud detection
            </div>
        </div>
        <div className="desc">Eliminate all forms of fraud as Monnify guarantees you verified payments on every transaction.
        </div>
      </div>
    </div>
    )
};

export default SectionThree;
