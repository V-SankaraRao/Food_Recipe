import { useParams } from "react-router-dom"
import {useContext,useEffect} from 'react';
import { Globalcontext } from '../context/context';
import Indetail from './Indetail';
export default function Details(){
    let params=useParams();
    const {recipeItemData,setRecipeItemData}=useContext(Globalcontext);
    useEffect(()=>{
     async function getDetails(){
        const res=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`);
        const data=await res.json();
        setRecipeItemData(data.data);

     }
     getDetails();
    },[])
    
    return <div>
        <Indetail item={recipeItemData} />
    </div>
    }