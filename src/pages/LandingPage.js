
import Header from "parts/Header";
import Hero from "parts/Hero";
import landingPage from "json/landingPage.json";
import { Component } from "react";



export default class LandingPage  extends Component{
  render(){

    return (
    <>
    <Header {...this.props}/> 
    <Hero data={landingPage.hero} />
  
    </>
  )
}
}

