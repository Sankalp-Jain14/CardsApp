export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL = 'DELETE_ALL';
export const ADD_NOTES = 'ADD_NOTES';

export const addTodo=(payload)=>{
    return{
        type:'ADD_TODO',
        payload
    }
}

export const addNotes=(payload)=>{
    return{
        type:'ADD_NOTES',
        payload
    }
}

export const deleteAll = ()=>{
    return{
        type:DELETE_ALL
    }
}