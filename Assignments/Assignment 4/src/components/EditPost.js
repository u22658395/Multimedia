import React from "react";

export class EditPost extends React.Component{
    constructor(props){
        super(props);
        this.titleInput = React.createRef();
        this.descInput = React.createRef();
        this.save = this.save.bind(this);
    }
    save(e){
        e.preventDefault();
        this.props.change(this.titleInput.current.value, this.descInput.current.value);
    }
    render(){
        return(
            <div>
                <form>
                    <label>
                        Post Title <br/>
                        <input type="text" name="title-input" ref={this.titleInput} defaultValue={this.props.title}/>
                    </label>
                    <br/>
                    <label>
                        Post Description <br/>
                        <input type="text" name="desc-input" ref={this.descInput} defaultValue={this.props.description}/>
                    </label>
                    <br/>
                    <button onClick={this.save}>Save</button>
                </form>
            </div>

        )
    }
}

