// u22658395_Katlego
import React from 'react';
import { getCharById, getCharByName } from './api';
import Person from './components/Person';
import Search from './components/Search';
import './input.css';  //import the tailwind css

class StarWars extends React.Component {
    constructor(){
        this.state = { currID: 0, data: null, error: null };

    }

    componentDidMount() {
        this.fetchNextChar();
    }

    fetchPrevChar(){
        let currId = this.state.currID;
        this.setState({currID:(--currId)});

        getCharById(this.state.currID)
        .then(data => this.setState({ data, error: null }))
        .catch(error => this.setState({ error, data: null }));
    };
    
    fetchNextChar(){
        let currId = this.state.currID;
        this.setState({currID:(++currId)});

        getCharById(this.state.currID)
        .then(data => this.setState({ data, error: null }))
        .catch(error => this.setState({ error, data: null }));
    };

    handleSearch = (searchTerm) => {
        getCharByName(searchTerm)
        .then(data => this.setState({ data, error: null }))
        .catch(error => this.setState({ error, data: null }));
    };

    render() {
        const { data, error } = this.state;

        return (
            <div>
                
                <Search handleSearch={this.handleSearch} />
                <button onClick={this.fetchPrevChar} >Previous</button>
                <button onClick={this.fetchNextChar} >Next</button>

                {
                    data && !error ?
                        <Person data={data} />
                    : 
                        <p>{error}</p>
                    
                }
            </div>
        );
    }
}

export default StarWars;
