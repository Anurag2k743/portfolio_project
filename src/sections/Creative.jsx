import React from "react";
import Journay from "../assets/images/creative.png";

const Creative = () => {
  return (
    <>
      {/* Main section */}
      <section className="main-space">
        <div className="container">
          <div className="creative-wrap">
            {/* Left Image */}
            <div>
              <img src={Journay} alt="Creative Journey" />
            </div>

            {/* Right Content */}
            <div className="years">
              {/* Experience & Clients */}
              <div className="experience">
                <div>
                  <h3>8</h3>
                </div>
                <div>
                  <p>
                    Years <br />
                    Experience
                  </p>
                </div>
              </div>

              <div className="experience">
                <div>
                  <h3>14</h3>
                </div>
                <div>
                  <p>
                    Clients <br />
                    Worldwide
                  </p>
                </div>
              </div>

              {/* Creative journey text */}
              <div className="started">
                <h5>
                  My creative journey started in Rome where I studied for the
                  past years.
                </h5>
              </div>

              <div className="creative-text">
                <h2>MY CREATIVE JOURNEY</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="creative-content">
        <div className="container">
          <div className="content">
            <div>
              <p>
                I’ve been lucky to work with talented people and unique brands.
                Growth hacking sales learning curve stealth A/B testing
                ownership scrum project. Equity paradigm shift channels
                monetization startup buyer vesting period.
              </p>
            </div>
            <div>
              <p>
                My approach is to help my clients to visualize and communicate
                the best of themselves. Conversion prototype crowdfunding
                influencer early adopters launch party innovator creative niche
                market low hanging fruit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Creative;
