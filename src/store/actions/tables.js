import * as actionTypes from './actionTypes';

export const addTable = ( {...args} ) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ...args
    };
};

export const getTables = () => {
    return {
        type: actionTypes.GET_TABLES,
    };
};

export const getTableOrders = (tableId) => {
    return {
        type: actionTypes.GET_TABLE_ORDERS,
        tableId: tableId
    };
};

export const closeTable = (tableId) => {
    return {
        type: actionTypes.CLOSE_TABLE,
        tableId: tableId
    };
};
