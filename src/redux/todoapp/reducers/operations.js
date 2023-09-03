import {ADD_TODO , DELETE_ALL,ADD_NOTES} from "../actions";

const initialState = [
    {id:1,todo:'Buy Laptop',completed:false},
    {id:2,todo:'Master Redux',completed:false},
    {id:3,todo:'Watering plants',completed:true},
];


export const operationsReducer=(state=initialState,action)=>{
    switch(action.type){
    case ADD_TODO:
        return [...state,action.payload];
    case DELETE_ALL:
        return [];
    default: return state;
    }
}

const initialNotes = [
    {id:1,todo:'Buy Laptop',completed:false},
    {id:2,todo:'Master Redux',completed:false},
    {id:3,todo:'Watering plants',completed:true},
];


export const NotesoperationsReducer=(state=initialNotes,action)=>{
    switch(action.type){
    case ADD_NOTES:
        return [...state,action.payload];
    
    default: return state;
    }
}