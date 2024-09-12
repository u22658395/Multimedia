import React from 'react';
import { SongFeed } from '../components/SongFeed';

export class Playlist extends React.Component {
    playlist={
        id: 1,
        image: "Designer (10).jpeg",
        name: "Rap",
        duration: 56,
        author: "John Doe",
        rating: "* * * * *",
        description: "Dive into a world where faith meets rhythm, and the Word flows with the beat. Heavenly Beats is your go-to playlist for the freshest and most inspiring Christian rap tracks. Whether you're seeking spiritual upliftment, thought-provoking lyrics, or just some head-nodding beats, this collection has it all. From powerful testimonies to lyrical sermons, each track is crafted to elevate your soul and",
        songs:[
            { title: "Fula", artist: "Chronical Deep", album: "Fula-Single", duration: 6, link: "https://music.apple.com/za/album/fula/1707836582?i=1707836587"},
            { title: "Mamazala", artist: "Baby S.O.N", album: "Mamazala-Single", duration: 6, link: "https://music.apple.com/za/album/mamazala-feat-mashudu/1690179283?i=1690179285"},
            { title: "Bala", artist: "Kelvin Momo", album: "Bala-Single", duration: 6, link: "https://music.apple.com/za/album/bala-feat-sykes/1760196900?i=1760196902"},
            
        ],
        comments:[
            {
                username:"MarryDoe",
                body:"I really like his entire playlist. 100% recommend",
                image:"com-image.jpg"
            }
        ]
    }
    constructor(props) {
        super(props)
        // this.playlist = this.props.playlist;
    }
    render() {
        return (
            <div id="content">
                <aside id="profile-info" className="w3-sidebar w3-bar-block">
                    <div id="profile-image-container">
                        <img id="profile-image" src={`./assets/images/${this.playlist.image}`} alt="" />
                    </div>

                    <div id="details-heading">{this.playlist.name}</div>

                    <div id='edit-button-container'>
                        <span>edit</span>
                        <i id='playlist-edit-button' className="fa-solid fa-pencil" ></i>
                    </div>

                    <div id="comments-container">
                        <div id='comments-heading'>Comments<i id='profile-edit-button' className="fa-solid fa-plus" ></i></div>
                        <div id='comments'>
                            {
                                this.playlist.comments.map(comment =>{

                                    return(
                                        < div key={comment.id} className='comment' >
                                            <div className='comment-username'>{comment.username}</div>
                                            <div className='comment-body'>
                                                <span className='comment-text'>
                                                    {comment.body}
                                                </span>
                                                <span className='comment-image-container'>
                                                    <img className="comment-image" src={comment.image} />
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                </aside>
                <main id="main">
                    <div id='main-content-heading-container'>
                        <h1 className='content-heading'>songs</h1>
                        
                            <div id='add-button-container'>
                                <span>Add song</span>
                                <span id='plus-icon-container'>
                                    <i className='fa-solid fa-lg fa-plus '></i>
                                </span>
                            </div>
                    
                    </div>
                    <SongFeed songs={this.playlist.songs} />
                </main>
            </div>
        )
    }
}