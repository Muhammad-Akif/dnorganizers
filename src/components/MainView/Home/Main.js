import React from 'react';
import Admin from '../../../admin/Admin';
import Modal from './Modal'

const Main = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Admin>
      <Modal />
    </Admin>
  )
}

export default Main