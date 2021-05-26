import React from 'react';
import Admin from '../../../admin/Admin';
import Display from '../Temp/Display'

import { useSelector } from 'react-redux';

const Main = () => {
  const { weddingItems } = useSelector(state => state.items)
  return (
    <Admin>
      <Display title="Wedding" Items={weddingItems}/>
    </Admin>
  )
}

export default Main