import { createContext ,useState} from "react";
import { useNavigate } from "react-router-dom";
export const Globalcontext=createContext(null);
export default function GlobalState({children}){
    const[searching,setSearching]=useState("");
    const[loading,setLoading]=useState(false);
    const[recipeList,setRecipeList]=useState([]);
    const[recipeItemData,setRecipeItemData]=useState(null);
    const[favList,setFavList]=useState([]);
    
    const navigate=useNavigate();
    
    async function handleSubmit(){
        try{
            const res=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searching}`);
            const data=await res.json();
            if(data?.data?.recipes){
                setRecipeList(data.data.recipes);
                setLoading(false);
                setSearching("");
                navigate('/');
            }
        }
        catch(e){
            console.log(e);
            setLoading(false);
            setSearching("");
        }
    }
    function addFav(l) {
        console.log(l);
    let cpyFavoritesList = [...favList];
    
    const index = cpyFavoritesList.findIndex(item=> item.id === l.id)

    if(index === -1) {
      cpyFavoritesList.push(l)
    } else {
      cpyFavoritesList.splice(index)
    }
    console.log(cpyFavoritesList);
    setFavList(cpyFavoritesList);
    }
    
    


return <Globalcontext.Provider value={{setSearching,loading,recipeList,handleSubmit,recipeItemData,setRecipeItemData,setFavList,favList,addFav}}>{children}</Globalcontext.Provider>
}
// // // context/context.js
// // import React, { createContext, useContext, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // export const GlobalContext = createContext(null);

// // export default function GlobalState({ children }) {
// //     const [searching, setSearching] = useState("");
// //     const [loading, setLoading] = useState(false);
// //     const [recipeList, setRecipeList] = useState([]);

// //     const navigate = useNavigate();

// //     async function handleSubmit() {
// //         try {
// //             setLoading(true);
// //             const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searching}`);
// //             const data = await res.json();
// //             if (data?.data?.recipes) {
// //                 setRecipeList(data.data.recipes);
// //                 setLoading(false);
// //                 setSearching("");
// //                 navigate('/');
// //             }
// //         } catch (error) {
// //             console.error("Error fetching recipes:", error);
// //             setLoading(false);
// //             setSearching("");
// //         }
// //     }

// //     return (
// //         <GlobalContext.Provider value={{ searching, loading, recipeList, handleSubmit }}>
// //             {children}
// //         </GlobalContext.Provider>
// //     );
// // }

// import { createContext } from "react";

// export const GlobalContext=createContext(null);

// export default function GlobalState({children}){


//     return <GlobalContext.Provider>{children}</GlobalContext.Provider>
// }