import React from 'react';
import Admin from '../../../admin/Admin';
import Modal from './Modal'
// import firebase from '../../../config/firebase';

const Main = () => {
  const [modalShow, setModalShow] = React.useState(false);

  // const getdata = () => {
  //     firebase.database().ref('/events/birthday/items/menu').on('value', function (snapshot) {
  //       // console.log(snapshot.val())
  //       let data = snapshot.val()
  //       for(var item in data) {
  //           console.log(data[item].name)
  //       }
  //     });
  // }
  
  return(
    <Admin>
      <Modal/>
      {/* <button onClick={getdata}>get</button> */}
    </Admin>
  ) 
}

export default Main