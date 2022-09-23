import React from "react";
import SectionOneGrid from "./SectionOneGrid";

const SectionOne = () => {
    return (
    <div className='section-one'>
        <h2>How can you collect <span>payments?</span></h2>
        <div className="grid-three">
            <SectionOneGrid title={"WEB SDK"} desc={"You can collect payments from your customers via cards and account transfers on your web platform by easily integrating our web SDK."} num={ '01' } />
            <SectionOneGrid title={"MOBILE SDK"} desc={"You can collect payments from your customers via cards and account transfers on your web platform by easily integrating our web SDK."} num={ '01' } />
            <SectionOneGrid title={"API"} desc={"You can collect payments from your customers via cards and account transfers on your web platform by easily integrating our web SDK."} num={ '01' } />
        </div>
        <hr />
    </div>
    );
};

export default SectionOne;
