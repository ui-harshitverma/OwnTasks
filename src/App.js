// import './App.css';
import './custom.css'
import BNav from './components/BNav';
// import Navigation from './components/Navigation';
import TextForm from "./components/TextForm";
// import List from './components/List';
import Mode from './components/Mode';
import { useState } from 'react';

function App() {
    const [mode, setMode] = useState('white');
    const [textColor, setTextColor] = useState('dark')
    const ToggleMode = () => {
        if (mode === 'dark') {
            setMode('light')
            document.body.style.backgroundColor = "#fff"
        } else {
            setMode('dark');
            document.body.style.backgroundColor = "#c1c1c1"
        }
        (textColor === 'white') ? setTextColor('dark') : setTextColor('white');

    }
    return (
        <>
            <BNav mode={mode} ToggleMode={ToggleMode} textColor={textColor} />
            {/* <Navigation /> */}
            <TextForm title="Enter Text and Do some changes" />
            {/* <List /> */}
            {/* <List /> */}
            <Mode />
        </>
    );
};

export default App;


