import React from 'react';
import Admin from '../../../admin/Admin';
import Display from './Display'

const Main = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Admin>
      <Display/>
    </Admin>
  )
}

export default Main