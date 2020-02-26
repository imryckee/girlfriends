import React from 'react';
import {girls} from '../girls.js';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
// import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js'
import "./App.css";


class App extends React.Component {
    constructor(){
        super()
        this.state = { 
            girls:[],
            searchfield:"",
        }
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({girls:users}));
        this.setState({girls:girls})
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
    }

    render(){
        if(this.state.girls.length===0){
            return <h1 className='tc'>Loading...</h1>
        }else{
            const filteredGirls = this.state.girls.filter(girl => {
                return girl.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) || girl.id.includes(this.state.searchfield);
            })
            return (
                <div className="tc">
                    <h1 className="f1">Which girlfriend do you want?</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    {/* <Scroll>
                        <CardList girls={filteredGirls}/>
                    </Scroll> */}
                    <ErrorBoundary>
                        <CardList girls={filteredGirls}/>
                    </ErrorBoundary>
                </div>
            )
        }
    }
}

export default App