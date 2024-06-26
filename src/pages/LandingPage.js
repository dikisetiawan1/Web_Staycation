
import Header from "parts/Header";
import Hero from "parts/Hero";
import landingPage from "json/landingPage.json";
import React, { Component } from "react";
import MostPicked from "parts/MostPicked";



export default class LandingPage  extends Component{

  constructor(props){
      super(props);
      this.refMostPicked = React.createRef();
  }


  render(){

    return (
    <>
    <Header {...this.props}/> 
    <Hero refMostPicked={this.refMostPicked}  data={landingPage.hero} />
    <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
  
    </>
  )
}
}

