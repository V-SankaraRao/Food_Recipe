import { useContext } from 'react';
import '../App.css';
import { Globalcontext } from '../context/context';
export default function Indetail({item}){
    const {addFav,favList}=useContext(Globalcontext);
    console.log(item);
    const isFavorited = favList.some(fav => fav.id === item.recipe.id);
    return <div className='desc'>
        <h1>
     {item?.recipe?.title}</h1>
     <img src={item?.recipe?.image_url} alt={item?.title}></img>
     <h2>Ingradients </h2>
     <div className='ing'>    {
        item?.recipe?.ingredients.map((i)=> <li>➡️{i.description} - {i.quantity}gm</li>
        
        )
     }</div>
     <button className='recipe-btn' onClick={() => addFav(item.recipe)}>
                {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
 
    </div>
}