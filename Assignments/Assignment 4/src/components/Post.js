import React from "react";

export class Post extends React.Component{
    constructor(props){
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.state = {
            toggled:false
        } 
    }
    toggleForm(){
        this.setState({toggled:!this.state.toggled});
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.author}</p>
                <hr/>
                <p>{this.props.description}</p>
                <button onClick={this.toggleForm}>Edit Post</button>

                {
                    this.state.toggled ?<p>togleddddd!</p> : ""
                }
            </div>

        )
    }
}

