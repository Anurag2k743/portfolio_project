import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <section className="contact-section">
                    {/* Left Column */}
                    <div className="contact-left">
                        <p>
                            Advisor leverage infographic influencer. Equity business plan
                            virality monetization lean startup validation conversion seed round
                            hackathon crowdsource entrepreneur low hanging fruit ecosystem
                            buzz.
                        </p>
                    </div>


                    <div className="contact-middle">

                        <p className="contact-heading">Address</p>

                        <h5>
                            VIA FRANCESCO <br />
                            DEL GIUDICE 86 <br />
                            ROME, ITALY
                        </h5>
                        <div className="call-sections">
                            <p className="contact-heading">Call</p>
                            <h5 className="contact-bold">(862) 258-1210</h5>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="contact-right">
                        <p className="contact-heading">Follow Me</p>

                        <h5>DRIBBBLE  <br />
                            LINKEDIN <br />
                            BEHANCE <br />
                            INSTAGRAM
                        </h5>
                    </div>
                </section>
            </div>
        </footer>
    );
}
