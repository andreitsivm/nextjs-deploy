import { ADD_COMMENT, SET_TITLE,SET_BODY } from './reducer';



export const saveComment=(comment)=>{

    return{
        type:ADD_COMMENT,
        payload:comment
    }
}

export const setTitle=(text)=>{
    return{
        type:SET_TITLE,
        payload:text
    }
}
export const setBody=(text)=>{
    return{
        type:SET_BODY,
        payload:text
    }
}