import React from 'react'
import Header from './Header'
import Services from './Services'
import Gallery from './Gallery'
import Contact from '../Contact'
import Contect from '../Contect'
import Feedback from './Feedback'
import data from '../../data/services.json'
import {useParams} from "react-router-dom"

export default function View() {
    const {name} = useParams()

    const event = data.view.filter((e)=>{
        if (e.name==name) {
            return true
        }
        return false
    })[0]
    return (
        <div>
            {/* <Header {...event}/> */}
            {/* <Services/> */}
            {/* <Gallery/> */}
            {/* <Feedback/> */}
            {/* <Contact/> */}
            <Contect/>
        </div>
    )
}
