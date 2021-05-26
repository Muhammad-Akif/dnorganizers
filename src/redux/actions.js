// export const AUTHENTICATE = "AUTHENTICATE";
// export const LOGOUT = "LOGOUT";
// export const UPDATEWEDDING = 'UPDATEWEDDING';
// export const UPDATEBIRTHDAY = 'UPDATEBIRTHDAY';
// export const UPDATECORPORATE = 'UPDATECORPORATE';
// export const ADDPENDINGINVOICES = 'ADDPENDINGINVOICES';
// export const SETPENDINGINVOICES = 'SETPENDINGINVOICES';
// export const UPDATEEVENTS = 'UPDATEEVENTS';
// export const SETITEMS = 'SETITEMS'
// export const UPDATEPENDINGINVOICE = 'UPDATEPENDINGINVOICE';
// export const DELETEPENDINGINVOICE = 'DELETEPENDINGINVOICE';

// export const authenticate = (uid, email) => { // It will take credentials
//     return {
//         type: AUTHENTICATE,
//         payload: {
//             uid,
//             email
//         }
//     }
// }

// export const logout = () => {
//     return {
//         type: LOGOUT,
//         payload: {
//             uid: '',
//             email: ''
//         }
//     }
// }

// export const updateWedding = (objRes) => { //in objRes key is a firebase key and value is a package
//     return {
//         type: UPDATEWEDDING,
//         payload: objRes
//     }
// }

// export const updateBirthday = (objRes) => { //in objRes key is a firebase key and value is a package
//     return {
//         type: UPDATEBIRTHDAY,
//         payload: objRes
//     }
// }

// export const updateCorporate = (objRes) => { //in objRes key is a firebase key and value is a package
//     return {
//         type: UPDATECORPORATE,
//         payload: objRes
//     }
// }

// export const addPendingInvoices = object => { //{price, theme, menu, venu, eventName, isPackage, serPackName, serPackId, userEmail, bookDate, occuredDate, designerName, status}
//     return {
//         type: ADDPENDINGINVOICES,
//         payload: object
//     }
// }

// export const deletePendingInvoices = id => { //firebase generated Id
//     return {
//         type: DELETEPENDINGINVOICE,
//         payload: id
//     }
// }

// export const setPendingInvoices = (object, email) => {
//     return {
//         type: SETPENDINGINVOICES,
//         payload: {
//             object,
//             email
//         }
//     }
// }

// export const updatePendingInvoices = (id, update) => { //id which we want to update and in update we have undated info
//     return {
//         type: UPDATEPENDINGINVOICE,
//         payload: {
//             id,
//             update
//         }
//     }
// }

// export const setItems = (wed, birth, corp) => { // obj that returned from firebase
//     return {
//         type: SETITEMS,
//         payload: {
//             wed,
//             birth,
//             corp
//         }
//     }
// }
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
export const UPDATEWEDDING = 'UPDATEWEDDING';
export const UPDATEBIRTHDAY = 'UPDATEBIRTHDAY';
export const UPDATECORPORATE = 'UPDATECORPORATE';
export const ADDPENDINGINVOICE = 'ADDPENDINGINVOICE';
export const SETPENDINGINVOICES = 'SETPENDINGINVOICES';
export const SETITEMS = 'SETITEMS';
export const DELETEPENDINGINVOICE = 'DELETEPENDINGINVOICE';
export const UPDATEPENDINGINVOICE = 'UPDATEPENDINGINVOICE';
export const SETBIRTHDAYITEMS = 'SETBIRTHDAYITEMS';
export const SETCORPORATEITEMS = 'SETCORPORATEITEMS';
export const SETWEDDINGITEMS = 'SETWEDDINGITEMS';
export const DELETEPACKAGE = 'DELETEPACKAGE';
export const ADDPACKAGE = 'ADDPACKAGE';
export const DELETEITEM = 'DELETEITEM';
export const ADDITEM = 'ADDITEM';
export const SETBOOKEDEVENTS = 'SETBOOKEDEVENTS'
export const UPDATEEVENTS = 'UPDATEEVENTS'

export const authenticate = (uid, email) => { // It will take credentials
    return {
        type: AUTHENTICATE,
        payload: {
            uid,
            email
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: {
            uid: '',
            email: '',
            isAdmin: true,
            isAuth: true
        }
    }
}

export const updateWedding = (objRes) => { //in objRes key is a firebase key and value is a package
    return {
        type: UPDATEWEDDING,
        payload: objRes
    }
}

export const updateBirthday = (objRes) => { //in objRes key is a firebase key and value is a package
    return {
        type: UPDATEBIRTHDAY,
        payload: objRes
    }
}

export const updateCorporate = (objRes) => { //in objRes key is a firebase key and value is a package
    return {
        type: UPDATECORPORATE,
        payload: objRes
    }
}

export const addPendingInvoice = object => { //{price, theme, menu, venu, eventName, isPackage, serPackName, serPackId, userEmail, bookDate, occuredDate, designerName, status}
    return {
        type: ADDPENDINGINVOICE,
        payload: object
    }
}

export const setPendingInvoices = (object, email) => {
    return {
        type: SETPENDINGINVOICES,
        payload: {
            object,
            email
        }
    }
}

export const updateEvents = (objRes) => { //in objRes key is a firebase key and value is a package
    return {
        type: UPDATEEVENTS,
        payload: objRes
    }
}

export const updatePendingInvoices = (id, update) => { //id which we want to update and in update we have undated info
    return {
        type: UPDATEPENDINGINVOICE,
        payload: {
            id,
            update
        }
    }
}

export const setItems = (wed, birth, corp) => { // obj that returned from firebase
    return {
        type: SETITEMS,
        payload: {
            wed,
            birth,
            corp
        }
    }
}

export const setBirthdayItems = (item) => { // obj that returned from firebase
    return {
        type: SETBIRTHDAYITEMS,
        payload: item
    }
}
export const setWeddingItems = (item) => { // obj that returned from firebase
    return {
        type: SETWEDDINGITEMS,
        payload: item
    }
}
export const setCorporateItems = (item) => { // obj that returned from firebase
    return {
        type: SETCORPORATEITEMS,
        payload: item
    }
}

export const deletePendingInvoices = id => { //firebase generated Id
    return {
        type: DELETEPENDINGINVOICE,
        payload: id
    }
}

export const deletePackage = (id, type) => { // type should be wedding | birthday | corporate
    return {
        type: DELETEPACKAGE,
        payload: {
            id,
            type
        }
    }
}

export const addPackage = (type, data) => { // type should be wedding | birthday | corporate
    return {
        type: ADDPACKAGE,
        payload: {
            package: data,
            type
        }
    }
}

export const deleteItems = (type, id, itemType) => { //type = weddingItems, birthdayItems, corporateItems
    //itemType = menu | venu
    return {
        type: DELETEITEM,
        payload: {
            type,
            id,
            itemType
        }
    }
}

export const addItems = (type, itemType, item) => { //type = weddingItems, birthdayItems, corporateItems
    //itemType = menu | venu
    //item = {id, name, price}
    return {
        type: ADDITEM,
        payload: {
            type,
            itemType,
            item
        }
    }
}

export const setBookedEvents = (object, email) => { //object = obj
    return {
        type: SETBOOKEDEVENTS,
        payload: {
            object,
            email
        }
    }
}


