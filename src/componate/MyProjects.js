import React from 'react';
import Navebar from './Navebar';
import { Outlet } from 'react-router-dom';

const MyProjects=()=>{
    const Activities=[{
        'tital':"FashionSwap App",
        'about':"Design + Frontend Figma | React.js | Chakra UI",
        'img':'https://oktayshakirov.com/assets/images/projects/FashioSwap.png'
    },
    {
        'tital':"Inventory Management App",
        'about':"Design + Frontend Figma | React.js | Chakra UI",
        'img':'https://oktayshakirov.com/assets/images/projects/contour.png'
    },
    {
        'tital':"MyBestWishes AI Generator",
        'about':"Design + Frontend Figma | React.js | Chakra UI",
        'img':'https://oktayshakirov.com/assets/images/projects/mybestwishes.png'
    },
    {
        'tital':"MyWorkPhoto AI Generator",
        'about':"Design + Frontend Figma | React.js | Chakra UI",
        'img':'https://oktayshakirov.com/assets/images/projects/myworkphoto.png'
    },
    {
        'tital':"FashionSwap App",
        'about':"Design + Frontend Figma | React.js | Chakra UI",
        'img':'https://oktayshakirov.com/assets/images/projects/FashioSwap.png'
    },
    {
        'tital':"Inventory Management App",
        'about':"Design + Frontend Figma | React.js | Chakra UI",
        'img':'https://oktayshakirov.com/assets/images/projects/contour.png'
    },
    {
        'tital':"MyBestWishes AI Generator",
        'about':"Design + Frontend Figma | React.js | Chakra UI",
        'img':'https://oktayshakirov.com/assets/images/projects/mybestwishes.png'
    },
    {
        'tital':"MyWorkPhoto AI Generator",
        'about':"Design + Frontend Figma | React.js | Chakra UI",
        'img':'https://oktayshakirov.com/assets/images/projects/myworkphoto.png'
    }
    
    ]
    return(
        <div style={{
            color:'white'
        }}>
            
            
            <div><h1>My Projects</h1></div>
            <div>
                
                <div style={{
                    display:'grid',
                    gridTemplateColumns:'auto auto auto',
                    gap:'1.5rem',
                    margin:'10px',
                    textAlign:'center'
                }}>
                    {
                        Activities.map((props,index)=>{
                            return(
                                <div key={index} style={{
                                    border:'5px solid black',
                                    padding:'10px'
                                }}>
                                    <div>
                                        <img src={props.img} style={{
                                            height:'150px'
                                        }}/>
                                        <h4>{props.tital}</h4>
                                        <p style={{
                                            width:'70%',
                                            marginLeft:'40px'
                                        }}>{props.about}</p>
                                        <button style={{
                                            width:'100%',
                                            padding:'10px'
                                        }}>Preview</button>
                                        <button
                                        style={{
                                            width:'100%',
                                            padding:'10px'
                                        }}>Figma</button>
                                    </div>
                                </div>
                                
                                
                               
        
                            )
                        })
                    }

                </div>

            </div>
        </div>
        
    )
}
export default MyProjects;