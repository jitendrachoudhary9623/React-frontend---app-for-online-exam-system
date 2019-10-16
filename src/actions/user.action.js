import {UPDATE_LOGIN} from "../action.types"
export function updateLogin(newUser){
    return {
        type:UPDATE_LOGIN,
        payload:newUser
    }
}