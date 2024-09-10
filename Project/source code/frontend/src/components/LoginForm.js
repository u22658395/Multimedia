import React from "react";
export class LoginForm extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div id="overlay">
                <span id="overlay-content">
                    <div id="login-container">
                        <div className="wrapper">
                            <div className="inner">
                                <div className="image-holder">
                                    <img id="img" src="./assets/logo/groovelist-high-resolution-logo-transparent.svg" alt=""/>
                                </div>
                                <div id="form">
                                    <h3><strong>Login Form</strong></h3>

                                    <div className="form-wrapper">
                                        <label for="Email"><b>Email:</b></label>
                                        <input id="Email" name="Email" type="text" className="form-control"/>
                                        <i className="zmdi zmdi-account"></i>
                                    </div>


                                    <div className="form-wrapper">
                                        <label for="Password"><b>Password:</b></label>
                                        <input id="Password" name="Password" type="password" className="form-control"/>
                                            <i className="zmdi zmdi-lock"></i>
                                    </div>

                                    <button id="login-submit-button" name="Submit">Login
                                        <i className="zmdi zmdi-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
                <div id="close-overlay">
                    x
                </div>
            </div>
        )
    }
}