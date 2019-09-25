import {
    ACTION_CHANGE_TOKEN,
    ACTION_RESET
} from '../index';

export const changeToken = (value) => {
    return {
        type: ACTION_CHANGE_TOKEN,
        payload: value
    }  
}

export const reset = () => {
    return {
        type: ACTION_RESET
    }
}




