import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../shop.svg'
import {MdAddShoppingCart} from 'react-icons/md'
import styled from 'styled-components';
import {} from '../styledComponents/button';
import {NavWrapper} from '../styledComponents/button';
import {ButtonContainer} from '../styledComponents/button'

export default class Navbar extends Component {
    render() {
        return (
         
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5  mb-30 p-20">
            
            <div className="container-fluid text-center d-sm-block ">
               <div className="row">
             
                   
                 
                   <div  className="col-sm-12  col-md-12 mx-auto col-lg-4">
                   <Link to='/'>
                            <ButtonContainer >
                            
                             karballah
                            </ButtonContainer>
                       </Link>
                   </div>
              
               </div>
           </div>
                    
                       
                
               

            </NavWrapper>
            
        )
    }
}
// <ul className="navbar-nav align-items-center">




