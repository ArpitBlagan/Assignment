export const change=(card)=>{
    return {
        type:"many",
        payload:card
    };
}
export const one=(card)=>{
    return{
        type:"one",
        payload:card
    };
}
export const idd=(card)=>{
    return {
        type:"id",
        payload:card
    };
}