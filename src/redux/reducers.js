import { combineReducers } from "redux";
import transformIntoPackage from "../bariers/transformIntoPackages";
import transformIntoPendingInvoices from "../bariers/transformIntoPendingInvoices"
import PendingInvoices from '../Models/models/pendingInvoices';

import { AUTHENTICATE, UPDATEEVENTS, LOGOUT, SETPENDINGINVOICES, UPDATEBIRTHDAY, UPDATECORPORATE, UPDATEPENDINGINVOICES, UPDATEWEDDING } from "./actions";

// const initialAuthState = {
//     uid: '',
//     email: 'akifmuhammad321@gmail.com',
//     isAdmin: false,
//     isAuth: false
// }

// const authReducer = (state = initialAuthState, action) => {
//     switch (action.type) {
//         case AUTHENTICATE:
//             return {
//                 // ...state,
//                 uid: action.payload.uid,
//                 email: action.payload.email,
//                 isAdmin: action.payload.isAdmin,
//                 isAuth: action.payload.isAuth,
//             }
//         case LOGOUT:
//             return {
//                 // ...state,
//                 uid: action.payload.uid,
//                 email: action.payload.email,
//                 isAdmin: action.payload.isAdmin,
//                 isAuth: action.payload.isAuth,
//             }
//         default:
//             return state;
//     }
// }

const initialPackageState = {
    wedding: [],
    birthday: [],
    corporate: []
}

const packageReducer = (state = initialPackageState, action) => {
    switch (action.type) {
        case UPDATEBIRTHDAY:
            return {
                ...state,
                birthday: transformIntoPackage(action.payload)
            }
        case UPDATECORPORATE:
            return {
                ...state,
                corporate: transformIntoPackage(action.payload)
            }
        case UPDATEWEDDING:
            return {
                ...state,
                wedding: transformIntoPackage(action.payload)
            }
        case UPDATEEVENTS:
            return {
                birthday: transformIntoPackage(action.payload.birthpkg),
                corporate: transformIntoPackage(action.payload.corppkg),
                wedding: transformIntoPackage(action.payload.wedpkg)
            }
        default:
            return state;
    }
}

const initialInvoiceState = {
    pendingInvoices: []
}

const invoiceReducer = (state = initialInvoiceState, action) => {
    switch (action.type) {
        case UPDATEPENDINGINVOICES:
            const { payload } = action;
            return {
                pendingInvoices: [
                    ...state.pendingInvoices,
                    new PendingInvoices(
                        payload.price,
                        payload.theme,
                        payload.menu,
                        payload.venu,
                        payload.eventName,
                        payload.isPackage,
                        payload.serPackName,
                        payload.serPackId,
                        payload.userEmail,
                        payload.bookDate,
                        payload.occuredDate,
                        payload.designerName,
                        payload.status
                    )
                ]
            }
        case SETPENDINGINVOICES:
            return {
                pendingInvoices: transformIntoPendingInvoices(action.payload)
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    // auth: authReducer,
    packages: packageReducer,
    invoices: invoiceReducer
})

export default rootReducer
