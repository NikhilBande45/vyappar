import React from "react";
import './Testinomial.css'

import testinomial_1 from '../../Assets/testinomial_1.png'
import testinomial_2 from '../../Assets/testinomial_2.png'
const Testinomial = () => {
  return (
    <div className="testinomial-container">
      <div className="testinomial-content">
        <div>
          <h1 className="testinomial-title">
            Why Choose <span id="us">Us?</span>
          </h1>
          <p className="testinomial-info">We are fully committed to elevating our clients to new heights</p>
        </div>

        <div className="seprator"/>

        <div className="testinomial-bottom-content">
            <div className="banner-1">
                <div className="text-content">
                    <h1 className="banner-title">Proven Solutions for Business Expansion.</h1>
                    <p className="banner-info">Gain insights into strategies, frameworks, and advice employed by top media buyers globally. Enjoy exclusive access to a robust Facebook structure that’s instrumental in scaling businesses beyond seven figures. </p>
                </div>

                <div className="image-container">
                    <img src={testinomial_2} />
                </div>
                
            </div>

            <div className="banner-1">

                <div className="image-container">
                    <img src={testinomial_1} />
                </div>
                
                <div className="text-content">
                    <h1 className="banner-title">Support available even on weekends.</h1>
                    <p className="banner-info">Providing an excellent user experience is our top priority. We offer top-ups and assistance with account issues even during weekends and holidays. </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testinomial;
