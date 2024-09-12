import React from 'react';
import { Song } from './Song';

export class SongFeed extends React.Component {
    constructor(props) {
        super(props)
        this.songs = this.props.songs;
    }
    render() {
        return(
            <div id='songs'>

                {
                    this.songs.map(song=>{
                        <Song title={song.title} artist={song.artist} album={song.album} duration={song.duration} link={song.link} />
                    })
                }
                
            </div>
        )
    }
}