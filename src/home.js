import { useState,useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import {Link} from 'react-router-dom';
import {one} from './Redux/Action/change'
import ListDataService from "./service/List"; 

function Home(){
    const [arr,setArr]=useState([]);
    const [history,setHis]=useState([]);
    const get=async()=>{
        const val=await ListDataService.getAll();
        setArr(val.docs.map((doc)=>({
            ...doc.data(),id:doc.id
        })));
    };const his=useSelector(state=>state.buckets.cards);
    useEffect(()=>{
        get();
    },[]);
    useEffect(()=>{
        setHis(his);
    },[his]);
    console.log(arr);const dispatch=useDispatch();
    console.log(history);
    return <div style={{display:'flex'}}>
        <div>
        {arr.map((ele,index)=>{
            const path=`/${ele.Title}`;
            if(ele.Title==="Home"){return <Link key={index} to="/" onClick={()=>{
                dispatch(one(ele.Title));
            }}
            ><h2 style={{marginBottom:"20px"}}>{ele.Title}</h2></Link>;}
            else{return <Link key={index} to={path} onClick={()=>{
                dispatch(one(ele.Title));
            }}><h2 style={{marginBottom:"20px"}}>{ele.Title}</h2></Link>;}
        })}</div>
        <div>
            Hello
            {history.map((ele,index)=>{
                return <div>
                    <h3>ele.Title</h3>
                    <p>ele.Name</p>
                    <p>ele.Date</p>
                </div>
            })}
        </div>
    </div>
}
export default Home;