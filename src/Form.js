import { useState,useEffect } from "react";
import {change} from './Redux/Action/change'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListDataService from './service/List';
function Fform(){
    const val=useSelector(state=>state.single.val);console.log(val);
    const dispatch=useDispatch();
    const arr=useSelector(state=>state.buckets.cards);
    const iid=useSelector(state=>state.iid.id);console.log(iid);
    const [title,setTitle]=useState("");
    const [name,setName]=useState("");
    const [link,setLink]=useState("");
    const handle=async(e)=>{
        e.preventDefault();
        const vala={
            Link:link,
            Name:name,
            Title:title
        };
        try{
            if(iid!==undefined||iid!==""){await ListDataService.updateList(iid,vala);}
            else{await ListDataService.addLists(vala);}
            setTitle("");setName("");setLink("");
        }catch(err){
            console.log(err);
        }
    };
    const getid=async()=>{
       const val= await ListDataService.getList(iid);
        console.log(val.data());setTitle(val.data().Title);
        setLink(val.data().Link);setName(val.data().Name);
    }
    useEffect(()=>{
        if(iid!==undefined||iid!==""){
            getid();
        }
    },[]);
    return<div>
    <Link to="/"><p>Home</p></Link>
    <div style={{marginTop:"50px"}}>
        <form className="ui form segment centered" onSubmit={handle}>
            <div className="field">
                <label>Type of Video</label>
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}}value={title} placeholder="Type"/>
            </div>
            <div className="field">
                <label>Name of the Video</label>
                <input type="text" onChange={(e)=>{setName(e.target.value)}}value={name} placeholder="Name"/>
            </div>
            <div className="field">
                <label>Link of the video</label>
                <input type="text" onChange={(e)=>{setLink(e.target.value)}}value={link} placeholder="Link"/>
            </div>
            <button className="ui button primary" type="submit">Submit</button>
        </form>
    </div>
    </div>
};
export default Fform;