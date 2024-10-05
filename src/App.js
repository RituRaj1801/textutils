import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import { useState } from 'react';

function App() {

  const [modeDark, setModeDark] = useState(true)
  const [modeBtnText, setModeBtnText] = useState("dark Mode")
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const toggleMode = () => {
    console.log("clicked")
    if (modeDark) {
      document.body.style.backgroundColor='black'
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setModeDark(false)
      setModeBtnText('light mode')
    }else{
      document.body.style.backgroundColor='white'

      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setModeDark(true)
      setModeBtnText('dark mode')
    }
  }
  return (
    <>
      <Navbar title="TextUtils" modeBtnText={modeBtnText} modeDark={modeDark}  toggleMode={toggleMode}/>
      <div className="container" style={myStyle}   >
        <Textfrom heading="Analyze your text"  modeDark={modeDark}/>
      </div>
    </>
  );
}

export default App;
