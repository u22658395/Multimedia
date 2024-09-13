import React from "react";
export class AddPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validName: true,
            validDescription: true,
            validImage: true,
        }
        this.validateForm = this.validateForm.bind(this);

        this.nameInput = React.createRef();
        this.descInput = React.createRef();
        this.imageInput = React.createRef();

        

    }

    validateForm(e) {
        e.preventDefault();

        if (!this.nameInput.current.value.trim().length > 0) {
            this.setState({ validName: false });
        }
        else {
            this.setState({ validName: true });
        }

        if (!this.descInput.current.value.trim().length > 0) {
            this.setState({ validDescription: false });
        }
        else {
            this.setState({ validDescription: true });
        }

        if (this.imageInput.current.value.trim().length <= 0) {
            this.setState({ validImage: false });
        }
        else {
            this.setState({ validImage: true });
        }

        // if (validName && validDescription && validImage){
        //     toggleOverlay();
        // }

    }
    render() {
        return (
            <div id="form-container" >
                <div className="wrapper">
                    <div className="inner">
                        <div className="image-holder">
                            <img id="img" src="./assets/logo/groovelist-high-resolution-logo-transparent.svg" alt="" />
                        </div>
                        <div id="form">
                            <h3><strong>New playlist</strong></h3>

                            <div className="form-wrapper">
                                <label htmlFor="Name"><b>Name:</b></label>
                                {
                                    !this.state.validName ?
                                        <div className="error-message"><b>Invalid Name:</b></div>
                                        : ""
                                }
                                <input id="Name" name="Name" type="text" className="form-control" ref={this.nameInput} />
                                <i className="zmdi zmdi-account"></i>
                            </div>

                            <div className="form-wrapper">
                                <label htmlFor="Description"><b>Description:</b></label>
                                {
                                    !this.state.validDescription ?
                                        <div className="error-message"><b>Invalid description:</b></div>
                                        : ""
                                }
                                <input id="Description" name="Description" type="text" className="form-control" ref={this.descInput} />
                                <i className="zmdi zmdi-lock"></i>
                            </div>


                            <div className="form-wrapper">
                                <label htmlFor="Image"><b>Image:</b></label>
                                {
                                    !this.state.validImage ?
                                        <div className="error-message"><b>Invalid image</b></div>
                                        : ""
                                }
                                <input id="Image" name="Image" type="file" className="form-control" ref={this.imageInput} />
                                <i className="zmdi zmdi-lock"></i>
                            </div>



                            <button onClick={this.validateForm} id="login-submit-button" name="Submit">
                                Add Playlist
                                <i className="zmdi zmdi-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}