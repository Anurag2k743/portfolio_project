import React from 'react'
import menubtn from '../assets/images/menu.png'
import doller from '../assets/images/doller.png'
export default function Header() {
    return (
        <>
            <header className='space-top'>
                <div className="container">
                    <nav className='flex'>
                        <div className='flex left-sect'>
                            <div>
                                <img src={menubtn} alt='menubutton' />
                            </div>

                            <div className='doller-sect'>
                                <img src={doller} alt='doller' />
                            </div>
                        </div>

                        <div className='right-sect'>
                            <button className='btn'>WORK</button>
                            <button className='btn'>CONTACT</button>
                        </div>

                    </nav>
                </div>
            </header>
        </>
    )
}
