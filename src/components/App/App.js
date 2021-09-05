import React,{useState} from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
const name = require('@rstacruz/startup-name-generator');

const App = ()=>{
    const [headerText,setHeaderText] = useState("Name It!!");
    const [headerExpanded, setheaderExpanded] = useState(true);
    const [suggestedNames, setsuggestedNames] = useState([]);

    const handleInputChange = (inputText)=>{
        setsuggestedNames(inputText ? name(inputText):[]);
        setheaderExpanded(!inputText);
    }
    return(
        <div>
            <Header headTitle={headerText}
                    headerExpanded={headerExpanded}
            />
            <SearchBox onInputChange={handleInputChange}/>
            <ResultsContainer suggestedNames = {suggestedNames}/> 
        </div> 
    )
}

// function App(){
//     return <h1>This is my functional component</h1>;
// }

export default App; 