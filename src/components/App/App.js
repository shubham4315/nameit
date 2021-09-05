import React from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends React.Component{
    state = {
        headerText : "Hello, World!!"
    };
    render(){
        return(
            <div>
                <Header/>
                <h3>{this.state.headerText}</h3>
                <button
                onClick={()=>{
                    this.setState({
                        headerText : "woah it changed"
                    });
                }}
                >
                    Magic happens here</button>
            </div> 
        )
    }
}

// function App(){
//     return <h1>This is my functional component</h1>;
// }

export default App; 