
const initialState={
    cards:[],
    val:"Home",
    id:""
};


export const allReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case "many":
            state.cards=[...state.cards,payload];console.log(state);
            return state;
        default:
            return state;
    }
}
export const oneReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case "one":
            state.val=payload;
            return state;
        default:
            return state;
    }
}
export const idReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case "id":
            state.id=payload;
            return state;
        default:
            return state;
    }
}