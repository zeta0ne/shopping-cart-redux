import { items } from "../../models/ItemList";

export const initState = { 
    items, 
    totalAmount: 0,
    totalSum: 0,
}

export const itemListReducer = (state = initState, action: any) => {
    switch (action.type) {
        case "REMOVE_ITEM": {
            let newTotalAmount = state.totalAmount;
            let newTotalSum = state.totalSum;
            const index = state.items.findIndex(item => item.id === action.payload);
            //console.log(action.payload) //с модалкой пейлод становится undefined
            const removedAmt = state.items[index].amount;
            const removedSum = state.items[index].price * state.items[index].amount;
            if (state.totalAmount > 0){
                newTotalAmount = state.totalAmount - removedAmt;
                newTotalSum = state.totalSum - removedSum;
            }
            const updatedItems = state.items.filter(i => i.id !== action.payload);
            return {...state, items: updatedItems, totalAmount: newTotalAmount, totalSum: newTotalSum};}

        case "PLUS_ITEM": {
            const updatedItems = [...state.items];
            const index = state.items.findIndex(item => item.id === action.payload);            
            updatedItems[index].amount += 1;
            const newTotalSum = state.totalSum + state.items[index].price;
            return {...state, items: updatedItems, totalAmount: state.totalAmount + 1, totalSum: newTotalSum};}

        case "MINUS_ITEM": {
            const updatedItems = [...state.items];
            const index = state.items.findIndex(item => item.id === action.payload);
            let newTotalAmount = state.totalAmount;
            let newTotalSum = state.totalSum;
            if (updatedItems[index].amount > 0){
                updatedItems[index].amount -= 1;
                newTotalAmount -= 1
                newTotalSum = state.totalSum - state.items[index].price;
            }       
            return {...state, items: updatedItems, totalAmount: newTotalAmount, totalSum: newTotalSum};}
        default:
            return state;
    }
}