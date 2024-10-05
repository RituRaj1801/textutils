// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [modeDark, setModeDark] = useState(true)
  const [modeBtnText, setModeBtnText] = useState("dark Mode")
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const toggleMode = () => {
    console.log("clicked")
    if (modeDark) {
      setAlert({
        msg: "dark mode enable",
        type: "dark"
      })
      document.body.style.backgroundColor = 'black'
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setModeDark(false)
      setModeBtnText('light mode')
    } else {
      setAlert({
        msg: "light mode enable",
        type: "light"
      })
      document.body.style.backgroundColor = 'white'

      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setModeDark(true)
      setModeBtnText('dark mode')
    }
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" modeBtnText={modeBtnText} modeDark={modeDark} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          {/* <div className="container" style={myStyle}   > */}
            <Route path='/' element={<Textfrom heading="Analyze your text" myStyle={myStyle} modeDark={modeDark} showAlert={showAlert} />} />
          {/* </div> */}
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
