import React, { useState } from 'react'
import arrow from "../assets/images/arrow.png"
import vire from "../assets/images/vire.png"

const Exerience = () => {
    const [activeTab, setActiveTab] = useState("director");

    return (
        <>
            <section className='main-space'>
                <div className="container">
                    <h2>EXPERIENCE</h2>

                    <div className='present'>
                        {/* Left Side */}
                        <div className='present-left'>
                            <div
                                className={`director ${activeTab === "director" ? "active" : ""}`}
                                onClick={() => setActiveTab("director")}>
                                <p className='paret'>2023 - Present</p>
                                <div className='flex'>
                                    <h4>Art Directo</h4>
                                    <p>Victori</p>
                                </div>
                            </div>
                            <div
                                className={`Designer ${activeTab === "designer" ? "active" : ""}`}
                                onClick={() => setActiveTab("designer")} >
                                <p className='paret'>2023 - Present</p>
                                <div className='flex'>
                                    <h4>UX/UI Designer & Developer</h4>
                                    <p>Acumen</p>
                                </div>
                            </div>

                            <div
                                className={`Designer ${activeTab === "creative" ? "active" : ""}`}
                                onClick={() => setActiveTab("creative")} >
                                <p className='paret'>2023 - Present</p>
                                <div className='flex'>
                                    <h4>Creative Developer</h4>
                                    <p>Designify</p>
                                </div>
                            </div>

                        </div>



                        {/* Right Side */}
                        <div className='present-right'>
                            {activeTab === "director" && (
                                <p>Art Directo plan seed money value proposition startup client direct mailing bootstrapping MVP success hypotheses gen-z pivot iteration ecosystem. Hackathon burn rate influencer business-to-business series A financing metrics low hanging fruit advisor alpha iPhone disruptive seed round.</p>
                            )}
                            {activeTab === "designer" && (
                                <p>UX/UI Designer & Developer plan seed money value proposition startup client direct mailing bootstrapping MVP success hypotheses gen-z pivot iteration ecosystem. Hackathon burn rate influencer business-to-business series A financing metrics low hanging fruit advisor alpha iPhone disruptive seed round.</p>
                            )}
                            {activeTab === "creative" && (
                                <p>Creative Developer plan seed money value proposition startup client direct mailing bootstrapping MVP success hypotheses gen-z pivot iteration ecosystem. Hackathon burn rate influencer business-to-business series A financing metrics low hanging fruit advisor alpha iPhone disruptive seed round.</p>
                            )}

                            <div className='download-resume'>
                                <a href="">DOWLOAD RESUME</a>
                                <img src={arrow} alt='' />
                            </div>
                        </div>
                    </div>

                    {/* <div className='viretori'>
                            <img src={vire} alt="" />
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Exerience
