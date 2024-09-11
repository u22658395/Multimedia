import React from 'react';

export class Profile extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div id="content">
                <aside id="profile-info" className="w3-sidebar w3-bar-block">
                    <div id="profile-image-container">
                        <img id="profile-image" src="./assets/images/Designer (7).jpeg" alt=""/>
                    </div>
                    <div id="details-container">
                        <div id="details-heading">User Details</div>
                        <div id="name-container">Name</div>
                        <div id="phone-container">Phone Number</div>
                        <div id="email-container">Email</div>
                    </div>
                    <div id="stats-contaner"></div>
                </aside>
                <main id="main">
                    <div id="playlists">
                        <div className="playlist">
                            <div className="image-container">
                                <img src="./assets/images/Designer (10).jpeg" alt="" className="playlist-image" />
                            </div>
                            <div className="playlist-content">
                                <div className="playlist-heading">
                                    <span className="playlist-title">{this.props.name}</span>
                                    <span className="playlist-duration">{`${this.props.duration} mins`} </span>
                                </div>
                                <div className="playlist-subheading">
                                    <span className="playlist-author">{this.props.author}</span>
                                    <span className="playlist-rating">{this.props.rating}</span>
                                </div>
                                <div className="playlist-description">{this.props.description}</div>
                            </div>
                        </div>

                        <div className="playlist">
                            <div className="image-container">
                                <img src="./assets/images/Designer (10).jpeg" alt="" className="playlist-image" />
                            </div>
                            <div className="playlist-content">
                                <div className="playlist-heading">
                                    <span className="playlist-title">{this.props.name}</span>
                                    <span className="playlist-duration">{`${this.props.duration} mins`} </span>
                                </div>
                                <div className="playlist-subheading">
                                    <span className="playlist-author">{this.props.author}</span>
                                    <span className="playlist-rating">{this.props.rating}</span>
                                </div>
                                <div className="playlist-description">{this.props.description}</div>
                            </div>
                        </div>

                        <div className="playlist">
                            <div className="image-container">
                                <img src="./assets/images/Designer (10).jpeg" alt="" className="playlist-image" />
                            </div>
                            <div className="playlist-content">
                                <div className="playlist-heading">
                                    <span className="playlist-title">{this.props.name}</span>
                                    <span className="playlist-duration">{`${this.props.duration} mins`} </span>
                                </div>
                                <div className="playlist-subheading">
                                    <span className="playlist-author">{this.props.author}</span>
                                    <span className="playlist-rating">{this.props.rating}</span>
                                </div>
                                <div className="playlist-description">{this.props.description}</div>
                            </div>
                        </div>

                        <div className="playlist">
                            <div className="image-container">
                                <img src="./assets/images/Designer (10).jpeg" alt="" className="playlist-image" />
                            </div>
                            <div className="playlist-content">
                                <div className="playlist-heading">
                                    <span className="playlist-title">{this.props.name}</span>
                                    <span className="playlist-duration">{`${this.props.duration} mins`} </span>
                                </div>
                                <div className="playlist-subheading">
                                    <span className="playlist-author">{this.props.author}</span>
                                    <span className="playlist-rating">{this.props.rating}</span>
                                </div>
                                <div className="playlist-description">{this.props.description}</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}