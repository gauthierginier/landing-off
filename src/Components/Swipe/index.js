import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import Card from '../../Components/Card';

export default class Swipe extends Component{  
      render() {
        return (
            <ReactSwipe className="carousel" swipeOptions={{continuous: true}}>
            
              
                <div className="slid"><Card/></div>
                <div className="slid"><Card/></div>
                <div className="slid"><Card/></div>
                <div className="slid"><Card/></div>
                <div className="slid"><Card/></div>
                <div className="slid"><Card/></div>
                <div className="slid"><Card/></div>
                <div className="slid"><Card/></div>
                </ReactSwipe>
        );
    }
}
