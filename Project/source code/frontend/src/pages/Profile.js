import React from 'react';
import { PlaylistFeed } from '../components/PlaylistFeed';
import { AddPlaylist } from '../components/AddPlaylist';
import { Overlay } from '../components/Overlay';
import { EditUserForm } from '../components/EditUserForm';

export class Profile extends React.Component {
    // user
    constructor(props) {
        super(props)
        this.user = this.props.user;

        this.state = {
            toggledOverlay: false,
            toggledEditOverlay:false
        }
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.toggleEditOverlay = this.toggleEditOverlay.bind(this);
        this.closeOverlay = this.closeOverlay.bind(this);
        this.addPlaylistForm = this.addPlaylistForm.bind(this);
    }

    closeOverlay(){
        this.setState({ toggledOverlay: false });
        this.setState({ toggledEditOverlay: false });
    }

    toggleOverlay() {
        this.setState({ toggledOverlay: !this.state.toggledOverlay });
    }
    
    toggleEditOverlay() {
        this.setState({ toggledEditOverlay: !this.state.toggledEditOverlay });
    }

    addPlaylistForm() {
        return <AddPlaylist />
    }
    
    editUserForm() {
        return <EditUserForm  />
    }
    
    render() {
        let overlay;
        if (this.state.toggledOverlay) {
            overlay = <Overlay toggleOverlay={this.toggleOverlay} content={this.addPlaylistForm} closeOverlay={this.closeOverlay} />
        }
        else {
            if (this.state.toggledEditOverlay) {
                overlay = <Overlay toggleOverlay={this.toggleOverlay} content={this.editUserForm} closeOverlay={this.closeOverlay} />
            }
            else {

                overlay = "";
            }
        }
        return (
            <div id="content">
                <aside id="profile-info" className="w3-sidebar w3-bar-block">
                    <div id="profile-image-container">
                        <img id="profile-image" src={`./assets/images/${this.user.image}`} alt="" />
                    </div>

                    <div id="details-heading">{this.user.username}<i onClick={this.toggleEditOverlay} id='profile-edit-button' className="fa-solid fa-pencil" ></i></div>
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
                        <div className="counter-container" >
                            <div className='counter'>{this.user.playlistCount}</div>
                            <div className='counter-name'>Playlists</div>
                        </div>
                        <div className="counter-container">
                            <div className='counter'>{this.user.followersCount}</div>
                            <div className='counter-name'>Followers</div>
                        </div>
                        <div className="counter-container">
                            <div className='counter'>{this.user.followingCount}</div>
                            <div className='counter-name'>Following</div>
                        </div>
                    </div>


                </aside>
                <main id="main">
                    <div id='main-content-heading-container'>
                        <h1 className='content-heading'>Playlists</h1>
                        <div id='add-button-container'>
                            <span onClick={this.toggleOverlay}>Add playlist</span>
                            <span id='plus-icon-container'>
                                <i className='fa-solid fa-lg fa-plus '></i>
                            </span>
                        </div>
                    </div>
                    <PlaylistFeed playlists={this.user.playlists} />
                    {overlay}

                </main>
            </div>
        )
    }
}