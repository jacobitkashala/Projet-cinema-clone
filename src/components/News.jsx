import React from 'react';
import Actualite from './Actualite';
import CollectionImg from './CollectionImage';
import CardList from './CardList';
import SousMenu from './Menuenf';
import Heroset from './Heroset';
import Footer from './Footer';


export default function News() {
    return (
        <div>
            <SousMenu/>
            <Actualite/>   
            <CardList/>
            <CollectionImg/>
            <Heroset/>
           
            
        </div>
    )
}
