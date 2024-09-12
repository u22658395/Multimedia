import React from 'react';

export class Song extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <a src={this.props.link} className='song'>
                <span className='song-property song-title'>{this.props.title}</span>
                <span className='song-property song-artist'>{this.props.artist}</span>
                <span className='song-property song-album'>{this.props.album}</span>
                <span className='song-property song-duration'>{this.props.duration}</span>
            </a>
        )
        
    }
}