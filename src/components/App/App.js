import React from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
const name = require('@rstacruz/startup-name-generator');

class App extends React.Component{
    state = {
        headerText : "Name It!!",
        headerExpanded : true,
        suggestedNames  :[],
    };

    handleInputChange = (inputText)=>{
        this.setState({suggestedNames : inputText ? name(inputText):[]});
        this.setState({headerExpanded:!inputText});
    }
    render(){
        return(
            <div>
                <Header headTitle={this.state.headerText}
                        headerExpanded={this.state.headerExpanded}
                />
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultsContainer suggestedNames = {this.state.suggestedNames}/> 
            </div> 
        )
    }
}

// function App(){
//     return <h1>This is my functional component</h1>;
// }

export default App; 