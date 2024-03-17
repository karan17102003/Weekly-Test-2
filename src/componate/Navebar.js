import React from 'react';
import { Link } from 'react-router-dom';

const Navebar=()=>{
    
    return(
        <div style={{
            display:'flex',
           
            justifyContent:'right',
            
        }}>
            <div style={{
            display:'flex',
            gap:'2rem',
            padding:'20px',
            fontSize:'17px',
            width:'100%',
            marginLeft:'70%',
            backgroundColor:'#284149',
            color:'white',
            borderRadius:'20px'
            
        }}>
            <div>
                <Link to="/" style={{ textDecoration: 'none', color: 'white', listStyleType:'none' }}>
                    <li>About</li>
                </Link>
            </div>
            <div>
                <Link to="/MyProjects" style={{ textDecoration: 'none', color: 'white', listStyleType:'none' }}>
                    <li>MyProjects</li>
                </Link>
            </div>
            <div>
                <Link to="/Contact" style={{ textDecoration: 'none', color: 'white', listStyleType:'none' }}>
                    <li>Contact</li>
                </Link>
            </div>
            
        </div>
        </div>
    )
}
export default Navebar;