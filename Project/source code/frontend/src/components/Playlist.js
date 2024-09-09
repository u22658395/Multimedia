import React from "react";

export class Playlist extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="playlist">
                <div className="image-container">
                    <img src={this.props.image} alt="" className="playlist-image" />
                </div>
                <div className="playlist-content">
                    <div className="playlist-heading">
                        <span className="playlist-title">{this.props.name}</span>
                        <span className="playlist-duration">{this.props.duration}</span>
                    </div>
                    <div className="playlist-subheading">
                        <span className="playlist-author">{this.props.author}</span>
                        <span className="playlist-rating">{this.props.rating}</span>
                    </div>
                    <div className="playlist-description">{this.props.description}</div>
                </div>
            </div>
        )
    }

}