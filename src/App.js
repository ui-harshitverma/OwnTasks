// import './App.css';
import './custom.css'
import BNav from './components/BNav';
import Navigation from './components/Navigation';
import TextForm from "./components/TextForm";
import List from './components/List';
import Mode from './components/Mode';

function App() {
        return (
                <>
                       <BNav/>
                       <Navigation/>
                        <TextForm title="Enter Text and Do some changes"/>
                        <List/>
                        <List/>
                        <Mode/>
                </>       
        );
};

export default App;


