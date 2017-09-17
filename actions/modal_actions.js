import {
    OPEN_CHORDS_MODAL,
    CLOSE_CHORDS_MODAL,
} from './types';

export const openChordsModal = () => {
    console.log('action trigger, now go to reducer');
    return{
        type: OPEN_CHORDS_MODAL, 
        payload: true
    }
};

export const closeChordsModal = () => {
    console.log('action trigger, now go to reducer');
    return{
        type: CLOSE_CHORDS_MODAL, 
        payload: false
    }
};
