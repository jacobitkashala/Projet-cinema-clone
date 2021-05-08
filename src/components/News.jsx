import React,{ useCallback,useContext } from 'react';
import Actualite from './Actualite';
import CollectionImg from './CollectionImage';
import CardList from './CardList';
import Heroset from './Heroset';
import {useGetData} from '../useComponent/UseStateAll';

export default function News() {   
  
    return (
        <div>  
            <Actualite />   
            <CardList/>
            <CollectionImg/>
            <Heroset/>  
        </div>
    )
}
