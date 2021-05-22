export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
export const UPDATEWEDDING = 'UPDATEWEDDING';
export const UPDATEBIRTHDAY = 'UPDATEBIRTHDAY';
export const UPDATECORPORATE = 'UPDATECORPORATE';
export const ADDPENDINGINVOICES = 'ADDPENDINGINVOICES';
export const SETPENDINGINVOICES = 'SETPENDINGINVOICES';
export const UPDATEEVENTS = 'UPDATEEVENTS';
export const SETITEMS = 'SETITEMS'
export const UPDATEPENDINGINVOICE = 'UPDATEPENDINGINVOICE';
export const DELETEPENDINGINVOICE = 'DELETEPENDINGINVOICE';

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
            email: ''
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

export const updateEvents = (objRes) => { //in objRes key is a firebase key and value is a package
    return {
        type: UPDATEEVENTS,
        payload: objRes
    }
}

export const addPendingInvoices = object => { //{price, theme, menu, venu, eventName, isPackage, serPackName, serPackId, userEmail, bookDate, occuredDate, designerName, status}
    return {
        type: ADDPENDINGINVOICES,
        payload: object
    }
}

export const deletePendingInvoices = id => { //firebase generated Id
    return {
        type: DELETEPENDINGINVOICE,
        payload: id
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
