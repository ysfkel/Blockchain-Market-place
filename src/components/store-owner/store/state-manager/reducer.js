
import * as actions from './actions';
import * as states from './state';
export const storeReducer = (state = states.StoreState, action) => {

   switch(action.type) {
       
        case actions.GET_USER_STORES: {
              console.log(action)

              return state;
        }
        default: {
            return state;
        }
   }
      
}