import React from "react";
import { PlaylistPreview } from "../components/PlaylistPreview";
import { Overlay } from "../components/Overlay";
import { LoginForm } from "../components/LoginForm";
import { Navbar } from "../components/Navbar";

export class Splash extends React.Component {

    playlists = [
        { id: 1, image: "Designer (10).jpeg", name: "Rap", duration: 56, author: "John Doe", rating: "* * * * *", description: "Dive into a world where faith meets rhythm, and the Word flows with the beat. Heavenly Beats is your go-to playlist for the freshest and most inspiring Christian rap tracks. Whether you're seeking spiritual upliftment, thought-provoking lyrics, or just some head-nodding beats, this collection has it all. From powerful testimonies to lyrical sermons, each track is crafted to elevate your soul and" },
        { id: 2, image: "Designer (11).jpeg", name: "Rap", duration: 35, author: "Marry Doe", rating: "* * * * *", description: "Dive into a world where faith meets rhythm, and the Word flows with the beat. Heavenly Beats is your go-to playlist for the freshest and most inspiring Christian rap tracks. Whether you're seeking spiritual upliftment, thought-provoking lyrics, or just some head-nodding beats, this collection has it all. From powerful testimonies to lyrical sermons, each track is crafted to elevate your soul and" },
        { id: 3, image: "Designer (9).jpeg", name: "Rap", duration: 36, author: "Jane Doe", rating: "* * * * *", description: "Dive into a world where faith meets rhythm, and the Word flows with the beat. Heavenly Beats is your go-to playlist for the freshest and most inspiring Christian rap tracks. Whether you're seeking spiritual upliftment, thought-provoking lyrics, or just some head-nodding beats, this collection has it all. From powerful testimonies to lyrical sermons, each track is crafted to elevate your soul and" },
        { id: 4, image: "Designer (8).jpeg", name: "Rap", duration: 36, author: "James Doe", rating: "* * * * *", description: "Dive into a world where faith meets rhythm, and the Word flows with the beat. Heavenly Beats is your go-to playlist for the freshest and most inspiring Christian rap tracks. Whether you're seeking spiritual upliftment, thought-provoking lyrics, or just some head-nodding beats, this collection has it all. From powerful testimonies to lyrical sermons, each track is crafted to elevate your soul and" },

    ]

    constructor(props) {
        super(props);
        this.state = {
            toggledOverlay: false
        }
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.closeOverlay = this.closeOverlay.bind(this);
        this.loginForm = this.loginForm.bind(this);
    }

    toggleOverlay() {
        this.setState({ toggledOverlay: !this.state.toggledOverlay });
    }

    closeOverlay() {
        this.setState({ toggledOverlay: false });
    }

    loginForm() {
        return <LoginForm />
    }
    
    render() {
        let overlay;
        if (this.state.toggledOverlay) {
            overlay = <Overlay toggleOverlay={this.toggleOverlay} content={this.loginForm} closeOverlay={this.closeOverlay} />
        }
        else {
            overlay = "";
        }
        return (
            <>
                <Navbar /> 
            <div id="content">
                <h1 className="welcome-text" id="heading-text">Welcome to GrooveList: Your Musical Oasis</h1>
                <p className="welcome-text" id="sub-heading">Step into GrooveList, where your musical journey begins. Here, melodies come alive, playlists tell stories, and every
                    beat connects us. Discover, create, and share playlists that resonate with your soul. Whether you're a passionate
                    curator, an avid listener, or a musical explorer, GrooveList is the perfect place for you. Connect with fellow music
                    lovers, uncover hidden gems, and let the rhythm guide you.</p>

                <span onClick={this.toggleOverlay} className="page" id="login-button">Login</span>
                {overlay}

                <div id="slider">
                    {
                        this.playlists.map(playlist => {
                            return <PlaylistPreview key={playlist.id}
                                image={playlist.image} name={playlist.name} duration={playlist.duration}
                                author={playlist.author} rating={playlist.rating} description={playlist.description}
                            />
                        })
                    }

                </div>

            </div>
        </>
        )
    }
}