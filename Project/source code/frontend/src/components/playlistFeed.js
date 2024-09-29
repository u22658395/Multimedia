import React from "react"
import { PlaylistPreview } from "./PlaylistPreview"
export class PlaylistFeed extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        if(this.props.playlists.length == 0){
            return <div id="playlists"><h1>Not found!</h1></div>
        }
        return (
            <div id="playlists">
                {
                    this.props.playlists.map(playlist => {
                        return <PlaylistPreview key={playlist.id}
                            image={playlist.image} name={playlist.name} duration={playlist.duration}
                            author={playlist.author} rating={playlist.rating} description={playlist.description}
                        />
                    })
                }
            </div>
        )
    }
}