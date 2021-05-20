export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
export const UPDATEWEDDING = 'UPDATEWEDDING';
export const UPDATEBIRTHDAY = 'UPDATEBIRTHDAY';
export const UPDATECORPORATE = 'UPDATECORPORATE';
export const UPDATEPENDINGINVOICES = 'UPDATEPENDINGINVOICES';
export const SETPENDINGINVOICES = 'SETPENDINGINVOICES';
export const UPDATEEVENTS = 'UPDATEEVENTS';
export const SETITEMS = 'SETITEMS'

export const authenticate = (uid, email, isAdmin, isAuth) => { // It will take credentials
    return {
        type: AUTHENTICATE,
        payload: {
            uid,
            email,
            isAdmin,
            isAuth
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

export const updateEvents = (objRes) => { //in objRes key is a firebase key and value is a package
    return {
        type: UPDATEEVENTS,
        payload: objRes
    }
}

export const updatePendingInvoices = object => { //{price, theme, menu, venu, eventName, isPackage, serPackName, serPackId, userEmail, bookDate, occuredDate, designerName, status}
    return {
        type: UPDATEPENDINGINVOICES,
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
