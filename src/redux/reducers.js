import { combineReducers } from "redux";
import transformIntoPackage from "../bariers/transformIntoPackages";
import transformIntoPendingInvoices from "../bariers/transformIntoPendingInvoices"
import transformIntoItems from "../bariers/transformIntoItems"
import PendingInvoices from '../Models/models/pendingInvoices';

import { AUTHENTICATE, UPDATEEVENTS, LOGOUT, SETPENDINGINVOICES, UPDATEBIRTHDAY, UPDATECORPORATE, UPDATEPENDINGINVOICES, UPDATEWEDDING,SETITEMS } from "./actions";

const initialAuthState = {
    uid: '',
    email: ''
}

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                // ...state,
                uid: action.payload.uid,
                email: action.payload.email
            }
        case LOGOUT:
            return {
                // ...state,
                uid: action.payload.uid,
                email: action.payload.email
            }
        default:
            return state;
    }
}

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
                        payload.noOfPeople,
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

const initialItemState = {
    weddingItems: [],
    birthdayItems: [],
    corporateItems: []
}

const itemReducer = (state = initialItemState, action) => {
    switch (action.type) {
        case SETITEMS:
            return {
                weddingItems: transformIntoItems(action.payload.wed),
                birthdayItems: transformIntoItems(action.payload.birth),
                corporateItems: transformIntoItems(action.payload.corp)
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    auth: authReducer,
    packages: packageReducer,
    invoices: invoiceReducer,
    items: itemReducer
})

export default rootReducer
