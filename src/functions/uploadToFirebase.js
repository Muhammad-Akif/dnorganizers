import firebase from '../config/firebase';
import { addItems, addPackage } from '../redux/actions';

const uploadToFirebase = (reference, pushData, SucAlertMessageTitle, SucAlertMessageDesc, failAlertTitle, failAlertDesc, dispatch, action) => {
    firebase.database().ref(reference).push(pushData).then((data) => {
        alert(SucAlertMessageTitle, SucAlertMessageDesc, [{ text: 'Ok' }])
        //success callback
        // dispatch(addPendingInvoice({ ...invoice, id: data.key }))
        if (action == 'addVenu') {

            dispatch(addItems('weddingItems', 'venu', {...pushData, id: data.key }));
        } else if(action == 'corAddVenu') {

            dispatch(addItems('corporateItems', 'venu', {...pushData, id: data.key }));
        } else if (action == 'birAddVenu') {

            dispatch(addItems('birthdayItems', 'venu', {...pushData, id: data.key }));
        } else if (action == 'addPackage') {

            dispatch(addPackage('wedding', {...pushData, id: data.key}))
        } else if (action == 'corAddPackage') {

            dispatch(addPackage('corporate', {...pushData, id: data.key}))
        } else if (action == 'birAddPackage') {

            dispatch(addPackage('birthday', {...pushData, id: data.key}))
        } else if (action == 'addMenu') {

            dispatch(addItems('weddingItems', 'menu', {...pushData, id: data.key }));
        } else if (action == 'corAddMenu') {

            dispatch(addItems('corporateItems', 'menu', {...pushData, id: data.key }));
        } else if (action == 'birAddMenu') {
            
            dispatch(addItems('birthdayItems', 'menu', {...pushData, id: data.key }));
        }

    }).catch((error) => {
        //error callback
        alert(failAlertTitle, failAlertDesc, [{ text: 'OK', style: 'destructive' }])
    })
}

export default uploadToFirebase;
