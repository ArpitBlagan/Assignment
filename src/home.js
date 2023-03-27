import { useState,useEffect } from 'react';
import { useDispatch, useSelector,useStore  } from 'react-redux';
import {Link} from 'react-router-dom';
import {one} from './Redux/Action/change'
import ListDataService from "./service/List"; 
import {idd} from './Redux/Action/change';
function Home(){
    const [arr,setArr]=useState([]);
    const [history,setHis]=useState([]);
    const get=async()=>{
        const val=await ListDataService.getAll();
        setArr(val.docs.map((doc)=>({
            ...doc.data(),id:doc.id
        })));
    };
    useEffect(()=>{
        get();
    },[]);
    const his=useSelector(state=>state.buckets.cards);
    useEffect(()=>{
        setHis(his);
    },[his]);
    console.log(arr);const dispatch=useDispatch();
    console.log(history);
    return <div style={{display:'flex'}}>
        <div className='class="ui sidebar inverted vertical menu"'>
        {arr.map((ele,index)=>{
            const path=`/${ele.Title}`;
            if(ele.Title==="Home"){return <Link key={index} to="/" onClick={()=>{
                dispatch(one(ele.Title));
            }}
            ><h2 style={{marginBottom:"20px"}}>{ele.Title}</h2></Link>;}
            else if(ele.Title==="Create"){return <Link key={index} to="/Create" onClick={()=>{
                dispatch(one(ele.Title));dispatch(idd(""));
            }}
            ><h2 style={{marginBottom:"20px"}}>{ele.Title}</h2></Link>;
            }
            else{return <Link key={index} to={path} onClick={()=>{
                dispatch(one(ele.Title));
            }}><h2 style={{marginBottom:"20px"}}>{ele.Title}</h2></Link>;}
        })}</div>
        <div style={{marginLeft:'20px'}}>
            {history.map((ele,index)=>{
                return <div key={index}>
                    <p>{ele.ele.Title}</p>
                    <p>{ele.ele.Name}</p>
                    <p>{ele.ele.Link}</p>
                </div>;
            })}
        </div>
    </div>
}
export default Home;