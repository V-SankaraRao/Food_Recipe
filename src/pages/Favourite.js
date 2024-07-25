import React, { useContext } from "react";
import {Globalcontext} from "../context/context";
import Card from './Card';
import '../App.css';
import { Link } from "react-router-dom";
export default function Favourite() {
    const { favList } = useContext(Globalcontext);
   console.log(favList);
    return <div className="fav">
    {favList.map((i)=><Card item={i}/>)}</div>

    
}
