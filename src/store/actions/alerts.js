import * as actionTypes from './actionTypes';

export const newAlert = ( {...args} ) => {
    return {
        type: actionTypes.NEW_ALERT,
        ...args
    };
};