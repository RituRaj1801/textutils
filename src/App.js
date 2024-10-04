import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container">
        <Textfrom heading="Analyze your text"/>
      </div>
    </>
  );
}

export default App;
