// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './Alert';
import HomeComponent from './components/HomeComponent'
import AboutComponent from './components/AboutComponent'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('tertiary');
  const [lightText, darkText] = useState('white');
  const [light, dark] = useState('dark');
  const toogleMode = () => {
    if (mode === 'tertiary') {
      setMode('dark')
      darkText('dark')
      dark('light')
      document.body.style.background = "#0e1259"
      showAlert("Dark Mode is enabled", "success")
      // setInterval(() => {
      //   document.title = "TextUtils is amazing"
      //   console.log(1);
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      //   console.log(2);
      // }, 1500);
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('tertiary');
      darkText('light');
      dark('dark')
      document.body.style.background = "white"
      showAlert("Light Mode is enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null);
    }, 3000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About" buttonText={light} Textcolor={lightText} setStyle={mode} handleMode={toogleMode} />

        /* `<Alert state={alert} />` is rendering the `Alert` component and passing the `alert` state
        as a prop to it. The `Alert` component will display an alert message based on the `alert`
        state. If the `alert` state is not null, it will display the message with the specified type
        (success, danger, warning, etc.) for a certain amount of time before disappearing. */
        <Alert state={alert} />

        <div className="container2">
          <Routes>
            <Route exact path="/" element={<Textarea key="TextUtils" heading="Enter the text to analyze :-" buttonText={light} showAlert={showAlert} />} />
            <Route exact path="/home" element={<HomeComponent key="home" heading="Enter the text to analyze :-" buttonText={light} showAlert={showAlert} />} />
            <Route exact path="/about" element={<AboutComponent key="about" textcolor={lightText}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
