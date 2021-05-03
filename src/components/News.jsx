import React from 'react';
import Actualite from './Actualite'
import CollectionImg from './CollectionImage'
import CardList from './CardList'


export default function News() {
    return (
        <div>
          <Actualite/>   
            <CardList/>
          <CollectionImg/>
        </div>
    )
}
