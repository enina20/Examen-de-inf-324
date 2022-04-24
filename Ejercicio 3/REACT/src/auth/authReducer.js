import { types } from '../types/types';

// const state = {
//     name: 'Fernando',
//     logged: true,
//        type: 1
// }

export const authReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                data: {user:[{User_Name_: ''}]},
                logged: false,
                type: 0
            }
    
        default:
            return state;
    }
}