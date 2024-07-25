import { Link } from 'react-router-dom';
import '../App.css';
export default function Card({item}){
    return <div className='card-container'>
    <img  src={item.image_url} alt={item.title} />
    <h2>{item.title}</h2>
    <p>Author :{item.publisher}</p>
    <Link to={`/recipe-item/${item.id}`} className='recipe-btn'>Recipe Details</Link>

    </div>
}