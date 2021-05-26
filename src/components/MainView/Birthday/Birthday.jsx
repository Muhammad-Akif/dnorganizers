import React from 'react';
import Admin from '../../../admin/Admin';
import Display from '../Temp/Display'
// import AddMenuVenu from '../Temp/AddMenuVenu'
import { useSelector } from 'react-redux';

const Birthday = () => {
  const [items, packages ] = useSelector(state => [state.items.birthdayItems, state.packages.birthday])
  return <Admin>
    <Display title="Birthday" Items={items} packages={packages}/>
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

export default Birthday