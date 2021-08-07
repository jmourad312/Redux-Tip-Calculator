//#region Action Types
export const ITEM_ADDED = 'ITEM_ADDED';
//#endregion

//#region Action Creators
export const addNewItem = (name,price) => ({
    type:ITEM_ADDED,
    payload:{
        name,
        price,
    }
})
//#endregion