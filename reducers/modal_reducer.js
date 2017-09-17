import {
    OPEN_CHORDS_MODAL,
    CLOSE_CHORDS_MODAL,
} from '../actions/types';

const INITIAL_STATE = {
    chordsModalIsOpen: false,
};

export default (state = INITIAL_STATE, action) => {

    switch(action.type){

        case OPEN_CHORDS_MODAL: {
            console.log('reducer receiived, now go back to component');
            
            return {
                chordsModalIsOpen: action.payload
            }
            break;
        }

        case CLOSE_CHORDS_MODAL: {
            console.log('reducer receiived, now go back to component');
            
            return {
                chordsModalIsOpen: action.payload
            }
            break;
        }
               
        default: {
            return state;
            break;
        }
            
    }

}