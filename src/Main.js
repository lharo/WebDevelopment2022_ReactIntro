import React, { useState } from 'react';
import { AddCounter } from './componenets/AddCounter';
import { ShowCounter } from './componenets/ShowCounter';

import './styles.css'
export const Main = () => {

  const [number, setNumber] = useState(0);
  const onAdd = () => {
    setNumber( number + 1);
    console.log('I added one ');
  }

  return (
    <>
      <ShowCounter number={number}/>
      <AddCounter onAddPress={onAdd}/>
      {/* RemoveCounter onRemovePress */}
    </>
  );
};
