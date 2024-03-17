import React from 'react';
const Main=()=>{
    return(
        <div style={{
            
            margin:'50px',
            
        }}>
            <div style={{padding:'20px',
                border:'5px solid black',
                borderRadius:'20px',
                backgroundColor:'#217C97',
                color:'white'
            }}>
        <div>
            <img src="https://oktayshakirov.com/assets/images/avatar.jpg" style={{
                height:'180px'
            }}/>
            <h2>Karan</h2>
            <p>Hello, World !</p>
        </div>
        <div>
            <div>
                <h3>Age</h3>
                <p>20 Years old</p>
            </div>
            <div>
                <h3>LOCATION</h3>
                <p>Dhile</p>
            </div>
            <div>
                <h3>PERSONALITY TYPE</h3>
                <p>INTJ-T</p>
            </div>

        </div>
        <div style={{
            display:'flex',
            gap:'1rem'

        }}>
            <p>git</p>
            <p>Link</p>
            <p>Inst</p>
            <p>tel</p>
        </div>
        </div>
        </div>
    )
}
export default Main;