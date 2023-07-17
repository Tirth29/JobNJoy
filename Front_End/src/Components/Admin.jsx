import React,{useEffect} from 'react'
import AddCompany from './AddCompany'
import  {useNavigate} from "react-router-dom";
import { useDispatch ,useSelector } from 'react-redux';
import { loadCompany,updateCompany,updateCompanyPhoto } from "../reducer/Actions/UserAction";

export default function Admin() {
    const navigate=useNavigate();
    const dispatch = useDispatch();

    useEffect (()=>{
        const timer = setTimeout (()=>{
            dispatch(loadCompany());
        },5000);
        return ()=> clearTimeout(timer);
    });

    return (
        <>
            <div className="p-1 text-4xl text-center bg-slate-200">ADMIN</div>
            <div className="m-2">
                <div>Add/Update Compony for Apply Job:</div>
                <hr className="bg-black "/>
            </div>    
            <div className="m-2">
                <button 
                    onClick={()=>navigate("/admin/addcompany") } 
                    className="bg-blue-500 text-gray-50 w-28 rounded text-center p-1 my-2">Add</button>
                 <br />
                <button 
                    className="bg-blue-500 text-gray-50 w-28 rounded text-center p-1 my-2"
                    onClick={()=>navigate("/admin/editcompany")}
                    >Update</button><br />
                
            </div>
        </>
    )
}
