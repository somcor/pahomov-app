import {
    ACTION_CHANGE_TOKEN,
    ACTION_RESET
} from '../index';
import image1 from '../images/item-1.png';
import image2 from '../images/item-2.png';

const initialState = {
    token: '',
    items: [
        {
            title: 'SHINGLAS многослойная черепица, Ранчо, Коричневый, 2 м2',
            amount: '78 уп.',
            singleprice: '589.00',
            price: '45 471.00',
            image: image1
        },
        {
            title: 'Черепица конька/карниза  (уп. 12 п.м / 20 п.м)',
            amount: '3 уп.',
            singleprice: '4 988.00',
            price: '13 717.00',
            image: image2
        }
    ]
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_TOKEN:
            return { 
                ...state,
                token: action.payload
            };  
        case ACTION_RESET: { 
                state = initialState
            };   
        default:
    }
    return state;
};