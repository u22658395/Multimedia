import React from 'react';
import { Song } from './Song';

export class SongFeed extends React.Component {
    constructor(props) {
        super(props)
        this.songs = this.props.songs;
        console.log(this.songs);
        
    }
    render() {
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
                        this.songs.map(song=>{
                            return <Song key={song.id} title={song.title} artist={song.artist} album={song.album} duration={song.duration} link={song.link} />
                        })
                    }
                    
                </div>
            </>

        )
    }
}