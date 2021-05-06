import React, { Component } from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Actualite from '../components/Actualite'
import ColectionImage from '../components/CollectionImage'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';



const Accueil =()=> {
    
        return (
            <div className="container-fluid">
                <Navigation/>
                <Footer/>
                {/* <ColectionImage/> */}

            </div>
        )
    
}

export default Accueil
