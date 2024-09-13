import React from "react";
export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggledRegister: false,
            validEmail:true,
            validPass:true,
            validConfPass:true,
        }
        this.toggleRegister = this.toggleRegister.bind(this);
        this.validateForm = this.validateForm.bind(this);

        this.emailInput = React.createRef();
        this.passInput = React.createRef();
        this.confPassInput = React.createRef();
        
    }

    toggleRegister(e) {
        e.preventDefault;
        this.setState({ toggledRegister: !this.state.toggledRegister });
    }
    validateForm(e){
        e.preventDefault();
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        
        if(!this.emailInput.current.value.match(emailRegex)){
            this.setState({validEmail:false});
        }
        else{
            this.setState({ validEmail: true });
        }
        
        let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/
        if(!this.passInput.current.value.match(passRegex)){
            this.setState({validPass:false});
        }
        else {
            this.setState({ validPass: true });
        }

        if(this.state.toggledRegister){
            if (this.confPassInput.current.value !== this.passInput.current.value){
                this.setState({ validConfPass: false });
            }
            else {
                this.setState({ validConfPass: true });
            }
        }


    }
    render() {
        return (
            <div id="login-container" >
                <div className="wrapper">
                    <div className="inner">
                        <div className="image-holder">
                            <img id="img" src="./assets/logo/groovelist-high-resolution-logo-transparent.svg" alt="" />
                        </div>
                        <div id="form">
                            <h3><strong>{this.state.toggledRegister ? "Sign Up" : "Login"}</strong></h3>

                            <div className="form-wrapper">
                                <label htmlFor="Email"><b>Email:</b></label>
                                {
                                    !this.state.validEmail?
                                    <div className="error-message"><b>Invalid Email:</b></div>
                                    :""
                                }
                                <input id="Email" name="Email" type="text" className="form-control" ref={this.emailInput} />
                                <i className="zmdi zmdi-account"></i>
                            </div>

                            <div className="form-wrapper">
                                <label htmlFor="Password"><b>Password:</b></label>
                                {
                                    !this.state.validPass ?
                                        <div className="error-message"><b>Invalid Password:</b></div>
                                        : ""
                                }
                                <input id="Password" name="Password" type="password" className="form-control" ref={this.passInput} />
                                <i className="zmdi zmdi-lock"></i>
                            </div>

                            {
                                this.state.toggledRegister ?
                                    <div className="form-wrapper">
                                        <label htmlFor="Confirm-Password"><b>Confirm Password:</b></label>
                                        {
                                            !this.state.validConfPass ?
                                                <div className="error-message"><b>Passwords must be the same</b></div>
                                                : ""
                                        }
                                        <input id="Confirm-Password" name="Confirm-Password" type="password" className="form-control" ref={this.confPassInput} />
                                        <i className="zmdi zmdi-lock"></i>
                                    </div>
                                    : ""
                            }

                            <button onClick={this.validateForm} id="login-submit-button" name="Submit">{this.state.toggledRegister ? "Register" : "Login"}
                                <i className="zmdi zmdi-arrow-right"></i>
                            </button>
                            <a id="form-anchor" onClick={this.toggleRegister}>
                                {this.state.toggledRegister ? "Already have an Account? Login" : "Don't have an account? Register here"}
                            </a>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}