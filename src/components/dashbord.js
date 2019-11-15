import React, { Component } from 'react';
import Links from './dumbComponents/links';


import Article from './dumbComponents/article';
import {Photo} from '../photoData'






export default class Dashboard extends Component {
    state={
        photo:  Photo,

    }
   
    render() {
       
         return (
            
         <div className="back">
             
            
              <Article  photo={this.state.photo}/>
          </div> 
           

        )
    }
}
