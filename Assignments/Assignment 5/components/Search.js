//u22658395_Katlego
import React from 'react';


export class Search extends React.Component {
    constructor(props) {
        super(props)
        this.searchInput = React.createRef();
        this.search = this.search.bind(this);
    }
    search(e) {
        e.preventDefault();
        if (this.searchInput.current.value.trim() !== '') {
            this.props.handleSearch(this.searchInput.current.value);
        }
    }
    render() {
        return (
            <>
                <h3>Search</h3>
                <form>
                    <label>Search</label>
                    <input placeholder="Search something..." ref={this.searchInput}></input>
                    <button onClick={this.search} >search</button>
                </form>
            </>

        )
    }
}