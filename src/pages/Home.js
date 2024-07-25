// components/Home.js
import '../App.css';
import React, { useContext } from "react";
import { Globalcontext } from "../context/context";
import Card from './Card';
export default function Home() {
    const { recipeList, loading } = useContext(Globalcontext);
  
    if (loading) return <div>Loading...Please wait!</div>;
  
    return (
      <div className="home">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((item,index) => <Card item={item}/>)
        ) : (
          <div>
            <p className="text">
              Nothing to show. Please search something
            </p>
          </div>
        )}
      </div>
    );
  }