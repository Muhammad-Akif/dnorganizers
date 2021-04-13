import React, {useState,useEffect} from 'react'
import SmoothScroll from 'smooth-scroll'
import Navigation from '../components/Navigation'
import Services from '../components/Services'
import Welcome from '../components/Welcome'
import Gallary from '../components/Gallary'
import Progress from '../components/Progress'
import Feedback from '../components/Feedback'
import Contact from '../components/Contact'
import Contect from '../components/Contect'
import Topbtn from '../components/Topbtn'
import JsonData from '../data/data.json'

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})
export default function Home() {
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])
    return (
        <div>
            {console.log("testimolials",landingPageData.feedbacks)}
            <Navigation {...landingPageData.navigation}/>
            <Welcome welcome={landingPageData.welcome} cardsData={landingPageData.welcomeCards}/>
            <Services services={landingPageData.services}/>
            <Gallary gallery={landingPageData.gallery}/>
            <Progress progress={landingPageData.progress}/>
            <Feedback {...landingPageData.feedbacks}/>
            <Contact/>
            <Contect/>
            <Topbtn/>
        </div>
    )
}