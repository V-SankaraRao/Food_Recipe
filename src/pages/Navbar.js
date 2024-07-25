import { Link } from 'react-router-dom';
import './pages.css';
import { useContext } from 'react';
import { Globalcontext } from '../context/context';
export default function Navbar(){
   // const ref=useRef(null);
    const {setSearching,handleSubmit,searching}=useContext(Globalcontext);
   return <div className='navbar'>
    <div>
        <Link to='/' className='link'><h3>Food Recipe</h3></Link>
        
    </div>
    <div>
    <input type='text' onChange={(e)=>setSearching(e.target.value)} value={searching}/>
        <button onClick={handleSubmit}>search</button></div>
    <div className='items'>
        <ul>
            <Link to='/' className='link'><li >Home</li></Link>
            <Link to='/About' className='link'> <li>About</li></Link>
            <Link to='/favourite' className='link'><li>Favourite</li></Link>
            
           
            
        </ul>
    </div>
   </div>
}