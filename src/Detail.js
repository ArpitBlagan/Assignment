import {useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import ListDataService from "./service/List";
import { Link } from "react-router-dom";
import {idd} from './Redux/Action/change';
import {change} from './Redux/Action/change';
function Detail(){
    const [arr,setArr]=useState([]);
    const vall=useSelector(state=>state.single.val);console.log(vall);
    const dispatch=useDispatch();
    const arrr=async()=>{
        const val=await ListDataService.getAll();
        setArr(val.docs.map((doc)=>({
            ...doc.data(),id:doc.id
        })));
    }
    useEffect(()=>{
        arrr();
    },[]);
    const deleteH=async(id)=>{
        await ListDataService.deleteList(id);
        arrr();
    }
    const updateH=(id)=>{
        dispatch(idd(id));
    }
    const handleC=(ele)=>{
        console.log("Clicked");
        const date=new Date();
        const obj={
            Title:ele.Title,
            Name:ele.Name,
            date:date
        }
        dispatch(change(obj));
    }
    return<>
        <Link to="/"><h2 style={{marginBottom:"20px"}}>Home</h2></Link>
        <div className="ui cards segment centered">
            {
                arr.map((ele,index)=>{
                    if(ele.Title===vall){
                    return <div className="content">
      <div className="header">{ele.Title}</div>
      <div className="meta">{ele.Name}</div>
      <div className="description" onClick={(e)=>{handleC(ele)}}>
        <h3>Video</h3>
        <iframe src={ele.Link} title="Video" onClick={(e)=>{handleC(ele)}}></iframe>    
      </div>
      <Link to="/Create"><button className="ui button primary" onClick={(e)=>updateH(ele.id)}>edit</button></Link>
      <button className="ui button primary" onClick={(e)=>{deleteH(ele.id)}}>delete</button>
    </div>}
                    else{return }
                })
            }
        </div>
    </>
}
export default Detail;