import React from 'react';
import Admin from '../../../admin/Admin';
import Display from '../Temp/Display'

import { useSelector } from 'react-redux';

const Main = () => {
  const [items, packages] = useSelector(state => [state.items.weddingItems, state.packages.wedding])
  // const {wedding, birthday, corporate} = useSelector(state => state.packages);
  console.log('aaaaaaaaaaaaaaaaaaaaa',packages)
  return (
    <Admin>
      <Display title="Wedding" Items={items} packages={packages}/>
    </Admin>
  )
}


export default Main