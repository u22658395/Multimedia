import React from 'react';

export class Profile extends React.Component {
    // user
    constructor(props) {
        super(props)
        this.user = this.props.user;
    }
    render(){
        return(
            <div id="content">
                <aside id="profile-info" className="w3-sidebar w3-bar-block">
                    <div id="profile-image-container">
                        <img id="profile-image" src="./assets/images/Designer (7).jpeg" alt=""/>
                    </div>

                    <div id="details-heading">{this.user.username}<i className="fa-solid fa-pencil" ></i></div>
                    <div id="details-container">
                        <div id="name-container">
                            
                            <span className='user-detail'><i className="fa-solid fa-user"></i>Name</span>
                            <div className='detail-value'>{this.user.name}</div>
                        </div>
                        <div id="phone-container">
                            <span className='user-detail'><i className="fa-solid fa-phone"></i>Phone</span>
                            <div className='detail-value'>{this.user.phone}</div>
                        </div>
                        <div id="email-container">
                            <span className='user-detail'><i className="fa-solid fa-envelope"></i>Email</span>
                            <div className='detail-value'>{this.user.email}</div>
                        </div>
                    </div>

                    <div id="friends-container">
                        <div class="counter-container" >
                            <div className='counter'>{this.user.playlistCount}</div>
                            <div className='counter-name'>Playlists</div>
                        </div>
                        <div class="counter-container">
                            <div className='counter'>{this.user.followersCount}</div>
                            <div className='counter-name'>Followers</div>
                        </div>
                        <div class="counter-container">
                            <div className='counter'>{this.user.followingCount}</div>
                            <div className='counter-name'>Following</div>
                        </div>
                    </div>
                   

                </aside>
                <main id="main">
                    <div id='main-content-heading-container'>
                        <div className=''></div>
                        <h1 className='content-heading'>Playlists</h1>
                        <span className='fa-solid fa-plus'></span>
                    </div>
                    <div id="playlists">
                        <div className="playlist">
                            <div className="image-container">
                                <img src="./assets/images/Designer (10).jpeg" alt="" className="playlist-image" />
                            </div>
                            <div className="playlist-content">
                                <div className="playlist-heading">
                                    <span className="playlist-title">John Doe</span>
                                    <span className="playlist-duration">56 mins </span>
                                </div>
                                <div className="playlist-subheading">
                                    <span className="playlist-author">John Doe</span>
                                    <span className="playlist-rating">* * * * *</span>
                                </div>
                                <div className="playlist-description">placeholder placeholder placeholder placeholder placeholder placeholder </div>
                            </div>
                        </div>

                        <div className="playlist">
                            <div className="image-container">
                                <img src="./assets/images/Designer (10).jpeg" alt="" className="playlist-image" />
                            </div>
                            <div className="playlist-content">
                                <div className="playlist-heading">
                                    <span className="playlist-title">John Doe</span>
                                    <span className="playlist-duration">56 mins </span>
                                </div>
                                <div className="playlist-subheading">
                                    <span className="playlist-author">John Doe</span>
                                    <span className="playlist-rating">* * * * *</span>
                                </div>
                                <div className="playlist-description">placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder </div>
                            </div>
                        </div>

                        <div className="playlist">
                            <div className="image-container">
                                <img src="./assets/images/Designer (10).jpeg" alt="" className="playlist-image" />
                            </div>
                            <div className="playlist-content">
                                <div className="playlist-heading">
                                    <span className="playlist-title">John Doe</span>
                                    <span className="playlist-duration">56 mins </span>
                                </div>
                                <div className="playlist-subheading">
                                    <span className="playlist-author">John Doe</span>
                                    <span className="playlist-rating">* * * * *</span>
                                </div>
                                <div className="playlist-description">placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder </div>
                            </div>
                        </div>

                        <div className="playlist">
                            <div className="image-container">
                                <img src="./assets/images/Designer (10).jpeg" alt="" className="playlist-image" />
                            </div>
                            <div className="playlist-content">
                                <div className="playlist-heading">
                                    <span className="playlist-title">John Doe</span>
                                    <span className="playlist-duration">56 mins </span>
                                </div>
                                <div className="playlist-subheading">
                                    <span className="playlist-author">John Doe</span>
                                    <span className="playlist-rating">* * * * *</span>
                                </div>
                                <div className="playlist-description">placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}