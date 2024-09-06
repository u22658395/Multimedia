// 22658395 Katlego Mositi
import React from "react";
import { EditPost } from "./EditPost";

export class Post extends React.Component{
    constructor(props){
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.saveData = this.saveData.bind(this);
        this.state = {
            toggled:false,
            data:{
                title:this.props.title,
                description:this.props.description
            }
        } 
    }
    toggleForm(){
        this.setState({toggled:!this.state.toggled});
    }
    saveData(title, desc){
        this.setState({
            data:{
                title:title,
                description:desc
            }
        })
        this.toggleForm();
    }
    render(){
        return(
            <div>
                <h1>{this.state.data.title}</h1>
                <p>{this.props.author}</p>
                <hr/>
                <p>{this.state.data.description}</p>
                <button onClick={this.toggleForm}>Edit Post</button>
                
                {
                    this.state.toggled ?<EditPost change={this.saveData}/> : ""
                }
            </div>

        )
    }
}

