import React from 'react';

export class Comment extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            < div className='comment' >
                <div className='comment-username'>{this.props.comment.username}</div>
                <div className='comment-body'>
                    <span className='comment-text'>
                        {this.props.comment.body}
                    </span>
                    <span className='comment-image-container'>
                        <img className="comment-image" src={this.props.comment.image} />
                    </span>
                </div>
            </div>
        )
    }
}