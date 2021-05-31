import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import { Paper } from '@material-ui/core'
import img1 from '../images/Carousel/img1.jpeg';
import img2 from '../images/Carousel/img2.jpg'
import img3 from '../images/Carousel/img3.jpg'
import { Link } from "react-router-dom"
import img4 from '../images/Carousel/img4.jpg'
import img5 from '../images/Carousel/img5.jpg'
import img6 from '../images/Carousel/img6.jpg'
import "../style/SecondExample.scss"

function Project(props) {
    return (
        <Paper className="Project" elevation={10}>
            <img src={props.item.image} className="img" alt="slider-images" />
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <div className="display-t">
                            <div className="display-tc animate-box" data-animate-effect="fadeIn">
                                <h1 className="viewTitle">Welcome to <br />{props.title}</h1>
                                <h2>{props.cote}</h2>
                                <button type="button" class="btn btn-danger"><Link to='/login'><strong>Book Now</strong></Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </Paper>
    )
}

const items = [
    {
        image: img1,
    },
    {
        image: img2,
    },
    {
        image: img3,
    },
    {
        image: img4,
    },
    {
        image: img5,
    },
    {
        image: img6,
    }
]

export default class Recents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            animation: "fade",
            indicators: true,
            timeout: 400,
            navButtonsAlwaysVisible: false,
            navButtonsAlwaysInvisible: false
        }

        autoBind(this);
    }

    toggleAutoPlay() {
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    toggleIndicators() {
        this.setState({
            indicators: !this.state.indicators
        })
    }

    toggleNavButtonsAlwaysVisible() {
        this.setState({
            navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
        })
    }

    toggleNavButtonsAlwaysInvisible() {
        this.setState({
            navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
        })
    }

    changeAnimation(event) {
        this.setState({
            animation: event.target.value
        })
    }

    changeTimeout(event, value) {
        this.setState({
            timeout: value
        })
    }

    render() {
        return (
            <div id="carousel">
                {/* <h2>Recent Works</h2> */}
                {/* <div className="line" style={{width: '0%'}} /> */}
                <div className="slider">
                    <Carousel
                        className="SecondExample"
                        autoPlay={this.state.autoPlay}
                        animation={this.state.animation}
                        indicators={this.state.indicators}
                        timeout={this.state.timeout}
                        navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                        navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                    >
                        {
                            items.map((item, index) => {
                                return <Project item={item} key={index} {...this.props}/>
                            })
                        }
                    </Carousel>
                </div>
            </div>
        )
    }
}