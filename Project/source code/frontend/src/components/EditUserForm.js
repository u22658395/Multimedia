import React from "react";
export class EditUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.user = this.props.user;
        console.log("user:",this.props.user);
        
        this.state = {
            toggledRegister: false,
            validEmail: true,
            validName: true,
            validPhone: true,
        }
        this.toggleRegister = this.toggleRegister.bind(this);
        this.validateForm = this.validateForm.bind(this);

        this.emailInput = React.createRef();
        this.nameInput = React.createRef();
        this.phoneInput = React.createRef();

    }

    toggleRegister(e) {
        e.preventDefault;
        this.setState({ toggledRegister: !this.state.toggledRegister });
    }
    validateForm(e) {
        e.preventDefault();
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!this.emailInput.current.value.match(emailRegex)) {
            this.setState({ validEmail: false });
        }
        else {
            this.setState({ validEmail: true });
        }

        if (!this.nameInput.current.value.trim().length > 0) {
            this.setState({ validName: false });
        }
        else {
            this.setState({ validName: true });
        }
        const phonePattern = /^(06|07|08)/;
        if (!this.phoneInput.current.value.trim().test(phonePattern) ){
            this.setState({ validPhone: false });
        }
        else {
            this.setState({ validPhone: true });
        }
        


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
                            <h3><strong>Edit User</strong></h3>

                            <div className="form-wrapper">
                                <label htmlFor="Name"><b>Name:</b></label>
                                {
                                    !this.state.validName ?
                                        <div className="error-message"><b>Invalid Name</b></div>
                                        : ""
                                }
                                <input id="Name" name="Name" type="password" className="form-control" ref={this.nameInput}  />
                                <i className="zmdi zmdi-lock"></i>
                            </div>

                            <div className="form-wrapper">
                                <label htmlFor="Email"><b>Email:</b></label>
                                {
                                    !this.state.validEmail ?
                                        <div className="error-message"><b>Invalid Email:</b></div>
                                        : ""
                                }
                                <input id="Email" name="Email" type="text" className="form-control" ref={this.emailInput}/>
                                <i className="zmdi zmdi-account"></i>
                            </div>

                            <div className="form-wrapper">
                                <label htmlFor="Phone"><b>Phone:</b></label>
                                {
                                    !this.state.validPhone ?
                                        <div className="error-message"><b>Invalid Phone:</b></div>
                                        : ""
                                }
                                <input id="Phone" name="Phone" type="password" className="form-control" ref={this.phoneInput}/>
                                <i className="zmdi zmdi-lock"></i>
                            </div>                
                            

                            <button onClick={this.validateForm} id="login-submit-button" name="Submit">
                                Save
                                <i className="zmdi zmdi-arrow-right"></i>
                            </button>
                           
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}