import React from "react"
import { Playlist } from "./playlist"
export class PlaylistFeed extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div id="playlists">
               {
                    this.props.playlists.map(playlist=>{
                        return <Playlist key={playlist.id}
                            image={playlist.image} name={playlist.name} duration={playlist.duration}
                            author={playlist.author} rating={playlist.rating} description={playlist.description}
                        />
                    })
               }
            </div>
        )
    }
}