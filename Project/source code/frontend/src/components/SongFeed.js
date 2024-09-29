import React from 'react';
import { Song } from './Song';

export class SongFeed extends React.Component {
    constructor(props) {
        super(props)        
    }
    render() {

        if (this.props.songs.length == 0) {
            return <div id="playlists"><h1>Not found!</h1></div>
        }
        return(
            <>
                <div id='songs-heading'>
                    <span className='song-heading-property'>Title</span>
                    <span className='song-heading-property'>Artist</span>
                    <span className='song-heading-property'>Album</span>
                    <span className='song-heading-property'>Duration</span>
                </div>
                <div id='songs'>
                    
                    {
                        this.props.songs.map(song=>{
                            return <Song key={song.id} title={song.title} artist={song.artist} album={song.album} duration={song.duration} link={song.link} />
                        })
                    }
                    
                </div>
            </>

        )
    }
}