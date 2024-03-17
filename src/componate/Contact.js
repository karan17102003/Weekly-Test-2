import React from 'react';
import { Outlet } from 'react-router-dom';
const Contact=()=>{
    return(
        <div style={{
            color:'white'
        }}>
            
            <h1>Contact</h1>
            <div style={{
                textAlign:'center'
            }}>
                <div style={{
                    padding:'40px',
                    margin:'10px',
                    backgroundColor:'#226276'
                }}>
                    <h3>Email:</h3>
                    <p>oktayshakirov@gmail.com</p>
                </div>
                <div style={{
                    padding:'40px',
                    margin:'10px',
                    backgroundColor:'#226276'
                }}>
                    <h3>Schedule Video Call With Me:</h3>
                    <img src='https://oktayshakirov.com/assets/images/calendar.png' style={{
                        height:'200px'
                    }}/>
                </div>
                <div style={{
                    padding:'40px',
                    margin:'10px',
                    backgroundColor:'#226276'
                }}>
                    <h3>Socials:</h3>
                    <div style={{
                        display:'flex',
                        justifyContent:'center',
                        gap:'2rem'
                    }}>
                        <img src='https://oktayshakirov.com/assets/images/socials/github.png' style={{
                            height:'100px'
                        }}/>
                        <img src='https://oktayshakirov.com/assets/images/socials/linkedin.png' style={{
                            height:'100px'
                        }}/>
                        <img src='https://oktayshakirov.com/assets/images/socials/instagram.png' style={{
                            height:'100px'
                        }}/>
                        <img src='https://oktayshakirov.com/assets/images/socials/twitter.png' style={{
                            height:'100px'
                        }}/>
                    </div>
                </div>
                <div style={{
                    padding:'40px',
                    margin:'10px',
                    backgroundColor:'#226276'
                }}>
                    <h3>Support My Work:</h3>
                    <p>With every small donation, you contribute to hostings, domains and other essential costs. All my work which is made public on GitHub or Figma is open source and free for everyone to use.</p>
                </div>
            </div>
        </div>
    )
}
export default Contact;