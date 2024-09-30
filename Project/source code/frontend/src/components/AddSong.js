import React from "react";
export class AddSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validTitle: true,
            validArtist: true,
            validAlbum: true,
            validDuration: true,
            validLink: true,
        }
        this.validateForm = this.validateForm.bind(this);

        this.titleInput = React.createRef();
        this.artistInput = React.createRef();
        this.albumInput = React.createRef();
        this.durationInput = React.createRef();
        this.linkInput = React.createRef();

    }

    validateForm(e) {
        e.preventDefault();

        if (!this.titleInput.current.value.trim().length > 0) {
            this.setState({ validTitle: false });
        }
        else {
            this.setState({ validTitle: true });
        }

        if (!this.artistInput.current.value.trim().length > 0) {
            this.setState({ validArtist: false });
        }
        else {
            this.setState({ validArtist: true });
        }

        if (!this.albumInput.current.value.trim().length > 0 ) {
            this.setState({ validAlbum: false });
        }
        else {
            this.setState({ validAlbum: true });
        }

        const timePattern = /^(0[0-9]|[1-5][0-9]):([0-5][0-9])$/;
        
        if (this.durationInput.current.value.trim().length <= 0 || !timePattern.test(this.durationInput.current.value)) {
            this.setState({ validDuration: false });
        }
        else {
            this.setState({ validDuration: true });
        }
        
        if (this.linkInput.current.value.trim().length <=0) {
            this.setState({ validLink: false });
        }
        else {
            this.setState({ validLink: true });
        }
        
        // if (validTitle && validArtist && validAlbum && validDuration) {
        //     toggleOverlay();
        // }

    }
    render() {
        return (
            <div id="form-container" >
                <div className="wrapper">
                    <div className="inner">
                        <div id="form">
                            <h3><strong>New Song</strong></h3>

                            <div className="form-wrapper">
                                <label htmlFor="Title"><b>Title:</b></label>
                                {
                                    !this.state.validTitle ?
                                        <div className="error-message"><b>Invalid Title:</b></div>
                                        : ""
                                }
                                <input id="Title" name="Title" type="text" className="form-control" ref={this.titleInput} />
                                <i className="zmdi zmdi-account"></i>
                            </div>

                            <div className="form-wrapper">
                                <label htmlFor="Artist"><b>Artist:</b></label>
                                {
                                    !this.state.validArtist ?
                                        <div className="error-message"><b>Invalid artist name:</b></div>
                                        : ""
                                }
                                <input id="Artist" name="Artist" type="text" className="form-control" ref={this.artistInput} />
                                <i className="zmdi zmdi-lock"></i>
                            </div>

                            <div className="form-wrapper">
                                <label htmlFor="Album"><b>Album:</b></label>
                                {
                                    !this.state.validAlbum ?
                                        <div className="error-message"><b>Invalid album name</b></div>
                                        : ""
                                }
                                <input id="Album" name="Album" type="text" className="form-control" ref={this.albumInput} />
                                <i className="zmdi zmdi-lock"></i>
                            </div>
                            
                            <div className="form-wrapper">
                                <label htmlFor="Duration"><b>Duration (mm:ss):</b></label>
                                {
                                    !this.state.validDuration ?
                                        <div className="error-message"><b>Invalid duration</b></div>
                                        : ""
                                }
                                <input id="Duration" name="Duration" type="text" className="form-control" ref={this.durationInput} />
                                <i className="zmdi zmdi-lock"></i>
                            </div>
                            
                            <div className="form-wrapper">
                                <label htmlFor="Link"><b>Link:</b></label>
                                {
                                    !this.state.validLink ?
                                        <div className="error-message"><b>Invalid Link</b></div>
                                        : ""
                                }
                                <input id="Link" name="Link" type="text" className="form-control" ref={this.linkInput} />
                                <i className="zmdi zmdi-lock"></i>
                            </div>
                                    
                            

                            <button onClick={this.validateForm} id="login-submit-button" name="Submit">
                                Add Song
                                <i className="zmdi zmdi-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}