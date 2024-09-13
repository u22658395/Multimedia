import React from "react";

export class Search extends React.Component {
    constructor(props) {
        super(props)
        this.searchInput = React.createRef();
        this.search = this.search.bind(this);
    }
    search(e) {
        e.preventDefault();
        this.props.handleSearch(this.searchInput.current.value);
    }
    render() {
        return (
            <div id="search-countainer">
                <form>
                    <input id="search-input" placeholder="Search playlist..." ref={this.searchInput}></input>
                    <button id="search-button" onClick={this.search} ><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>

        )
    }
}