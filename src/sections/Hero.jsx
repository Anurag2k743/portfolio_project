import React from 'react'
import STARK from '../assets/images/banner.png'
import star from '../assets/images/star.png'

const Hero = () => {
    return (
        <>

            <section className='hero'>
                <div className="container">
                    <div className='banner'>
                        <div className='stark'>
                            <img src={STARK} alt="" />
                        </div>
                        <div>
                            <h1>
                                i’M <br />IVAN <br />STARK
                            </h1>
                        </div>
                    </div>
                </div>

                <div className='star'>
                    <img src={star} alt="" />
                </div>
            </section>

            <div className="container">
                <section className='digital space-top'>
                    <div className='flex'>
                        <div>
                            <div>
                                <h3>// a digital designer //</h3> </div></div>
                        <div className='circale'></div>
                    </div>

                    <div className='flex'>
                        <div className='circale'></div>
                        <div>
                            <h3>// a digital designer //</h3>
                        </div>
                    </div>
                </section >
            </div>

            <section className='space-top'>
                <div className="container">
                    <p>  <div className='space-top'>
                        <p>My approach is to help my clients to visualize and <br /> communicate the best of themselves.</p>
                    </div></p>
                </div>
            </section>
        </>
    )
}

export default Hero
