import logo from './logo.svg';
import './App.css';
import Main from './componate/main';
import About from './componate/about';
import MyProjects from './componate/MyProjects';
import Contact from './componate/Contact';
import Navebar from './componate/Navebar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      backgroundColor:'#23CAF7 '
    }}>
      <Main/>
      <div  style={{
            textAlign:'center',
            width:'65%',
            backgroundColor:'#21839D',
            padding:'10px',
            borderRadius:'10px',
            margin:'20px'
            
        }}>
          <Router>
          <Navebar />
          <Routes> {/* Wrap Routes around Route components */}
            <Route path="/" element={<About />} />
            <Route path="/MyProjects" element={<MyProjects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      
      </div>

    </div>
    
  );
}

export default App;
