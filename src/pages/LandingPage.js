//Class, For Rendering Component. Shortcut: rcc
import React, { Component } from 'react'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'
import landingPageJson from 'json/landingPage'

export default class LandingPage extends Component {

    constructor(props){
        super(props);
        //Ref / Section Position
        this.refMostPicked = React.createRef();
    }

    componentDidMount() {
        window.title = "Details Page"
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.refMostPicked} data={landingPageJson.hero}/>
                <MostPicked refMostPicked={this.refMostPicked} data={landingPageJson.mostPicked}/>
                <Categories data={landingPageJson.categories}/>
                <Testimony data={landingPageJson.testimonial}/>
                <Footer/>
            </>
        )
    }
}

