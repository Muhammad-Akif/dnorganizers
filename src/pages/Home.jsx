import React from 'react'
import SmoothScroll from 'smooth-scroll'
import Navigation from '../components/Navigation'

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})
export default function Home() {
    return (
        <div>
            <Navigation />
            <div class="gototop js-top">
                <a href="#" style={{backgroundColor: '#F14E95',borderRadius: '50px'}}><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
            </div>
        </div>
    )
}