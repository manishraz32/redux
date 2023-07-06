import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants'

const initialState = {
    cardData: []
}

export default function cardItems(state=[], action) {
    console.log("reducerActions", action)
    switch(action.type) {
        case ADD_TO_CART:
            console.log("addtocart", action)
            return [
                ...state,
                { cardData: action.data }
            ]
            break;
        
        case REMOVE_FROM_CART:
            console.log("addtocart", action)
            state.pop();
            return [
                ...state
            ]
            break;    

        default: 
            return state;    
    }
}