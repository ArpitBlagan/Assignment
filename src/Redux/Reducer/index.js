import  {combineReducers} from "redux";
import {allReducer, oneReducer,idReducer} from "./bucketReducer";
const rootreducer=combineReducers({
    buckets:allReducer,
    single:oneReducer,
    iid:idReducer
});
export default rootreducer;