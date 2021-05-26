import React from 'react';
import Admin from '../../../admin/Admin';
import Display from '../Temp/Display';
// import AddMenuVenu from '../Temp/AddMenuVenu'
import { useSelector } from 'react-redux';

const Corporate = () => {
    const { corporateItems } = useSelector(state => state.items)
  return <Admin>
    <Display title='Corporate' Items={corporateItems}/>
    {/* <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-12">
          <AddMenuVenu title="menu" />
        </div>
        <div className="col-md-6 col-12">
          <AddMenuVenu title="venu" />
        </div>
      </div>
    </div> */}
  </Admin>
}

export default Corporate;