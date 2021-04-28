import React, { useState, useEffect } from 'react'
import SmoothScroll from 'smooth-scroll'
import Navigation from '../components/Navigation'
import Services from '../components/Services'
import Welcome from '../components/Welcome'
import Gallary from '../components/Gallary'
import Progress from '../components/Progress'
import { Team } from '../components/Team'
import Contact from '../components/Contact'
import Contect from '../components/Contect'
import Topbtn from '../components/Topbtn'
import JsonData from '../data/data.json'
import { useLocation } from 'react-router-dom';

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})


export default function Home() {
    const [landingPageData, setLandingPageData] = useState({})
    const location = useLocation();
    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
    return (
        <div className="home">
            <Navigation {...landingPageData.navigation} />
            <Welcome welcome={landingPageData.welcome} cardsData={landingPageData.welcomeCards} />
            <Services services={landingPageData.services} />
            <Gallary gallery={landingPageData.gallery} />
            <Progress progress={landingPageData.progress} />
            {/* <Feedback {...landingPageData.feedbacks} /> */}
            <Team data={landingPageData.Team} />
            <Contact />
            <Contect />
            <Topbtn />
        </div>
    )
}