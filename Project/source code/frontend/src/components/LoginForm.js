import React from "react";
export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggledRegister: false
        }
        this.toggleRegister = this.toggleRegister.bind(this)
    }
    toggleRegister(e) {
        e.preventDefault;
        this.setState({ toggledRegister: !this.state.toggledRegister });
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
                                <input id="Email" name="Email" type="text" className="form-control" />
                                <i className="zmdi zmdi-account"></i>
                            </div>

                            {
                                this.state.toggledRegister ?
                                    <div className="form-wrapper">
                                        <label htmlFor="Confirm-Password"><b>Confirm Password:</b></label>
                                        <input id="Confirm-Password" name="Confirm-Password" type="password" className="form-control" />
                                        <i className="zmdi zmdi-lock"></i>
                                    </div>
                                    : ""
                            }

                            <div className="form-wrapper">
                                <label htmlFor="Password"><b>Password:</b></label>
                                <input id="Password" name="Password" type="password" className="form-control" />
                                <i className="zmdi zmdi-lock"></i>
                            </div>

                            <button id="login-submit-button" name="Submit">{this.state.toggledRegister ? "Register" : "Login"}
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