import React from "react";
import { Link } from "react-router-dom";

export class PlaylistPreview extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Link className="playlist" to={`/playlist/${this.props.id}`}>
                <div className="image-container">
                    <img src={`./assets/images/${this.props.image}`} alt="" className="playlist-image" />
                </div>
                <div className="playlist-content">
                    <div className="playlist-heading">
                        <span className="playlist-title">{this.props.name}</span>
                        <span className="playlist-duration">{`${this.props.duration} mins`} </span>
                    </div>
                    <div className="playlist-subheading">
                        <span className="playlist-author">{this.props.author}</span>
                        <span className="playlist-rating">{this.props.rating}</span>
                    </div>
                    <div className="playlist-description">{this.props.description}</div>
                </div>
            </Link>
        )
    }

}