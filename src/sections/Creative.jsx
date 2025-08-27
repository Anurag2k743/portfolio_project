import React from 'react'
import Journay from "../assets/images/crative.png"
const Creative = () => {
  return (
    <>
      <section className='main-space'>
        <div className="container ">
          <div className='creative-wrap'>
            <div>
              <img src={Journay} alt="" />
            </div>
            <div className='years'>
              <div>
                <div className='flex'>
                  <h3>8</h3>
                  <p> Years  <br />
                    Experience</p>
                </div>
                <div className='flex'>
                  <h3>14</h3>
                  <p> Clients  <br />
                    Worldwide</p>
                </div>
              </div>

              <div className='started'>
                <h5>My creative journey started in Rome where I studied for the past years.</h5>
              </div>
            </div>
          </div>

          <div className='creative-text'>
            <h2>MY CREATIVE  JOURNEY</h2>
          </div>
        </div>
      </section>

      <section className='creative-content'>
        <div className="container">
          <div className='content'>
            <div>
              <p>I’ve been lucky to work with talented people and unique brands. Growth hacking sales learning curve stealth A/B testing ownership scrum project. Equity paradigm shift channels monetization startup buyer vesting period.</p>
            </div>
            <div>
              <p>My approach is to help my clients to visualize and communicate the best of themselves. Conversion prototype crowdfunding influencer early adopters aunch party innovator creative niche market low hanging fruit.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Creative
