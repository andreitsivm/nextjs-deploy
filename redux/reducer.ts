export const ADD_COMMENT="ADD_COMMENT";
export const SET_TITLE="SET_TITLE"
export const SET_BODY="SET_BODY"


const initialState={
    inputedTitle:'',
    inputedBody:'',
    inputedComment:''
}

export const appReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_COMMENT:{
            return{
                ...state,inputedComment:action.payload
            }
        }
        case SET_TITLE:{
            return{
                ...state,inputedTitle:action.payload
            }
        }
        case  SET_BODY:{
            return{
                ...state,inputedBody:action.payload
            }
        }
        default:{
            return state
        }
        
    }
}
