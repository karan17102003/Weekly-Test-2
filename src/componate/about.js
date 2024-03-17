import React from 'react';

const About=()=>{
    const primaryFocus=[{
        'tital':"Web Design & Development",
        'about':"Creating attractive, easy-to-use websites that work well for businesses and individuals online."
    },
    {
        'tital':"Mobile Apps & Games",
        'about':"Creating and developing engaging mobile apps and games for iOS and Android devices."
    },
    {
        'tital':"Development Solutions",
        'about':"Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications."
    },
    {
        'tital':"Marketing & SEO",
        'about':"Using SEO and marketing strategies to boost online visibility and promote products or services."
    },
    
]
const Creativity=[{
    'tital':"Visual Storytelling",
    'about':"Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.    ",
    'img':'https://oktayshakirov.com/assets/images/icon-video.svg'
},
{
    'tital':"Digital Content Creation",
    'about':"Creatiing dynamic digital content, such as 3D models, graphics or animations.",
    'img':'https://oktayshakirov.com/assets/images/icon-multimedia.svg'
}

]

const Activities=[{
    'tital':"nvestments",
    'about':"Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment   ",
    'img':'https://oktayshakirov.com/assets/images/finances.png'
},
{
    'tital':"Music    ",
    'about':"Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians",
    'img':'https://oktayshakirov.com/assets/images/music.png'
},
{
    'tital':"Photography",
    'about':"Capturing precious moments and memories through the lens of a camera.",
    'img':'https://oktayshakirov.com/assets/images/camera.png'
},
{
    'tital':"Reading    ",
    'about':"Books on Self-Improvement, Psychology and Understanding Life Better.",
    'img':'https://oktayshakirov.com/assets/images/books.png'
}

]
    return(
        
        <div style={{
            color:'white'
        }} >
            
            
            <h1>About Me</h1>
            <p>Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.</p>
            <div>
                <div><h2>Primary Focus</h2></div>
                <div style={{
                    display:'grid',
                    gridTemplateColumns:'auto auto',
                    gap:'3rem',
                    margin:'30px'
                }}>
                    {
                        primaryFocus.map((props,index)=>{
                            return(
                                <div key={index} style={{
                                    border:'5px solid black'
                                }}>
                                    <h3>{props.tital}</h3>
                                    <p>{props.about}</p>
                                </div>
                                
                                
                               
        
                            )
                        })
                    }

                </div>
            </div>
            <div>
                <div><h2>Exploring Creativity</h2></div>
                <div style={{
                    display:'grid',
                    gridTemplateColumns:'auto auto',
                    gap:'3rem',
                    margin:'30px'
                }}>
                    {
                        Creativity.map((props,index)=>{
                            return(
                                <div key={index} style={{
                                    border:'5px solid black'
                                }}>
                                    <div style={{
                                        display:'flex'
                                    }}>
                                    <img src={props.img} style={{height:'60px',marginTop:'30px'}}
                                    />
                                    <div>
                                    <h3>{props.tital}</h3>
                                    <p>{props.about}</p>
                                    </div>
                                    </div>
                                </div>
                                
                                
                               
        
                            )
                        })
                    }

                </div>

            </div>

            <div>
                <div><h2>Favorite Activities</h2></div>
                <div style={{
                    display:'grid',
                    gridTemplateColumns:'auto auto',
                    gap:'3rem',
                    margin:'30px'
                }}>
                    {
                        Activities.map((props,index)=>{
                            return(
                                <div key={index} style={{
                                    border:'5px solid black'
                                }}>
                                    <div style={{
                                        display:'flex'
                                    }}>
                                    <img src={props.img} style={{height:'60px',marginTop:'30px'}}
                                    />
                                    <div>
                                    <h3>{props.tital}</h3>
                                    <p>{props.about}</p>
                                    </div>
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
export default About;