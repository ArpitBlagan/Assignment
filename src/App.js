import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Fform from './Form';
import Home from "./home";
import { useDispatch } from 'react-redux';
import {change} from './Redux/Action/change';
import Detail from './Detail';
import {useState,useEffect} from 'react';
import ListDataService from './service/List';
function App(){
    const [arr,setArr]=useState([]);
    const get=async()=>{
        const val=await ListDataService.getAll();
        setArr(val.docs.map((doc)=>({
            ...doc.data(),id:doc.id
        })));
    }
    useEffect(()=>{
        get();
    },[]);
    console.log(arr); 
    return (
        <>
            <h1>Video Store</h1>
            <Router>
                <Routes>
                    {
                        arr.map((ele,index)=>{
                            const path=`/${ele.Title}`;
                            if(ele.Title==="Home"){
                                return <Route key={index} path="/" element={<Home/>}/>
                            }
                            else if(ele.Title==="Create"){
                                return <Route key={index} path={path} element={<Fform/>}/>;
                            }   
                            else{
                            return <Route key={index} path={path} element={<Detail/>} />;}}
                        )
                    }
                </Routes>
            </Router>
        </>
    );
}
export default App;