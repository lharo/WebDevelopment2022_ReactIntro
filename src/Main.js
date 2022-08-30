// rafc React Functional Component
// rafce React Functional Component + Export
import React from 'react';
import { FirstComponents } from './componenets/FirstComponents';

import './styles.css'
// const myVariable = 'This is a var'
export const Main = () => {
    
    // Can only return one item
    return (
        // <>
        //     <ShowCounter number={5}/>
        //     <AddCounter number={5}/>
        // </>
        <FirstComponents 
            title="Mi titulo"
            // subtitle="Hola"
        />
  );
};
